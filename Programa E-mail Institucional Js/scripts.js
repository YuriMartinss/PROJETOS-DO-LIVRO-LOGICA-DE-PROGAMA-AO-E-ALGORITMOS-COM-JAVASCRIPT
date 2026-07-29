const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const funcionario = frm.inFuncionario.value

    //divide o nome em itens de vetor, criados a cada ocorrencia do espaço 
    const partes = funcionario.split(" ")
    let email = ""
    const tam = partes.length 

    for(let i = 0; i < tam - 1; i++) {
        email += partes[i].charAt(0)
    }

    //concatena as letras iniciais com a ultima parte (sobrenome) e empresa
    email += partes[tam - 1] + "@empresa.com.br"

    resp.innerText = `E-mail: ${email.toLowerCase()}`
})