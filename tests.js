// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function() {
    it('should be a defined function', function() {
      expect(typeof sayHello).toBe('function');
    });
    it('should return a string', function() {
        expect(typeof sayHello()).toBe('string');
    });
    it('should return the string "Hello, Jane!" when passed Jane', function() {
        expect(sayHello("Jane")).toBe('Hello, Jane!');
    });
    it('should return the string "Hello, Alex!" when passed Alex', function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return the string "Hello, Pat!" when passed Pat', function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return the string "Hello, World!" when passed undefined value', function() {
        expect(sayHello(undefined)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when passed the boolean value of true', function() {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when passed a null value', function() {
        expect(sayHello(null)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when passed a number', function() {
        expect(sayHello(3)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when passed the boolean value of false', function() {
        expect(sayHello(false)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when passed NaN', function() {
        expect(sayHello(NaN)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when passed an empty string ""', function() {
        expect(sayHello("")).toBe("Hello, World!");
    });
});

//figure out how to test for numeric string^^

describe('isFive', function() {
    it('should be a defined function', function () {
        expect(typeof isFive).toBe('function');
    });
    it('should return true is the parameter is the number 5', function () {
        expect(isFive(5)).toBe(true);
    });
    it('should return false is the parameter is not the number 5', function () {
        expect(isFive(1)).toBe(false);
    });
    it('should return false is the parameter is a string', function () {
        expect(isFive("")).toBe(false);
    });
    it('should return a boolean value regardless of the input', function () {
        expect(isFive()).toEqual(jasmine.any(Boolean));
    });

});

describe('isEven', function() {
    it('should be a defined function', function () {
        expect(typeof isEven).toBe('function');
    });
    it('should return true is the parameter is an even number', function () {
        expect(isEven(8)).toBe(true);
    });
    it('should return false is the parameter is not an even number', function () {
        expect(isEven(9)).toBe(false);
    });
    it('should return true is the parameter is a string that evaluates to an even number', function () {
        expect(isEven("2")).toBe(true);
    });
    it('should return false is the parameter is a string that evaluates to an odd number', function () {
        expect(isEven("3")).toBe(false);
    });

});
describe('isVowel', function() {
    it('should be a defined function', function() {
        expect(typeof isVowel).toBe('function');
    });
    it('should return a boolean value regardless of the input', function () {
        expect(isVowel()).toEqual(jasmine.any(Boolean));
    });
    it('should return true if passed a vowel (AEIOU/aeiou)', function() {
        expect(isVowel("a")).toBe(true);
    });
});

// expect(sayHello(false)).toBe("Hello, World!")

// expect(sayHello(true)).toBe("Hello, World!")

// expect(sayHello()).toBe("Hello, World!")

// expect(typeof sayHello()).toBe("string")