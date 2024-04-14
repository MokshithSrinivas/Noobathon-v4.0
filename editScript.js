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

    const editForm = document.getElementById("edit-form");
    if (editForm) {
        editForm.innerHTML = `
        <div class="row mt-3">
        <div class="col-md-4 offset-md-4">
            <h3 id="register">Edit Listing</h3>
            <form class="row g-3 needs-validation">
                <div class="row">
                    <div class="mb-3 col-md-6 g-3">
                        <label for="bookTitle" class="form-label">Book Title</label>
                        <input id="bookTitle" class="form-control" value="${params.title}" required>
                        <div class="invalid-feedback">Please enter the Book's Title</div>
                    </div>
    
                <div class="mb-3 col-md-6 g-3">
                        <label for="author" class="form-label">Author</label>
                        <input id="author" class="form-control" value="${params.author}" required> </input>
                        <div class="invalid-feedback">Please enter the Book's Author</div>
                    </div>      
                </div>

                <div class="mb-3">
                    <label for="description" class="form-label">Description</label>
                    <input id="description" class="form-control" value="${params.description}"> </input>
                </div>    

                <div class="mb-3">
                    <label for="imgURL" class="form-label">Image Link</label>
                    <input id="imgURL"class="form-control" value="${params.image}" required> </input>
                </div>    

                <div class="mb-3">
                    <label for="stores" class="form-label">Stores</label>
                    <input id="stores" class="form-control" value="${params.stores[0]}","${params.stores[1]}" required></input>
                    <div class="invalid-feedback">Please enter the stores where the books are available</div>
                </div>
                
                <div class="row align-items-end">
                    <div class="mb-3 col-md-4 g-3">
                        <label for="price" class="form-label">Price(in $)</label>
                        <input id="price" type="number" class="form-control" value=${parseFloat(params.price)} required> </input>
                        <div class="invalid-feedback">Please enter the price of the book</div>
                    </div>
                     
                    <div class="mb-3 col-md-4 g-3">
                        <label for="rent" class="form-label">Rent per day</label>
                        <input id="rent" type="number" class="form-control" value=${parseFloat(params.rentPerDay)} required> </input>
                        <div class="invalid-feedback">Please enter the rent of the book</div>
                    </div>
                </div>

                <div class="row align-items-end">
                    <div class="mb-3 col-md-4 g-3">
                        <label for="rent" class="form-label">Number of days allowed for renting</label>
                        <input id="rent" type="number" class="form-control" value=${params.daysAllowed} required> </input>
                        <div class="invalid-feedback">Please enter the rent of the book</div>
                    </div>

                    <div class="mb-3 col-md-4 g-3">
                    <label for="rent" class="form-label">Number of copies available</label>
                    <input id="rent" type="number" class="form-control" value=${params.copies} required> </input>
                    <div class="invalid-feedback">Please enter the number of copies of the book</div>
                </div>
                </div>

                <a class="btn btn-outline-light edit-btn col-md-4" onclick='smoothPageTransition("editSuccess.html")'>Edit listing</a>
                <a class="btn btn-outline-danger edit-btn col-md-4" onclick='smoothPageTransition("deleteSuccess.html")'>Delete listing</a>
                <a id="goBack" onclick='smoothPageTransition("adminDashboard.html")'>Go to dashboard</a>
        </form>
        </div>
    </div>
        `;
    } else {
        console.error("Review container not found.");
    }
}

window.addEventListener("DOMContentLoaded", displayReviews);
