import { deepMerge } from '../src/cloneMergeV2';

describe('DeepClone Spec', () => {
    it('should deepClone and doesnt rename the properties from A object the B object', () => {
        // Arrange
        const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
        const b = { name: "Luisa", age: 31, married: true };
        
        // Act
        const result = deepMerge(a, b)

        // Assert
        const expectedObject = { name: "Maria", surname: "Ibañez", country: "SPA", age: 31, married: true };

        expect(result).toEqual(expectedObject);

    });
    it('should clone the simple object', () => {
        // Arrange
        const a = { a: 1, b: { name: "Luisa", age: 31, married: true }, hola: 'Mundo' };
        
        // Act
        const result = deepMerge(a);

        // Assert
        const expectedObject = { a: 1, b: { name: "Luisa", age: 31, married: true }, hola: 'Mundo' };

        expect(result).toEqual(expectedObject);

    });
});