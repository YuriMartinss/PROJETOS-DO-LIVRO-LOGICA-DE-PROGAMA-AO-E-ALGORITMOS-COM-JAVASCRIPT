// cria a referencia ao form e elemeno onde sera exibida a resposta
const frm = document.querySelector("form")
const resp = document.querySelector("h3")


// "ouvinte" de evento, acionado quando o botao submit for clicado 
frm.addEventListener("submit", (e) => {
    e.preventDefault()  //evita o envio do form

    const nome = frm.inNome.value //obtem valores do form
    const masculino = frm.inMasculino.checked 
    const altura = Number(frm.inAltura.value)

    let peso    // declara a variavel peso
    if (masculino) {  // se masculino (ou if masculino == true)
        peso = 22 * Math.pow(altura, 2)  // math.pow eleva ao quadrado

    }else {
        peso = 21 * Math.pow(altura, 2)
    }


    //apresenta a resposta (altera o conteudo do elemento h3 da pagina)
    resp.innerText = `${nome}: Seu peso ideal é ${peso.toFixed(3)} kg`


})