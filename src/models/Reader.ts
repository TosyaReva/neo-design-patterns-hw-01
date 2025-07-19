import { Copy } from "./Copy";

export class Reader {
    protected id: string;
    protected name: string;
    protected copies: Copy[] = [];

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
    }

    public getID = () => this.id;
    public getName = () => this.name;
    public getCopies = () => this.copies;

    public addCopy = (copy: Copy) => this.copies.push(copy);
    public hasCopy = (copy: Copy) => this.copies.includes(copy);
    public returnCopy = (copy: Copy) => (this.copies = this.copies.filter((item) => item !== copy));
}
