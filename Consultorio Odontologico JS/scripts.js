const frm = document.querySelector("form") //obtem elementos da pagina
const respNome = document.querySelector("span")
const respLista = document.querySelector("pre")

const pacientes = [] //declara vetor global

frm.addEventListener("submit", (e) => {
    e.preventDefault() //evita envio do form

    const nome = frm.inPaciente.value //obtem o nome do paciente 
    pacientes.push(nome) //adiciona o nome no final do vetor

    let lista = ""  //string para concatenar pacientes
    // for "tradicional"(inicia em 0, enquanto menos que tamanho do array)

    for (let i = 0; i < pacientes.length; i++) {
        lista += `${i + 1}. ${pacientes[i]} \n`
    }

    respLista.innerText = lista //exibe a lista de pacientes na pagina
    frm.inPaciente.value = ""  //limpa conteudo do campo do formulario
    frm.inPaciente.focus()
})

//Adiciona um "ouvinte" para o evento click no btUrgencia que esta no form
frm.btUrgencia.addEventListener("click", () => {
    //verifica se as validaçoes do form estao ok(nocaso, paciente is required)
    if (!frm.checkValidity()) {
        alert("Informe o nome do paciente a ser atendido em carater de urgencia")
        frm.inPaciente.focus() //posiciona o cursor no campo inPaciente
        return //retorna o form

    }
    
    const nome = frm.inPaciente.value //obtem nome do paciente
    pacientes.unshift(nome) //adiciona paciente no inicio do vetor

    let lista = ""

    //forEach aplicado sobre o array pacientes
    pacientes.forEach((paciente, i) => (lista += `${i + 1}.${paciente} \n`))
    respLista.innerText = lista //exibe a lista de pacientes na pagina 
    frm.inPaciente.value = "" //limpa conteudo do campo de formularios
    frm.inPaciente.focus()  //posiciona o cursor no campo 
})

frm.btAtender.addEventListener("click", () => {
    //se o tamanho do vetor =0
    if (pacientes.length ==0) {
        alert("Não ha pacientes na lista de espera")
        frm.inPaciente.focus()
        return
    }

    const atender = pacientes.shift() //remove o inicio da fila (e obtem nome)
    respNome.innerText = atender // exibe o nome do paciente em atendimeno
    let list = "" //string para concatenar paciente
    pacientes.forEach ((paciente, i) => (lista += `${i + 1}. ${paciente}\n`)) 
    respLista.innerText = lista // exibe a lista de pacientes na pagina
})