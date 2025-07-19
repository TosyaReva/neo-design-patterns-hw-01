import { Book } from "./Book";

export class Copy {
    protected book: Book;
    protected isAvailable: boolean = true;

    constructor(book: Book) {
        this.book = book;
    }

    public isCopyAvailable = () => this.isAvailable;
    public setAvailable = (value: boolean) => (this.isAvailable = value);
}
