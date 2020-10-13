import { Book, isBookRead } from '../src/readBooks';

describe('Read-books-question Spec', () => {
    const books: Book[] = [
        { title: 'Test book read', isRead: true },
        { title: 'Test book didnt read', isRead: false },
        { title: 'Drago Ball Z', isRead: true },
    ];
    it('should return true when pass a book read', () => {
        // Arrange
        // Act
        const result = isBookRead(books, 'Test book read');
        // Assert
        expect(result).toBeTruthy();
    });

    it("should return false when pass a book didn't read", () => {
        // Arrange
        // Act
        const result = isBookRead(books, 'Test book didnt read');
        // Assert
        expect(result).toBeFalsy();
    });
});
