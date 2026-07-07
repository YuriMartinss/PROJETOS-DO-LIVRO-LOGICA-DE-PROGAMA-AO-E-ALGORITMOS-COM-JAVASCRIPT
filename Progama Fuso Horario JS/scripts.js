//cria referencia ao form e elemento onde sera exibida a respota
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

//ouvinte de evento, acionado quando o botao submit for clicado
frm.addEventListener("submit", (e) => {
    e.preventDefault() //evita o envio do form

    //obtem e converte o conteudo do campo inHoraBrasil
    const horaBrasil = Number(frm.inHoraBrasil.value)

    let horaFranca = horaBrasil + 5 //calcula o horario na França

    if (horaFranca > 24) {   // se passar das 24 horas na França
        horaFranca = horaFranca - 24 // ... subtrai 24
    }

    //exibe a resposta (altera o conteudop do elemento h3 da pagina)
    resp.innerText = `Hora na França ${horaFranca.toFixed(2)}`
})