import { clone, merge } from '../src/cloneMerge';

describe('Clone and Merge', () => {
    it('should clone two simple objects', () => {
        // Arrange
        const a = { name: 'Maria', surname: 'Ibañez', country: 'SPA' };
        const b = { name: 'Luisa', age: 31, married: true };

        // Act
        const result = clone({ a: 1, b: 2, hola: 'Mundo' });

        // Assert
        const expected = { a: 1, b: 2, hola: 'Mundo' };
        expect(result).toEqual(expected);
    });
    it('should merge two objects', () => {
        // Arrange
        const a = { name: 'Maria', surname: 'Ibañez', country: 'SPA' };
        const b = { name: 'Luisa', age: 31, married: true };

        // Act
        const result = merge(a, b);

        // Assert
        const expected = {
            age: 31,
            country: 'SPA',
            married: true,
            name: 'Maria',
            surname: 'Ibañez',
        };
        expect(result).toEqual(expected);
    });
});
