import { Author } from "./Author";

export abstract class AbstractBook {
    protected _name: string;
    protected _year: number;
    protected _author: Author;

    constructor(name: string, year: number, author: Author) {
        this._name = name;
        this._year = year;
        this._author = author;
    }

    public get name(): string {
        return this._name;
    }
    public set name(newName: string) {
        this._name = newName;
    }

    public get year(): number {
        return this._year;
    }
    public set year(newYear: number) {
        this._year = newYear;
    }

    public get author(): Author {
        return this._author;
    }
    public set author(newAuthor: Author) {
        this._author = newAuthor;
    }

    abstract getDescription(): string;
}
