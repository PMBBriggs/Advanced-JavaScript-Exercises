

let vowels = ["a","e","i","o","u"]

let translate = (word) => {
    let firstLetter = word[0];
    // convert to lower case
    word = word.toLowerCase();
    // check word - added to test
    // if it starts with a vowel
    if (vowels.includes(word[0])){
        return word + "way";

    } else { 
        // does not start with a vowel- split at first first vowel (.findIndex)
        const index = word.split("").findIndex((letter) => vowels.includes(letter));
        // making new word
        return word.slice(index) + word.slice(0, index) + "ay"

    }

};

console.log(translate("apple"));
console.log(translate("elephant"));
console.log(translate("inkblot"));
console.log(translate("octupus"));
console.log(translate("under"));


module.exports = translate;