import { head, init, last, tail } from '../src/array';

describe('Array Spec', () => {
    it('(HEAD) should RETURN 133 WHEN pass [133, 2, 3, 4, 5]', () => {
        // Arrange
        const myArray = [133, 2, 3, 4, 5];

        // Act
        const result = head(myArray);

        // Asset
        expect(result).toEqual(133);
    });
    it('(TAIL) should RETURN [ 2, 3, 4, 5] elements WHEN pass [133, 2, 3, 4, 5]', () => {
        // Arrange
        const myArray = [133, 2, 3, 4, 5];

        // Act
        const result = tail(myArray);

        // Asset
        expect(result).toEqual([2, 3, 4, 5]);
    });
    it('(INIT) should RETURN [133, 2, 3, 4] elements WHEN pass [133, 2, 3, 4, 5]', () => {
        // Arrange
        const myArray = [133, 2, 3, 4, 5];

        // Act
        const result = init(myArray);

        // Asset
        expect(result).toEqual([133, 2, 3, 4]);
    });
    it('(LAST) should RETURN "5" WHEN pass [133, 2, 3, 4, 5]', () => {
        // Arrange
        const myArray = [133, 2, 3, 4, 5];

        // Act
        const result = last(myArray);

        // Asset
        expect(result).toEqual(5);
    });
});
