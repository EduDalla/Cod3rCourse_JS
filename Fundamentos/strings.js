
const escola = "Cod3r"

console.log(escola.charAt(4)) //devolve a 4° letra de Cod3r, ou seja, "r"
console.log(escola.charAt(5))

console.log(escola.charCodeAt(3)) //código relacionado a tabela UniCode
console.log(escola.indexOf('3')) // Ver se tem o string 3 na paravra "Cod3r"

console.log(escola.substring(1)) // digita a palavra "Cod3r" a partir da letra 1 = "o"
console.log(escola.substring(0, 3)) // digita a palavra "Cod3er da letra 0 = C até a letra 3 sem inclir ela

console.log('Escola '.concat(escola).concat("!"))
console.log('Escola ' + escola + "!")
console.log(escola.replace(3, 'e')) // trocar o strring "3" pela letra "e"

console.log('Ana, Maria, Pedro'.split(','))