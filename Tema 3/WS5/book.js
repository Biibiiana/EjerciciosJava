class bookList{
    constructor() {
        this.allBooksRead = [];
        this.allBooksNotRead = [];
        this.allBooks = [];
        this.nextBook = null;
        this.currentBook = null;
        this.lastBook = null;
    }

    add(book) {
        if (book.allBooksRead == true){
            this.allBooksRead += 1;
            this.allBooks.splice(0, this.allBooksRead);
        }
        if (book.allBooksRead == false){
            this.allBooksNotRead += 1;
            this.allBooks.splice(1, this.allBooksNotRead);
        }
    }

    finishCurrentBook(){
        this.currentBook.markAsRead();
        this.lastBook = this.currentBook;
        this.currentBook = this.nextBook
        if (this.nextBook != undefined){
            this.order()
            if(this.allBooks[0].read != true){
                this.nextBook = this.allBooks[0];
                this.read += 1;
                this.notread -= 1;
            }
            else
                this.nextBook = undefined;
        }
    }

    order(){
        this.books.sort((one, two)=> {
            if(one.read == true && two.read == false)
                return -1;
            else if(one.read == false && two.read == true)
                return 1;
            else 
                return 0;
        })
    }
}

class book{
    constructor(title, genre, author){
        this.tit = title;
        this.gen = genre;
        this.au = author;        
        this.read = false;
        this.readDate;
    }

    markAsRead(){
        this.read = true;
        this.readDate = new Date();
    }
}

l1 = new book("La la la", "Comedia", "Antonio");
l2 = new book("Le le le", "Fantasía", "Luisa");
bl = new bookList();
bl.addBook(l1);
bl.addBook(l2);