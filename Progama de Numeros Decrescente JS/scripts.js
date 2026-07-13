const frm = document.querySelector("form") //obtem elementos da pagina
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault() //evita envio do form

    const numero = Number(frm.inNumero.value) //obtem o valor informado
    let resposta = `Entre ${numero} e 1: ` //string para montar a resposta

    for (let i = numero; i > 0; i = i - 1) { //cria um for decrescente
        resposta = resposta + i + ", " // resposta acumula numeros (e virgulas)
    }

    resp.innerText = resposta  //exibe a resposta
})