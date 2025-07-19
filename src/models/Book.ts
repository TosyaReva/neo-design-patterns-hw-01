import { AbstractBook } from "./AbstractBook";
import { Author } from "./Author";

export class Book extends AbstractBook {
    constructor(name: string, year: number, author: Author) {
        super(name, year, author);
    }

    public getDescription(): string {
        return `Physical book "${this.name}" by ${this.author.getName()} (${this.year})`;
    }
}
