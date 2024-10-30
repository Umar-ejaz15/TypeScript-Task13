"use strict";
// Library Inventory System:
// Use a Book class with properties _title, author, genre, and copiesAvailable.
// Add methods to borrow and return a book, adjusting the copiesAvailable.
// Use getters to check if a book is available.
class Book {
    constructor(_title, author, genre, copiesAvailable) {
        this._title = _title;
        this.author = author;
        this.genre = genre;
        this.copiesAvailable = copiesAvailable;
    }
    borrowBook(bookName) {
        if (this._title.toString() === bookName.toString()) {
            if (this.copiesAvailable > 0) {
                this.copiesAvailable--;
                return "Book borrowed successfully";
            }
            else {
                return "Book Is Out Of Stock";
            }
        }
        else {
            return "Book not found";
        }
    }
    returnBook(bookName) {
        if (this._title.toString() === bookName.toString()) {
            this.copiesAvailable++;
            return "Book returned successfully";
        }
        else {
            return "Book not found";
        }
    }
    get title() {
        if (this.copiesAvailable > 0) {
            return this._title;
        }
        else {
            return "Book Is Out Of Stock";
        }
    }
}
const b1 = new Book("The Alchemist", "Paulo Coelho", "Fiction", 10);
const b2 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "Fiction", 5);
const b3 = new Book("The Hobbit", "J.R.R. Tolkien", "Fantasy", 8);
const b4 = new Book("The Da Vinci Code", "Dan Brown", "Mystery", 3);
const b5 = new Book("The Catcher in the Rye", "J.D. Salinger", "Fiction", 0);
console.log(b5);
// Using console.log to display the result of borrowBook method
console.log(b5.borrowBook("The Catcher in the Rye"));
console.log(b5);
// console.log(b1.returnBook("The Alchemist"));
console.log(b5.title);
