// cria uma referencia ao form ao elementos de resposta
const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")


//cria um "ouvinte" de evento, acionado quando o botai submit for clicado
frm.addEventListener("submit", (e) => {
    const medicamento = frm.inMedicamento.value //obtem o conteudo dos campos
    const preco = Number(frm.inPreco.value)

    const promocao = Math.floor(preco * 2) //calcula o valor da entrada 
    

    resp1.innerText = `Medicamento: ${medicamento}` // exibe a resposta
    resp2.innerText = `Leve 2 por apenas R$: ${promocao.toFixed(2)}`

    e.preventDefault() //evita envio do form

});

