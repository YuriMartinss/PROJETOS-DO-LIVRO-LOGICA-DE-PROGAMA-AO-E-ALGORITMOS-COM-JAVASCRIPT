const frm = document.querySelector("form") //obtem elementos da pagina
const resp = document.querySelector("pre")

frm.addEventListener("submit", (e) => { //escuta o evento submit do form
    e.preventDefault()

    const numero = Number(frm.inNumero.value) //obtem numero informado
    let resposta = "" //variavel do tipo string, para concatenar a resposta

    // cria um laço de repetiçao (i começa em 1 e e incrementado ate 10)
    for(let i = 1 ; i < 10; i++) {
        //a variavel resposta vai acumular  os novos conteudos(nos 2 formatos)
        resposta = resposta + numero + "x" + i + "=" + (numero * i) + "\n"
        //resposta = `${resposta} ${numero} x ${i} = ${numero * i}\n`
    }

    //o conteudo da tag pre e alterado para exibir a tabuada do numero 
    resp.innerText = resposta 
})