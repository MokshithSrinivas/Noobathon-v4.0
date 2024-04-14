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

function displayBookDetails() {
    const params = getUrlParams();

    const previewContainer = document.getElementById("preview-container");
    if (previewContainer) {
        previewContainer.innerHTML = `
            <div class="preview-img">
                <img src="${params.image}" alt="Book Image">
            </div>
            <div class="preview-right">
                <div class="preview-info">
                <h3 class="preview-title">${params.title}</h3>
                <h5 class="preview-author mb-2">${params.author}</h5>
                <p class="preview-text">${params.description}</p>
                <p class="preview-text"><strong>Price:</strong> $${parseFloat(params.price)}</p>
                <p class="preview-text"><strong>Rent per Day:</strong> $${parseFloat(params.rentPerDay)}</p>
                <p class="preview-text"><strong>Days Allowed for renting:</strong> ${params.daysAllowed} days</p>
                <p class="preview-text"><strong>Number of copies available:</strong> ${params.copies || 'N/A'}</p>
                </div>
                <div class="btn-container">
                    <button class="btn btn-outline-warning edit-btn col-md-3">Add to cart</button>
                    <button class="btn btn-outline-success edit-btn col-md-3">Buy Now!</button>
                    <button class="btn btn-outline-success edit-btn col-md-3">Rent Now!</button>
                </div>
                <a class="btn btn-outline-light edit-btn col-md-3" onclick="smoothPageTransition('listings.html')">Go back to listings</a>
                <a onclick="smoothPageTransition('reviews.html')" id="review-link">Check reviews</a>
            </div>

        `;
    } else {
        console.error("Preview container not found.");
    }
}

window.addEventListener("DOMContentLoaded", displayBookDetails);

//Code for reviews script

function redirectToReviewPage(title) {
    const urlToReview = `reviews.html?title=${encodeURIComponent(title)}`;
    window.location.href = urlToReview;
}

function addEventListeners() {
    let reviewLink = document.getElementById('review-link');
    reviewLink.addEventListener('click', (event) => {
        event.preventDefault();
        const title = reviewLink.getAttribute('data-title');
        redirectToReviewPage(title);
    });
  }
  
  // Call the function to add event listeners when the page loads
  window.addEventListener("DOMContentLoaded", addEventListeners);