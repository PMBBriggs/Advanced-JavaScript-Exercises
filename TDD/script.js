console.log("is this thing on?");

let convertToC = (temp) => (temp - 32) * 5/9;

let convertToF = (temp) => (temp + 32) * 1.8 ;

// slide 68
module.exports = {convertToC, convertToF};

let instructor = {
    name: "taz",
    age: 5000,
    favColor: "blue"
}

// let name = instructor.name;
// let favColor = instructor.favColor

let {name, favColor} = instructor;

let myArray = [1,2,3,4,5];
// let jakob = myArray[0];
// let amber = myArray[4];

let [jakob, amber, ...weird] = myArray;
// ...weird is a spread

console.log(weird);

