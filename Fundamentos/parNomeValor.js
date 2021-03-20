// par nome/valor
const saudacao = 'Opa' // contexto léxico 1

function exec() {
    const saudacao = "Falaaa" // contexto léxico 2
    return saudacao
}

// Ojetos são grupos anumados de pares nome/valor
const cliente = {
    nome: 'Predro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: "Rua Muito Legal",
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)