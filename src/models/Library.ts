import { Author } from "./Author";
import { AbstractBook } from "./AbstractBook";
import { Copy } from "./Copy";
import { Reader } from "./Reader";
import { Book } from "./Book";
import { EBook } from "./EBook";

export class Library {
    protected authors: Author[] = [];
    protected books: AbstractBook[] = [];
    protected copies: Copy[] = [];
    protected readers: Reader[] = [];

    public addAuthor(author: Author) {
        this.authors.push(author);
    }
    public addBook(book: AbstractBook) {
        this.books.push(book);
    }

    public addCopy(copy: Copy) {
        this.copies.push(copy);
    }
    public addReader(reader: Reader) {
        this.readers.push(reader);
    }

    public getCopy(copy: Copy) {
        const copyBook = this.copies.find((item) => item === copy);

        if (!copyBook) throw new Error("Copy was not found in the librarie");

        if (copyBook.isCopyAvailable()) {
            copyBook.setAvailable(false);
            return copyBook;
        } else {
            throw new Error("Copy is not awailable");
        }
    }

    public findBook(bookToFind: AbstractBook) {
        const book = this.books.find((item) => item === bookToFind);

        if (!book) throw new Error("Book was not found in the librarie");
        return book;
    }
}
