// slide 70 
const {convertToC, convertToF} = require("./script");

// slide 98 - "describe" is like a collection of tests
describe("testing convertToC", () => {
    test("that 32F is 0C", () => {
        expect(convertToC(32)).toEqual(0);
    });

    test("that 212F is 100C", () => {
        expect(convertToC(212)).toEqual(100);
    })
});

// slide 102 notes to run test "npm run test"