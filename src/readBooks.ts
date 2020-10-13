export interface Book {
    title: string;
    isRead: boolean;
}

export const isBookRead = (books: Book[], titleToSearch: string): boolean =>
    books.filter((book: Book) => book.title === titleToSearch && book.isRead).length > 0;
