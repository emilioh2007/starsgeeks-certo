const mensagem = document.querySelector(".mensagem");
const nome = document.getElementById("mnome");
const email = document.getElementById("memail");
const senha = document.getElementById("psenha");
const formulario = document.getElementById("formulario");

formulario.onsubmit = (evento) => {
    let dados = JSON.parse(localStorage.getItem("dados"));
    let logado;
    dados.forEach((elemento) => {
        if (elemento.email === email.value && elemento.senha === senha.value) {
            evento.preventDefault();
            let dados = JSON.parse(sessionStorage.getItem("logado")) || [];
            dados.push(
                {
                    email: email.value
                }
            )
            sessionStorage.setItem("logado", JSON.stringify(dados))

            window.location.assign("catalogo.html");

            return true;
        }
        else{
            evento.preventDefault();
            mensagem.innerHTML = "Senha ou E-mail incorretos";
            
        }
    });
}
