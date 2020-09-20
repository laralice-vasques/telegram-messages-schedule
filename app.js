
let x = [1, 2, 3, 4, 5]

let aux = 0

function func (value) { 
    aux = aux + value/2
}

x.forEach(func)

console.log(aux)