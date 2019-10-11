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
});



// expect(sayHello(false)).toBe("Hello, World!")

// expect(sayHello(true)).toBe("Hello, World!")

// expect(sayHello()).toBe("Hello, World!")

// expect(typeof sayHello()).toBe("string")