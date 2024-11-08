/*
Write a program that prompts the user for five numbers and prints them in the
 reverse order they were entered. Print the result to the console.(2p)
Save the numbers to an array, then use for-loop to iterate in reverse order.
Do not use array.reverse() function.
 */
const numbers = [];
numbers[0] = Number(prompt('Anna numero'));
numbers[1] = Number(prompt('Anna numero'));
numbers[2] = Number(prompt('Anna numero'));
numbers[3] = Number(prompt('Anna numero'));
numbers[4] = Number(prompt('Anna numero'));

for (let i = 4; i >= 0; i--) {
  console.log(`Number: ${numbers[i]}`);
}
