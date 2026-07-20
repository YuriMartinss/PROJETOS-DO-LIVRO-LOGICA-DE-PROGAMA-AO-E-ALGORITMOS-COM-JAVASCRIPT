const frm = document.querySelector("form") //obtem elementos da pagina
const respErros = document.querySelector("#outErros")
const respChances = document.querySelector("#outChances")
const respDica = document.querySelector("#outDica")

const erros = []   //vetor de escopo global com numeros ja apostados
const sorteado = Math.floor(Math.random() * 100) + 1 // num aleatorio entre 1 e 100
const CHANCES = 6   //constante com numero maximo de chances

frm.addEventListener ("submit", (e) => {  //"escuta" o evento submit do form
    e.preventDefault()  //evita o envio do form
    
    const numero = Number(frm.inNumero.value) //obtem numero digitado

    if (numero == sorteado) {  //escuta o evento do submit do form 
        respDica.innerText = `Parabens!! Numero sorteado: ${sorteado}`
        frm.btSubmit.disabled = true  //troca o status dos botoes
        frm.btNovo.className = "exibe"
    } else {
        if (erros.includes(numero)) { //se numero existe no vetor erros (ja apostou)
            alert (`Voce ja apostou o numero ${numero}. Tente outro...`)

        }else {
            erros.push(numero) //adiciona numero ao vetor
            const numErros = erros.length //obtem tamanho do vetor
            const numChances = CHANCES - numErros //calcula o numero de chances
            //exibe o numero de erros, conteudo do vetor e n de chances
            respErros.innerText = `${numErros} (${erros.join(",")})`
            respChances.innerText = numChances
            if (numChances == 0) {
                alert("Suas chance acabaram...")
                frm.btSubmit.desabled = true 
                frm.btNovo.className = "exibe"
                respDica.innerText = `Game Over!! Numero Sorteado:${sorteado}`

            } else {
                //usa operador ternario para mensagem da dica
                const dica = numero < sorteado ? "maior" : "menor"
                respDica.innerText = `Dica: Tente um numero ${dica} que ${numero}`
            }
        }
    }
    
    frm.btNovo.addEventListener("click", () => {
        location.reload()    // recarrega a página
    }) 

    frm.inNumero.value = ""  //limpa o campo de entrada
    frm.inNumero.focus() //posiciona cursor neste campo
    
})