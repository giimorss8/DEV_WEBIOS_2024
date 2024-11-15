let botao = document.querySelector ('button')

let olhaNumero = false
if (olhaNumero === true){
    botao.style.color= "white"
    botao.style.backgroundColor = "blue"
    // botao.style.borderRadius = "5px"
    botao.innerHTML = "Cadastrar"
} else {

    botao.style.color = "white"
    botao.style.backgroundColor = 'red'
} 


let paragrafo = document.querySelector('#paragrafo')
paragrafo.style.backgroundImage = 'linear-gradient(red, yellow)'
paragrafo.style.color = "black"

//linear-gradiente (red, yellow)