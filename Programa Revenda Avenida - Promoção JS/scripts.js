const frm = document.querySelector("form") //obtem elementos da pagina
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")
const resp3 = document.querySelector("#outResp3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()  //evita o envio do dorm

    const modelo = frm.inModelo.value  //obtem o conteudo dos campos
    const ano = Number(frm.inAno.value)
    const preco = Number(frm.inPreco.value)
    const classificacao = classificarVeiculo(ano) //chama funçoes e atribui
    const entrada = calculaEntrada(preco, classificacao) // ...reorna as variaveis
    const parcela = (preco - entrada) / 10  //usa retorno da funçao para calculo

    resp1.innerText = modelo + "-" + classificacao // exibe as respostas
    resp2.innerText = `Entrada R$: ${entrada.toFixed(2)}`
    resp3.innerText = `+10x de R$: ${parcela.toFixed(2)}`
})


//funcao recebe o ano do veiculo como parametro
const classificarVeiculo = (ano) => {
    const anoAtual = new Date().getFullYear() // obtem o ano atual
    let classif 
    if (ano == anoAtual) {  //condiçoes para definir classificaçao do veiculo
        classif = "Novo"

    } else if (ano == anoAtual - 1 || ano == anoAtual - 2) {
        classif = "Seminovo"
    } else {
        classif = "Usado"
    }

    return classif //retorna a classificação
}

//funcao recebe valor e status do veiculo como parametro
const calculaEntrada = (valor, status) => status == "Novo" ? valor * 0.5 : valor * 0.3

