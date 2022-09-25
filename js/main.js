

window.addEventListener("load", () => {
    const botao_buscar = document.querySelector("#botao_buscar")
    botao_buscar.addEventListener("click",executa_busca) 

    const botao_limpar = document.querySelector("#botao_limpar")
    botao_limpar.addEventListener("click",executa_limpar) 
  });

function executa_busca() {
    buscarEMostrarPersonagem()
}

async function buscarEMostrarPersonagem() {
    const idPersonagem = pegaValorDoInput("#identificador")
     const personagem   = await buscaPersonagemNaApi(idPersonagem)
     console.log(personagem)
    montarTelaComDadosDoPersonagem(personagem)    
 }
 
 function pegaValorDoInput(seletorInput) {
     const valor = document.querySelector(seletorInput).value 
     return valor
 
 }
 
 async function buscaPersonagemNaApi(numeroPersonagem) {
     const url = "https://pokeapi.co/api/v2/pokemon/"+numeroPersonagem
     const response = await fetch(url)
     const responseData = await response.json()
     return responseData
 }
 
 function montarTelaComDadosDoPersonagem(personagem) {
     const elementoCharacter = document.querySelector(".resultado-container")
     elementoCharacter.style.display = "block"
     
     const elementoImagem = document.querySelector("#imagemPokemon")
     elementoImagem.src = personagem.sprites.front_default

     const resultado_nome = document.querySelector("#resultado_nome")
     resultado_nome.innerHTML = "#"+personagem.id+" - "+personagem.name

     const container_type_um = document.querySelector("#container_type_um")
     container_type_um.innerHTML = personagem.types[0].type.name

     const container_type_dois = document.querySelector("#container_type_dois")
     container_type_dois.innerHTML = personagem.types[1].type.name
     

 }

function executa_limpar() {
    limpaResultado();
}

function limpaResultado(params) {
    const elementoCharacter = document.querySelector(".resultado-container")
     elementoCharacter.style.display = "none"
}