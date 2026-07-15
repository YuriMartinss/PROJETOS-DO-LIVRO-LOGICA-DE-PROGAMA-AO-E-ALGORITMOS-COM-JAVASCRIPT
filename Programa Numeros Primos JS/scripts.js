const frm = document.querySelector("form") //obtem elementos da pagina
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => { //escuta evento submit do form
    e.preventDefault() //evita envio do form

    const num = Number(frm.inNumero.value) //obtem numero informado
    let numDivisores = 0 //declara e inicializa contador

    for (let i = 1; i <= num; i++) { //percorre todos os possiveis divisores de num
        if (num % i == 0) {  //verifica se i (1,2,3...) e divisor do num
            numDivisores++ //se e, incrementa contador
        }

    }

    if (numDivisores == 2) { //se possui apenas 2 divisores, e primo
        resp.innerText = `${num} È primo`
    } else {
        resp.innerText = `${num} Não é primo`
    }
})