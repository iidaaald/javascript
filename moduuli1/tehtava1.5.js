/*
Write a program that asks the user to enter a year and notifies the user whether the input year is a leap year.
A year is a leap year if it is divisible by four. However, years divisible by 100 are leap years only if they are
also divisible by 400. Print the result on the HTML document.
 */
let tulos;
const year =Number(prompt("Anna vuosiluku"))

const ehto1 = (year % 4 == 0)
const ehto2 = (year % 100 != 0)
const ehto3 = (year % 400 == 0)

if ((ehto1 && ehto2) || ehto3) {
  tulos = "Vuosiluku: " + year + " on karkausivuosi"
}else{
  tulos = "Vuosiluku: " + year + " ei ole karkausivuosi"
}

document.querySelector('#vastaus').innerHTML = tulos
