import { Reader } from "../models/Reader";
import { Copy } from "../models/Copy";

export class BorrowService {
    public borrow(reader: Reader, copy: Copy): boolean {
        if (copy.isCopyAvailable()) {
            reader.addCopy(copy);
            copy.setAvailable(false);
            return true;
        } else {
            // error
            return false;
        }
    }

    public returnBook(reader: Reader, copy: Copy): boolean {
        if (reader.hasCopy(copy)) {
            reader.returnCopy(copy);
            copy.setAvailable(true);
            return true;
        } else {
            return false;
        }
    }
}
