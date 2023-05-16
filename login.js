const mensagem = document.querySelector(".mensagem");
const nome = document.getElementById("mnome");
const email = document.getElementById("memail");
const senha = document.getElementById("psenha");
const formulario = document.getElementById("formulario");


formulario.onsubmit = (evento) => {
    let dados = JSON.parse(localStorage.getItem("dados"));

    dados.forEach((elemento) => {
        if (elemento.email === email.value && elemento.senha === senha.value) {
            evento.preventDefault();
            window.location.assign("catalogo.html");

            return true;
        }
        else{
            evento.preventDefault();
            mensagem.innerHTML = "Senha ou E-mail incorretos";
            
        }
    });
}