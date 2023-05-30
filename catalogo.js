const botaomodal = document.getElementById("cadastrar");
const cards = document.querySelector(".filmes");
const formulario = document.getElementById("formulario");
const nome = document.getElementById("nome");
const descricao = document.getElementById("descricao");
const foto = document.getElementById("foto");

var emaillogado;
femaillogado();

carregarCatalogo();

function carregarCatalogo(){
    let dados = JSON.parse(localStorage.getItem("catalogo"));
    let divcard = document.createElement("div");
    if(dados == null){
        divcard.innerHTML = "<p>Nenhum item cadsatrado</p>";
        cards.appendChild(divcard);
        return null;
    }

    dados.forEach((elemento, indice) => {
        if (elemento.email == emaillogado){
        let divcard = document.createElement("div");
        divcard.innerHTML = `<div class="cardimagem"> <img src="filmes/${elemento.foto}"> </div> <div class="cardnome">${elemento.nome} <p>${elemento.descricao}</p></div> <div class="cardinfo">
        <div class="editar"><i class="bi bi-pencil-fill" onclick="editar(${indice})"></i></div>
        <div class="excluir"><i class="bi bi-trash3-fill" onclick="excluir(${indice})"></i></div>
        </div>`;

        cards.appendChild(divcard);}

    });
}

function excluir(indice){
    let dados = JSON.parse(localStorage.getItem("catalogo"));
    if(dados.length == 1)
    {localStorage.clear("catalogo");}
    else{
    dados.splice(indice,1);
    localStorage.setItem("catalogo", JSON.stringify(dados));
    }
    window.location.reload();
}

function editar(indice){
    var url ="selecionefilmes.html?peditar=true&indice="+ encodeURIComponent(indice);
    window.location.href = url;
}

function botaoc() {
botaomodal.onclick = () =>{
    window.location.assign("selecionefilmes.html");
}
}

function femaillogado() {
    let dados = JSON.parse(sessionStorage.getItem("logado"));
    if (dados == null) {
        window.location.assign("login.html");
    } else{
        emaillogado = dados[0].email;
    }
}
