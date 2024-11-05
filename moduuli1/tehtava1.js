const objekti = {avain: 'arvo'}

const lista = ['asd', 'sdfg', 12]
const nimi =prompt('Anna nimi')

console.log(nimi)
console.log(nimi, 'Hei miä olen Pekka.', lista, objekti)
console.log(lista)

document.querySelector('#nimi').innerHTML =
    document.querySelector('#nimi').innerHTML + nimi