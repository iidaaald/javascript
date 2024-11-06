/*
Write a program that prompts for three integers. The program prints the sum, product and average of the numbers to the
HTML document.
 */
const num1= prompt('Anna numero')
const num2= prompt('Anna numero')
const num3= prompt('Anna numero')

document.querySelector('#summa').innerHTML = Number(num1) + Number(num2) + Number(num3)
document.querySelector('#tulo').innerHTML = Number(num1) * Number(num2) * Number(num3)
document.querySelector('#keskiarvo').innerHTML = (Number(num1) + Number(num2) + Number(num3))/3



