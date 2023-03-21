
// a list of book objects
let allBooks = [];

// a function to generate a display of all of the books
// in an array
const renderBooks = (bookArray) => {
    const target = document.getElementById('content');
    let content = "<ul>";
    for (let i = 0; i < bookArray.length; i++) {
        const book = bookArray[i];
        content += `<li>${book.title} by <em>${book.author}</em>`
    };
    content += "</ul>";
    target.innerHTML = content;
};

const renderBookGrid = (bookArray) => {
    const target = document.getElementById('content');
    let content = '<div class="book-grid">';
    for (let i = 0; i < bookArray.length; i++) {
        const book = bookArray[i];
        content += `<div class="book">
            <h3>${book.title}</h3>
            <img src="${book.imageLink}" alt="book cover">
            <dl class="book-description">
                <dt>Author</dt><dd>${book.author}</dd>
                <dt>Country</dt><dd>${book.country}</dd>
            </dl>
            </div>`
    };
    content += "</div>";
    target.innerHTML = content;
};

// global variable to record which view is current
let display = "list";

// an event handler for the control button
document.getElementById('control').onclick = (event) => {
    console.log('control button clicked');
    if (display === "list") {
        display = "grid";
    } else {
        display = "list";
    }
    render();
};

const render = () => {
    if (display === 'grid') {
        renderBookGrid(allBooks.books)
    } else {
        renderBooks(allBooks.books);
    }
}

// load the data via fetch and store in the global variable
// then call render to draw the page.
const loadData = () => {
    fetch('books.json')
    .then(response => response.json())
    .then(data => {
        allBooks = data;
        render();
    })
}

window.onload = () => {
    loadData();
};


