//O QUE É API? Application Programming Interface (Interface de Programação de Aplicações) pode ser vista como um intermediário entre dois sistemas ou aplicativos, permitindo que um acesse funcionalidades ou dados do outro sem precisar saber como ele foi implementado internamente. Por exemplo, um site pode usar a API do Google Maps para exibir mapas sem precisar desenvolver todo o código do sistema de mapas do zero.

let URL = 'https://images.dog.ceo/breeds/pyrenees/n02111500_2736.jpg' //Link externo 
const DogApi = async () => {
    //Consulta na API e retorno o JSON na varíavel respo
    let resp = await fetch (URL)
console.log (resp)
    
    resp.json ();
    console.log (resp)
}

console.log (DogAPI())

//OBS:
//O POST cria (CREATE) algo na aplicação web. Por exemplo uma instância registro de dados em um banco de dados.

//O  GET busca/lê (READ) uma informação de uma aplicação. Por exemplo, ler/buscar um ou mais registros (instâncias) no banco de dados.

//O  PUT atualiza (UPDATE) as informações de uma aplicação. Por exemplo, atualizar todas as informações de uma instância no banco de dados.

//O método PATCH atualiza (UPDATE) as informações de uma aplicação.

//O método DELETE apaga (DELETE) uma informação na aplicação. Por exemplo, apagar um registro no banco de dados.