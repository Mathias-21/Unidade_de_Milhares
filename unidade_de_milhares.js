alert('O objetivo desse projeto é vc colocar um numero qualquer de 1 a 999 e colocar em qual unidade vc quer, de mil até quadrilhão')
let n1 = prompt('Dígite um numero de 1 a 999')
const zero = '.000'
const decimal = ',00'
const somaMil = `<strong>R$${n1}${zero}${decimal}</strong>`
const somaMilhão = `<strong>R$${n1}${zero}${zero}${decimal}</strong>`
const somaBilhão = `<strong>R$${n1}${zero}${zero}${zero}${decimal}</strong>`
const somaTrilhão = `<strong>R$${n1}${zero}${zero}${zero}${zero}${decimal}</strong>`
const somaQuadrilhão = `<strong>R$${n1}${zero}${zero}${zero}${zero}${zero}${decimal}</strong>`

if (n1 > 0 && n1 <=999) {
    let undMil = confirm('Deseja colocar a unidade como mil?')
    if (undMil === true) {
    result = somaMil.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
    } else if (undMil === false) {
    let undMilhão = confirm('Milhão?')
        if (undMilhão === true) {
            result = somaMilhão
        } else if (undMilhão === false) {
            let undBilhão = confirm('Bilhão?')
            if (undBilhão === true) {
                result = somaBilhão
            } else if (undBilhão === false) {
                let undTrilhão = confirm('Trilhão?')
                if (undTrilhão === true) {
                    result = somaTrilhão
                } else if (undTrilhão === false) {
                    let undQuadrilhão = confirm('Quadrilhão?')
                    if (undQuadrilhão === true) {
                        result = somaQuadrilhão
                    } else if (undQuadrilhão === false) {
                        alert('infelizmente só iremos até quadrilhão, atualize a página e tente novamente, só que dessa vez selecione até o quadrilhão'  ) 
                    }
                }
            }
        }
    }
    document.write(result)
} else {
    alert('Por favor, atualize a página e coloque um numero de 0 a 999')
}

