document.addEventListener('DOMContentLoaded', function() {
    const reviewsWrapper = document.querySelector('.reviews-wrapper');
    const reviewItems = document.querySelectorAll('.review-item');
    let currentIndex = 0;
    const totalReviews = reviewItems.length;
    const scrollInterval = 3000; // Scroll every 3 seconds

    function showNextReview() {
        currentIndex++;
        if (currentIndex >= totalReviews) {
            currentIndex = 0; // Loop back to the first review
        }
        const offset = -currentIndex * reviewItems[0].clientWidth;
        reviewsWrapper.style.transform = `translateX(${offset}px)`;
    }

    setInterval(showNextReview, scrollInterval);

    // Adjusts slider width on window resize
    window.addEventListener('resize', () => {
        const offset = -currentIndex * reviewItems[0].clientWidth;
        reviewsWrapper.style.transform = `translateX(${offset}px)`;
    });
});
