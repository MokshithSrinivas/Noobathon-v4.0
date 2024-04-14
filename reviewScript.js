function smoothPageTransition(url) {
    document.body.style.opacity = '0'; // Fade out the page
    setTimeout(() => {
        window.location.href = url; // Navigate to the new page after the fade out effect
    }, 350); // Wait for 500ms (equal to the transition duration) before navigating
}



function getUrlParams() {
    const searchParams = new URLSearchParams(window.location.search);
    return Object.fromEntries(searchParams.entries());
}

function displayReviews() {
    const params = getUrlParams();

    const reviewContainer = document.getElementById("review-container");
    if (reviewContainer) {
        reviewContainer.innerHTML = `
            <div class="preview-info">
                <h3 class="preview-title">Reviews of ${params.title}</h3>
                <!-- Display author and reviews data here if available -->
            </div>
            <button class="btn btn-outline-success edit-btn col-md-3">Write your review!</button>
            <a class="btn btn-outline-light edit-btn col-md-3" onclick="smoothPageTransition('listings.html')">Go back to listings</a>
            <a href="#" id="review-link">Check reviews</a> <!-- Ensure this link has an href attribute -->
        `;
    } else {
        console.error("Review container not found.");
    }
}

window.addEventListener("DOMContentLoaded", displayReviews);
