const frm = document.querySelector("form") //obtem elementos da pagina
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()  //evita o envio do form 
    const senha = frm.inSenha.value //obtem a senha informada pelo usuario
    const erros = [] //vetor com erros 

    //verifica se o tamanho da senha e invalido
    if (senha.length < 8 || senha.length > 15) {
        erros.push("possuir entre 8 e 15 caracteres")
    }

    //verifica se nao possui numeros
    if (senha.match(/[0-9]/g) == null) {
        erros.push("possuir numeros(no minimo, 1)")
    }

    //verifica se nao possui letras minusculas
    if (!senha.match(/[a-z]/g)) {
        erros.push("possuir letras minusculas(no minimo, 1)")
    }

    //verifica se nao possui letras maiusculas ou se possui apenas 1
    if (!senha.match(/[A-Z]/g)) {
        erros.push("possuir letras maiusculas (no minimo, 1)")
    }

    //verifica se nao possui sembolos ou "_"
    if (!senha.match(/[\W|_]/g)) {
        erros.push("possuir simbolos (no minimo, 1)")
    }

    //se vetor esta vazio (segnifica que nao foram encontrados erros)
    if (erros.length == 0) {
        resp.innerText = "Ok! Senha Válida"
    } else {
        resp.innerText = `Erro... A senha deve ${erros.join(",")}`
    }
})