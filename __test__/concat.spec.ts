

/* Concat */

export const concat = (arrayA, arrayB) => [...arrayA,...arrayB];

//console.log(concat(myArray1, myArray2));

describe('Concat Spec', () => {
  it('should concat two arrays', () => {
    // Arrange
    const myArray1 = [1,2,3,4,5];
    const myArray2 = ['hola', 'mundo', 'cruel'];
    
    // Act
    const result = concat(myArray1, myArray2);
    // Assert

    expect(result).toEqual([1, 2, 3, 4, 5, "hola", "mundo", "cruel"]);
  });
});