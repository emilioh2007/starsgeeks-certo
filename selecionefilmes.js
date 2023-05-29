const nome = document.getElementById("nome");
const descricao = document.getElementById("descricao");
const foto = document.getElementById("foto");
const botao = document.getElementById("concluir");

var emaillogado;
femaillogado();

botao.onclick = (evento) => {

    evento.preventDefault();
    fenvio()
        .then(result => {
            if (result) {
                let dados = JSON.parse(localStorage.getItem("catalogo")) || [];
                dados.push(
                    {
                        nome: nome.value,
                        descricao: descricao.value,
                        foto: nomeArq,
                        email: emaillogado
                    }
                )
                localStorage.setItem("catalogo", JSON.stringify(dados));

                window.location.assign("catalogo.html");

            } else {
                alert("Houve erro no envio do arquivo");
            }

        });
}

var nomeArq;
async function fenvio() {
    const url = 'http://localhost:3005/upload';
    const arquivo = document.getElementById("foto").files[0];
    const formData = new FormData();
    formData.append('arquivo', arquivo);
    console.log(JSON.stringify(formData));
    try {

        var resp = await fetch(url, {
            method: 'POST',
            body: formData,
        }
        )
        if (resp.ok) {
            let respText = await resp.text();
            nomeArq = respText;
            return true;
        }
        else {
            return false;
        }
    }
    catch (error) {
        console.error(error);
        return false;
    }
}

function carregarCatalogo() {
    let dados = JSON.parse(localStorage.getItem("catalogo"));
    let divcard = document.createElement("div");
    if (dados == null) {
        divcard.innerHTML = "<p>Nenhum item cadsatrado</p>";
        cards.appendChild(divcard);
        return null;
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