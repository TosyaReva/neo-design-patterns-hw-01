import { AbstractBook } from "./AbstractBook";
import { Author } from "./Author";

export class EBook extends AbstractBook {
    protected url: string;
    constructor(name: string, year: number, author: Author, url: string) {
        super(name, year, author);
        this.url = url;
    }

    public getDescription(): string {
        return `E-book book "${this.name}" by ${this.author.getName()} (${this.year}) - Available at: <${this.getUrl()}>`;
    }

    public getUrl = () => this.url;
}
