//How can you use Math.random() and Math.floor() to randomly select an item from a list of options in JavaScript?
const options = ["option A", "option B", "option C", "option D"];

const randomIndex = Math.floor(Math.random() * options.length); //This line generates a random index within the range of valid indices for the options array.

const selectedOption = options[randomIndex];

console.log("The Randomly Selected Option is :", selectedOption); //This code selects a random item from the options array and logs it to the console.

//How would you generate a random whole number between 1 and 10 using
const randomNumber = Math.floor(Math.random() * 10) + 1;
console.log("THe Random NUmber Between 1 and 10 is:", randomNumber); //his part scales the random number generated by Math.random() to be between 0 (inclusive) and 10 (exclusive). It multiplies the random decimal by 10. So, for example, if Math.random() generated 0.734628, then Math.random() * 10 would result in 7.34628.

//How can you simulate flipping a coin and getting either heads (1) or tails (0) using Math.random() and Math.floor()?
const coinFlip = Math.floor(Math.random() * 2);
if (coinFlip == 0) {
  console.log("Tails(0)");
} else {
  console.log("Heads(1)");
}
