// usando destructuring
function rand({ min = 0, max = 1000}) {
    const valor = Math.ramdom() * (max - min) + min
    return Math.floor(valor)
}

// usando objeto
const obj = {min: 50, max: 40}
console.log(rand(obj))
console.log(rand({}))
