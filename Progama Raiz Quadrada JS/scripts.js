const frm = document.querySelector("form") // obtem elementos da pagina
const resp = document.querySelector("h3")


//cria um ouvinte de eventos, quando o submit for clicado
frm.addEventListener("submit", (e) => {
    e.preventDefault()  //evita o envio do form

    const numero = Number(frm.inNumero.value) //obtem numero digitado no form
    const raiz = Math.sqrt(numero) //calcula raiz quadrada do numero 

    if (Number.isInteger(raiz)) {  // se o valor da raiz for um numero inteiro
        resp.innerText = `Raiz: ${raiz}` //... mostra a raiz


    }else {  //senão
        resp.innerText = `Não há aiz exata para ${numero}` //... mostra a mensagem
    }
})