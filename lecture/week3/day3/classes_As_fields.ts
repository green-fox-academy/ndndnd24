class Page {
    content: string;

    constructor(content: string = 'asd') {
        this.content = content;
    }

    public getContent(): string {
        return this.content;
    }
}

class Book {
    pages: Page[] = [];

    public add(page: Page): void {
        this.pages.push(page);
    }

    public countBlankPages(): number {
        let counter: number = 0;

        for (let i: number = 0; i < this.pages.length; i++) {
            if (this.pages[i].getContent() === '') {
                counter++;
            }
        }
        return counter;
    }
}

let page = new Page();
let book = new Book();

console.log(page.getContent());
//console.log(book.add());

