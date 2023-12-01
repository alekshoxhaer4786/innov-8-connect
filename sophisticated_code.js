// filename: sophisticated_code.js

/*
This code demonstrates a complex implementation of a bookstore management system.
It includes functions for adding, updating, and deleting books, as well as searching,
sorting, and displaying books.

Please note that this code is purely for demonstration purposes and may not necessarily
reflect the best practices in software development.
*/

class Book {
    constructor(title, author, genre, price) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.price = price;
    }
}

class Bookstore {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    updateBook(index, book) {
        if (index >= 0 && index < this.books.length) {
            this.books[index] = book;
        } else {
            console.log("Invalid index specified.");
        }
    }

    deleteBook(index) {
        if (index >= 0 && index < this.books.length) {
            this.books.splice(index, 1);
        } else {
            console.log("Invalid index specified.");
        }
    }

    searchBooks(keyword) {
        return this.books.filter((book) =>
            book.title.toLowerCase().includes(keyword.toLowerCase()) ||
            book.author.toLowerCase().includes(keyword.toLowerCase()) ||
            book.genre.toLowerCase().includes(keyword.toLowerCase())
        );
    }

    sortBooksByPrice(ascending = true) {
        this.books.sort((a, b) => (ascending ? a.price - b.price : b.price - a.price));
    }

    displayBooks() {
        console.log("Bookstore Inventory:");
        console.log("---------------------");
        this.books.forEach((book, index) => {
            console.log(`#${index + 1}: ${book.title} - ${book.author} - ${book.genre} - $${book.price}`);
        });
    }
}

// Usage example:

// Create a new bookstore instance
const myBookstore = new Bookstore();

// Add books to the bookstore
myBookstore.addBook(new Book("The Great Gatsby", "F. Scott Fitzgerald", "Classics", 9.99));
myBookstore.addBook(new Book("To Kill a Mockingbird", "Harper Lee", "Fiction", 12.99));
myBookstore.addBook(new Book("1984", "George Orwell", "Science Fiction", 8.99));

// Display all books in the bookstore
myBookstore.displayBooks();

// Update the first book
myBookstore.updateBook(0, new Book("The Great Gatsby (Revised)", "F. Scott Fitzgerald", "Classics", 14.99));

// Delete the second book
myBookstore.deleteBook(1);

// Search for books containing "Mockingbird"
const searchResults = myBookstore.searchBooks("Mockingbird");
console.log("Search Results:");
console.log(searchResults);

// Sort books by price in descending order
myBookstore.sortBooksByPrice(false);

// Display the updated books in the bookstore
myBookstore.displayBooks();