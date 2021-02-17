let isAtivo = false // usamos o let para alterar a variável 
console.log(isAtivo) 


IsAtivo = true 
console.log(isAtivo) 

isAtivo = 1 

console.log(!!isAtivo) // true 
console.log(!isAtivo) // false 

console.log('os verdadeiros...') 
console.log(!!3) 
console.log(!!-1) 
console.log(!!' ') 
console.log(!!'texto') 
console.log(!![]) 
console.log(!!{}) 
console.log(!!Infinity) 
console.log(!!(isAtivo = true))

console.log('os falsos...') 
console.log(!!0) 
console.log(!!0) 
console.log(!!'') 
console.log(null) 
console.log(!!NaN)
console.log(!!undefined) 
console.log(!!(isAtivo = false)) 

console.log('pra finalizar...') 

console.log(!!('' || null || 0 || ' ' ))  // pelo menos um desses tem que ser verdadeiro para dar true(‘ ‘), caso ao contrário vai dar false. 

let nome = ' '

console.log(nome || 'Desconhecido') 

 let nome = ('Lucas')

