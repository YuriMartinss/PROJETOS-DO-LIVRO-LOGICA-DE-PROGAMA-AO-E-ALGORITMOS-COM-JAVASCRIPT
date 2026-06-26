//cria uma referencia ao form e aos elementos de resposta pelo seu id
const frm = document.querySelector("form")
const resp1 = document.querySelector("h2")


//cria um "ouvinte" de evento, acionado quando o botao submit for clicado
frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const valorPorUso = frm.inValorPorUso.value // obtem o conteudo dos campos
    const tempo = Number(frm.inTempoDoUso.value)
    
    const periodos = Math.ceil(tempo / 15)
    const valorPagar = periodos * valorPorUso
     
   
    resp1.innerText = `Valor a pagar R$: ${valorPagar.toFixed(2)}`


})