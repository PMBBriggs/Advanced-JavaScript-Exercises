const { test, expect } = require("@jest/globals");
const translate = require("./script");
// testing vowels
describe("testing vowels", () => {
    test("apple should give back appleway", () => {
        expect(translate("Apple")).toEqual("appleway");
        // capital A to test tolowercase
    });
    test("elephant should give back elephantway", () => {
        expect(translate("elephant")).toEqual("elephantway");
    })
    test("inkblot should give back inkblotway", () => {
        expect(translate("inkblot")).toEqual("inkblotway");
    });
    test("octupus should give back octupusway", () => {
        expect(translate("octupus")).toEqual("octupusway");
    });
    test("under should give back underway", () => {
        expect(translate("under")).toEqual("underway");
    });
});
// testing consanants
describe("testing consanants", () => {
    test("book should give back ookbay", () => {
        expect(translate("book")).toEqual("ookbay");
    });
    test("dance should give back anceday", () => {
        expect(translate("dance")).toEqual("anceday");
    });
    test("chicken should give back ickenchay", () => {
        expect(translate("chicken")).toEqual("ickenchay");
    });
    test("trains should give back ainstray", () => {
        expect(translate("trains")).toEqual("ainstray");
    });
    test("under should give back underway", () => {
        expect(translate("under")).toEqual("underway");
    });
})

describe("testing 2 consanants", () => {
    test("chess should give back esschay", () => {
        expect(translate("chess")).toEqual("esschay");
    });
    test("trust should give back usttray", () => {
        expect(translate("trust")).toEqual("usttray");
    });
 
})
describe("testing 3 consanants", () => {
    test("scrape should give back apescray", () => {
        expect(translate("scrape")).toEqual("apescray");
    });
    test("splat should give back atsplay", () => {
        expect(translate("splat")).toEqual("atsplay");
    });
 
})



// if it starts with a vowel it should return with "way" at the end
// one test for 1 consanant vs multiple consanants