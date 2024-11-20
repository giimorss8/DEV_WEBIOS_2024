let URL = "https://viacep.com.br/ws/01001000/json"
let cep = document.getElementById('Cep')

async function BuscaCep () {
   await fetch (URL).then ((response) => {
//transformar JSON em OBJ
return response.json ();
   }).then((response) => {
    document.getElementById ('cep').value = response.cep;
   })
cep.value = response.cep
}


BuscaCep ();

let viaCEP = {
    cep: "03490-080",
    logradouro: "Praça do Zeze",
    complemento: "Bloco 05",
    bairro: "Da minha cabecinha",
estado: "Sao Jose da Cabecinha"
}