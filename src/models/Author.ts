import { Book } from "./Book";

export class Author {
    protected name: string;
    protected books: Book[] = [];

    constructor(name: string) {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }
    public getBooks(): Book[] {
        return this.books;
    }
    public addBooks(book: Book) {
        this.books.push(book);
    }
}
