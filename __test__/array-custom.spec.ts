import { customHead, customInit, customLast, customTail } from '../src/arrayV2';

describe('Custom Array Spec', () => {
    it("(CustomHead) should RETURN [7, 'Hola'] WHEN pass two arrays", () => {
        // Arrange
        const myArrayNumbers = [7, 2, 3, 4, 5];
        const myArrayString = ['hola', 'mundo', 'cruel'];

        // Act
        const result = customHead(myArrayNumbers, myArrayString);

        // Asset
        expect(result).toEqual([7, 'hola']);
    });

    it("(CustomTail) should RETURN [[ 2, 3, 4, 5], ['mundo', 'cruel']] elements WHEN pass two arrays", () => {
        // Arrange
        const myArrayNumbers = [7, 2, 3, 4, 5];
        const myArrayString = ['hola', 'mundo', 'cruel'];

        // Act
        const result = customTail(myArrayNumbers, myArrayString);

        // Asset
        expect(result).toEqual([
            [2, 3, 4, 5],
            ['mundo', 'cruel'],
        ]);
    });

    it("(CustomInit) should RETURN [[ 7, 2, 3, 4], ['hola', 'mundo']] elements WHEN pass two arrays", () => {
        // Arrange
        const myArrayNumbers = [7, 2, 3, 4, 5];
        const myArrayString = ['hola', 'mundo', 'cruel'];

        // Act
        const result = customInit(myArrayNumbers, myArrayString);

        // Asset
        expect(result).toEqual([
            [7, 2, 3, 4],
            ['hola', 'mundo'],
        ]);
    });

    it('(CustomLast) should RETURN "5" WHEN pass [133, 2, 3, 4, 5]', () => {
        // Arrange
        const myArrayNumbers = [7, 2, 3, 4, 5];
        const myArrayString = ['hola', 'mundo', 'cruel'];

        // Act
        const result = customLast(myArrayNumbers, myArrayString);

        // Asset
        expect(result).toEqual([5, 'cruel']);
    });
});
