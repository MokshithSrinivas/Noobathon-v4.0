function smoothPageTransition(url) {
    document.body.style.opacity = '0'; // Fade out the page
    setTimeout(() => {
        window.location.href = url; // Navigate to the new page after the fade out effect
    }, 350); // Wait for 500ms (equal to the transition duration) before navigating
}




let booksData = [
    {
      title: "The Silent Patient",
      author: "Alex Michaelides",
      description: "A psychological thriller about a woman who hasn't spoken a word in years, and the therapist determined to unravel the mystery.",
      image:'https://rukminim2.flixcart.com/image/850/1000/k5zn9u80/book/6/1/3/the-silent-patient-original-imafgsy68ph6yggr.jpeg?q=20&crop=false',
      stores: ["Bookworm's Haven", "PageTurner Plaza"],
      price: 25.99,
      rentPerDay: 3.50,
      copiesAvailable: 12,
      daysAllowed: 14
    },
    {
      title: "Where the Crawdads Sing",
      author: "Delia Owens",
      description: "A novel about a young girl living in the marshes of North Carolina, navigating love, loss, and a murder investigation.",
      image:'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1582135294i/36809135.jpg',
      stores: ["Novel Oasis", "Readwell Realm"],
      price: 19.99,
      rentPerDay: 2.75,
      copiesAvailable: 12,
      daysAllowed: 10
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      description: "A classic tale of love, wealth, and tragedy set in the Roaring Twenties.",
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsW9vWI0uieY0Heok_K66L3de-lMHQFf9bram7pAeIuA&s',
      stores: ["Chapter Corner", "Readwell Realm"],
      price: 12.50,
      rentPerDay: 1.99,
      copiesAvailable: 12,
      daysAllowed: 7
    },
    {
      title: "Educated",
      author: "Tara Westover",
      description: "A memoir recounting the author's journey from a survivalist family in rural Idaho to earning a PhD from Cambridge University.",
      image:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.in%2FEducated-Memoir-Tara-Westover%2Fdp%2F0399590501&psig=AOvVaw1MiU1RhVFk2CHkKQi4nMsL&ust=1713122724079000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPCfiM71v4UDFQAAAAAdAAAAABAJ',
      stores: ["BookBound Boulevard", "Literary Lounge"],
      price: 29.95,
      rentPerDay: 4.25,
      copiesAvailable: 12,
      daysAllowed: 12
    },
    {
      title: "The Alchemist",
      author: "Paulo Coelho",
      description: "A philosophical novel about a young shepherd named Santiago on a quest for his personal legend.",
      image:'https://saraswatibook.in/wp-content/uploads/2022/02/158-1.jpg',
      stores: ["Storyland Station", "Bookish Haven"],
      price: 14.99,
      rentPerDay: 2.00,
      copiesAvailable: 12,
      daysAllowed: 8
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        description: "A classic novel that explores racial injustice and moral growth in a small Southern town.",
        image:'https://5.imimg.com/data5/SELLER/Default/2023/5/309141919/ZO/XH/SD/188754325/whatsapp-image-2023-05-18-at-4-45-51-pm-500x500.jpg',
        stores: ["BookNook", "Chapter Corner"],
        price: 14.95,
        rentPerDay: 2.25,
        copiesAvailable: 12,
        daysAllowed: 7
      },
      {
        title: "The Hunger Games",
        author: "Suzanne Collins",
        description: "The first book in a dystopian trilogy where teenagers fight in a televised death match for survival.",
        image:'https://m.media-amazon.com/images/I/61I24wOsn8L._AC_UF1000,1000_QL80_.jpg',
        stores: ["Novel Oasis", "Readwell Realm"],
        price: 18.99,
        rentPerDay: 2.50,
        copiesAvailable: 12,
        daysAllowed: 10
      },
      {
        title: "1984",
        author: "George Orwell",
        description: "A dystopian novel about a totalitarian regime that controls every aspect of its citizens' lives.",
        image:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.in%2FNineteen-Eighty-Four-Penguin-Essentials%2Fdp%2F0141036141&psig=AOvVaw2M92-jB2iH2QNNeIQlItvV&ust=1713122611371000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKjI1Jf1v4UDFQAAAAAdAAAAABAE',
        stores: ["Bookworm's Haven", "Storyland Station"],
        price: 10.75,
        rentPerDay: 1.75,
        copiesAvailable: 12,
        daysAllowed: 5
      },
      {
        title: "The Da Vinci Code",
        author: "Dan Brown",
        description: "A thriller that follows symbologist Robert Langdon as he unravels mysteries hidden in art and history.",
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAggxznUex-04AaTISMNWyxQTeojWlyjnnCi4LuMANsA&s',
        stores: ["BookBound Boulevard", "Literary Lounge"],
        price: 22.50,
        rentPerDay: 3.00,
        copiesAvailable: 12,
        daysAllowed: 9
      },
      {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        description: "A romantic novel centered on the lives of Elizabeth Bennet and Mr. Darcy, navigating social norms and misunderstandings.",
        image:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.in%2FPride-Prejudice-Classic-Reprint-Austen%2Fdp%2F1330916050&psig=AOvVaw3Ya2O1ldcCJLVuEmmyAR5w&ust=1713122528361000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIii5vb0v4UDFQAAAAAdAAAAABAE',
        stores: ["PageTurner Plaza", "Bookish Haven"],
        price: 12.99,
        rentPerDay: 1.95,
        copiesAvailable: 12,
        daysAllowed: 6
      }
  ];

  //generating code to create new card
  function generateBookCard(book) {
    return `
      <div class="col-md-3 mb-3">
        <div class="card">
          <img src=${book.image} class="card-img-top" alt="Image failed to load">
          <div class="card-body">
            <h5 class="card-title">${book.title}</h5>
            <h6 class="card-subtitle mb-2">${book.author}</h6>
            <p class="card-text" id="price">Price:</strong> $${book.price}</p>
            <p class="card-text">Rent per Day:</strong> $${book.rentPerDay}</p>
          </div>
        </div>
      </div>
    `;
  }
  

  function displayBooks() {
    const booksContainer = document.getElementById("books-container"); // Assuming you have a container with id "books-container"
    // Generate HTML for each book card and append to the container
    booksData.forEach((book) => {
      const bookCard = generateBookCard(book);
      booksContainer.innerHTML += bookCard;
    });
  }

  window.addEventListener("DOMContentLoaded", displayBooks);

//   Following code is for preview page
//
//
function redirectToEditPage(index) {
    const selectedBook = booksData[index];
    urlToEdit = `editListing.html?title=${selectedBook.title}&author=${selectedBook.author}&price=${selectedBook.price}&description=${selectedBook.description}&image=${selectedBook.image}&rentPerDay=${selectedBook.rentPerDay}&stores=${selectedBook.stores}&daysAllowed=${selectedBook.daysAllowed}&copies=${selectedBook.copiesAvailable}`
    window.location.href = urlToEdit;
  }

function addEventListeners() {
    let cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
      card.addEventListener('click', () => {
        // Redirect to the preview page with book details
        redirectToEditPage(index); // Pass the index of the clicked card
      });
    });
  }
  
  // Call the function to add event listeners when the page loads
  window.addEventListener("DOMContentLoaded", addEventListeners);
  