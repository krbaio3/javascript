import { isNull } from '../src/auxliar';
describe('Auxiliar Spec', () => {
    it('should return false with null or undefined value', () => {
        // Arrange
        const variable1 = null;
        const variable2 = undefined;
        let variable3;
        // Act
        // Assert
        expect(isNull(variable1)).toBeFalsy;
        expect(isNull(variable2)).toBeFalsy;
        expect(isNull(variable3)).toBeFalsy;
    });
    it('should return false with empty array', () => {
        // Arrange
        const variable = [];
        // Act
        // Assert
        expect(isNull(variable)).toBeFalsy;
    });
    it('should return false with empty object', () => {
        // Arrange
        const variable = {};
        // Act
        // Assert
        expect(isNull(variable)).toBeFalsy;
    });
    it('should return true with NOT null or undefined value', () => {
        // Arrange
        const variable1 = 'test';
        const variable2 = 0;
        const variable3 = 1;
        const variable4 = 2;
        // Act
        // Assert
        expect(isNull(variable1)).toBeTruthy;
        expect(isNull(variable2)).toBeTruthy;
        expect(isNull(variable3)).toBeTruthy;
        expect(isNull(variable4)).toBeTruthy;
    });
    it('should return true with NOT empty array', () => {
        // Arrange
        const variable = [1, 2, 3, 4];
        // Act
        // Assert
        expect(isNull(variable)).toBeTruthy;
    });
    it('should return true with NOT empty object', () => {
        // Arrange
        const variable = { a: 1, b: 2 };
        // Act
        // Assert
        expect(isNull(variable)).toBeTruthy;
    });
});
