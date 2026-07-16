const frm = document.querySelector("form") //obtem elementos do form
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => { //"escuta" evento submit do form
    e.preventDefault() //evita o envio do form

    const num = Number(frm.inNumero.value) //obtem numero informado
    let estrelas = "" //variavel que ira concatenar as estrelas/traços

    for (let i = 1; i <= num; i++) { //cria o laço de repetiçao de 1 ate num
        if (i % 2 == 1) {
            estrelas = estrelas + "*" //na posiçao impar do i: * 
        } else {
            estrelas = estrelas + "-" //na posiçao par: - 
        }

    }

    resp.innerText = estrelas //exibe as estrelas
})