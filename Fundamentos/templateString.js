const nome = "Rebeca" 

const concatenacao = 'Olá ' + nome + "!" // em um string nomal não se pode quebrar uma linha, já no templateString(próximo exemplo) vc consegue. 

const template = ` 

    Olá 

    ${nome}!` 

console.log(concatenacao, template) 

 

//expressoes... 

console.log(`1 + 1 = ${1 + 1}`) // o javascript só interpreta a expressão que está entre {} nesse caso. 

 

// função arrow 

const up = texto => texto.toUpperCase() // transforma o texto para letra maiúscula. 

console.log('Ei... ${up(',cuidado,')}!')  

 