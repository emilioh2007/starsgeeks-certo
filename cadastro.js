const mensagem = document.querySelector(".mensagem");
const formulario = document.getElementById("formulario");
const nome = document.getElementById("mnome");
const email = document.getElementById("memail");
const senha = document.getElementById("psenha");
const csenha = document.getElementById("csenha");
const check = document.getElementById("taceitar");


formulario.onsubmit = (evento) => {
    if (nome.value == "") {
        evento.preventDefault();
        mensagem.innerHTML = "<p> Digite seu Nome! </p>";
        nome.focus();
        return null;
    }

    if (email.value == "") {
        evento.preventDefault();
        mensagem.innerHTML = "<p> Digite seu Email! </p>";
        email.focus();
        return null;
    }

    if (senha.value == "") {
        evento.preventDefault();
        mensagem.innerHTML = "<p> Digite sua Senha! </p>";
        senha.focus();
        return null;
    }

    if (csenha.value != senha.value) {
        evento.preventDefault();
        mensagem.innerHTML = "<p> Senhas precisam ser iguais! </p>";
        csenha.focus();
        return null;
    }
    if (check.checked) {}
    else{
        evento.preventDefault();
        mensagem.innerHTML = "<p> Necessario aceitar os termos! </p>";
        check.focus();
        return null;
    }

    let dados = JSON.parse(localStorage.getItem("dados")) || [];
    dados.push({
        nome : nome.value, 
        email : email.value, 
        senha : senha.value
    })

    localStorage.setItem("dados", JSON.stringify(dados));
    evento.preventDefault();
    mensagem.innerHTML = "<p> Parabens você se cadastrou com sucesso </p>"

    setTimeout(() => {
        window.location.assign("login.html");
    }, 2000);
}
