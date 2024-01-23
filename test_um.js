const Nome = "Itallo Vp" //string > string são textos
let idade = 24 //number> number são os números apresentados não precisa de aspas
let prof = "Professor"
let habilitado = true //boolean quando se trata de um valor True/false


document.write(Nome)
document.write('<br>' + idade)
document.write('<br>' + prof)

// outra forma de fazer é:
document.write(`<br>idade: ${idade} <br> profissão ${prof} <br> nome: ${Nome}`)