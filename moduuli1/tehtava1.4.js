/*
In the Harry Potter children's books, the sorting hat assigns a new student at
Hogwarts School of Witchcraft and Wizardry to one of the four classes, which are
Gryffindor, Slytherin, Hufflepuff, and Ravenclaw. Write an electronic sorting hat
 that asks for a student's name and draws a room for him. If you enter Anna as the name,
 for example, the program prints to the HTML document "Anna, you are Ravenclaw." (3p)

Use math.random() to draw a value (1, 2, 3 or 4)
Once the number is drawn, you need to use a multiple choice structure (if, else if, ..., else or switch).
 */
function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}
const nimi= prompt('Anna nimi')
const num = (getRandomInt(4))
let tulos;

if (num ==1) {
  tulos = nimi + ", you are Ravenclaw!"
} else if (num == 2) {
  tulos= nimi + ", you are Gryffindor!"
} else if (num == 3) {
  tulos= nimi + ", you are Slytherin!"
} else {
  tulos= nimi + ", you are Huffelpuff!"

}

document.querySelector('#talo').innerHTML = tulos
