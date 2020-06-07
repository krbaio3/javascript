export interface Book {
    title: String;
    isRead: boolean;
}

const isBookRead = (books: Book[], titleToSearch: String): boolean => {
    return !!books.filter( (book: Book) => book.title === titleToSearch && book.isRead)
};

export {isBookRead};
