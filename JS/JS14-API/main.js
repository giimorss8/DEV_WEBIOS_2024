//O QUE É API? Application Programming Interface (Interface de Programação de Aplicações) pode ser vista como um intermediário entre dois sistemas ou aplicativos, permitindo que um acesse funcionalidades ou dados do outro sem precisar saber como ele foi implementado internamente. Por exemplo, um site pode usar a API do Google Maps para exibir mapas sem precisar desenvolver todo o código do sistema de mapas do zero.

let URL = 'https://dog.ceo/api/breeds/image/random' //Link externo 
const DogApi = async () => {

    //Consulta na API e retorno o JSON na varíavel respo
    await fetch(URL).then((response) => {

        //Transformar o JSON recebido pelo FETCH em OBJ
        return response.json();
    }).then((response) => {

        //apresentar as informações p/ usuário
        // transf. novamente o OBJ em JSON
        document.getElementById('mostraJSON').innerText = JSON.stringify(response);

        let image = `
        <img style= "width: 200px; heigth: 200px"src="${response.message}" alt="Imagens dos DOG's">
       `
       document.getElementById('mostraIMG').innerHTML= image

    })

    // let exemplo = resp.json ()
    // console.log (exemplo)

}
DogApi()

//OBS:
//O POST cria (CREATE) algo na aplicação web. Por exemplo uma instância registro de dados em um banco de dados.

//O  GET busca/lê (READ) uma informação de uma aplicação. Por exemplo, ler/buscar um ou mais registros (instâncias) no banco de dados.

//O  PUT atualiza (UPDATE) as informações de uma aplicação. Por exemplo, atualizar todas as informações de uma instância no banco de dados.

//O método PATCH atualiza (UPDATE) as informações de uma aplicação.

//O método DELETE apaga (DELETE) uma informação na aplicação. Por exemplo, apagar um registro no banco de dados.