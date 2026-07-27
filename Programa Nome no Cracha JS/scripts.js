const frm = document.querySelector("form")  //obtem elementos da pagina
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()  //evita o envio do form
    //obtem o nome informado e retira espaços em branco do inicio e final da string 
    const nome = frm.inNome.value.trim()

    if(!nome.includes(" ")) {  //se o nome nao (!) possuir espaço
        alert("Informe o nome completo...")
        return
    }

    const priEspaco = nome.indexOf(" ") //posiçao do primeiro espaço
    const ultEspaco = nome.lastIndexOf(" ") //posiçao do ultimo espaço

    //copia nome e sobrenome usando os parametros do substr()
    const cracha = nome.substr(0, priEspaco) + nome.substr(ultEspaco)

    resp.innerText = `Crachá: ${cracha}`  //exibe a resposta
})