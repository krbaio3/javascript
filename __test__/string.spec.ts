import { isBlank, isEmpty, containBlank } from '../src/string';

describe('String spec', () => {
    it('should return true when you pass a empty string using isBlank or isEmpty', () => {
        const str = '';

        const resultEmpty = isEmpty(str);
        const resultBlank = isBlank(str);

        expect(resultBlank).toBeTruthy();
        expect(resultEmpty).toBeTruthy();
    });
    it('should return true when you pass a blank string using isBlank or containBlank', () => {
        const str = ' ';

        const resultBlank = isBlank(str);
        const resultContain = containBlank(str);

        expect(resultBlank).toBeTruthy();
        expect(resultContain).toBeTruthy();
    });
    it('should return false when you pass a blank string using isEmpty', () => {
        const str = ' ';

        const resultEmpty = isEmpty(str);

        expect(resultEmpty).toBeFalsy();
    });
    it('should return false when you pass a empty string using containBlank', () => {
        const str = '';

        const resultContain = containBlank(str);

        expect(resultContain).toBeFalsy();
    });
});
