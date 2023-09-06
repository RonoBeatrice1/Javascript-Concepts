//An array is a special variable, which can hold more than one value: -- Array indexes start with 0.
//const cars = ["Saab", "Volvo", "BMW"];

let programmingLanguages = [
  "Javascript",
  "Python",
  "php",
  "Kotlin",
  "Flutter",
  "Java",
];
let language = programmingLanguages[0];

console.log(language); //Javascript
console.log(programmingLanguages[3]);

//Converting an Array to a String
const carBrands = [
  " Mercedes",
  "Audi",
  " BMW",
  " Hyundai",
  " Chevrolet",
  "Toyota",
  " Tesla",
  " Mitsubishi",
];

const stringedResult = carBrands.toString();
console.log(stringedResult);

console.log(
  typeof [
    " Mercedes",
    "Audi",
    " BMW",
    " Hyundai",
    " Chevrolet",
    "Toyota",
    " Tesla",
    " Mitsubishi",
  ]
); //Object

console.log(carBrands.length); //8
console.log(carBrands[0]); //Mercedes

const lastBrand = carBrands[carBrands.length - 1];
console.log(lastBrand); //Mitsubishi

//Looping Array Elements
//While Loop
const fruits = ["Apple", "Mango", "Pears", "Coconut"];

let i = 0;
while (i < fruits.length) {
  console.log(fruits[i]);
  i++;
}

//do…while Loop
let numbers = ["12", "24", "36", "48", "60", "72"];
let i2 = 0;

do {
  console.log(numbers[i2]);
  i2++;
} while (i2 < numbers.length);

//for Loop
const units = [
  "Networking",
  "Calculus",
  "Linear Algebra",
  "Electronics",
  "Data Structures",
  "Algebraic Structures",
];

for (let i3 = 0; i3 < units.length; i3++) {
  console.log(units[i3]);
}

//for…in
/* for in loop is used to iterate through the properties of an object or array */
for (i4 in units) {
  console.log(fruits[i4]);
}

//for...of Loop
for (const number of numbers) {
  console.log(number);
}

//forEach() loop
carBrands.forEach((carBrand) => {
  console.log(carBrand);
});
