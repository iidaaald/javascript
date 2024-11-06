/*
Write a program that prompts for user's name and then greets the user. Print the result to the HTML document: Hello, Name!
 */

const nimi= prompt('Anna nimi')
const nimenSisältö= "Hei, " + nimi + "!"

document.querySelector('#nimi').innerHTML = nimenSisältö

