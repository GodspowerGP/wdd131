document.addEventListener("DOMContentLoaded", () => {
    // Check if the review counter exists in localStorage
    let reviewCount = localStorage.getItem("reviewCount");

    // Initialize or increment the counter
    if (!reviewCount) {
        reviewCount = 1;
    } else {
        reviewCount = parseInt(reviewCount) + 1;
    }

    // Save the new count back to localStorage
    localStorage.setItem("reviewCount", reviewCount);

    // Display the count on the page
    const countDisplay = document.getElementById("review-count");
    if (countDisplay) {
        countDisplay.textContent = reviewCount;
    }
});
