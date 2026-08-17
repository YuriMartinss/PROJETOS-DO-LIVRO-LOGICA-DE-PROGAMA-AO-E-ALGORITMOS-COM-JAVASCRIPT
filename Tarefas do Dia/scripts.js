const frm = document.querySelector("form") //obtem elementos da pagina
const dvQuadro = document.querySelector("#divQuadro")

frm.addEventListener("submit", (e) => {
    e.preventDefault()       //evita envio do form

    const tarefa = frm.inTarefa.value     //obtem o conteudo digitado

    const h5 = document.createElement("h5")   //cria o elemento HTML h5 
    const texto = document.createTextNode(tarefa)  //cria um texto
    h5.appendChild(texto)   //define que texto sera filho de h5 
    dvQuadro.appendChild(h5)   //e que h5 sera filho de divQuadro

    frm.inTarefa.value = ""    //limpa o campo de ediçao 
    frm.inTarefa.focus()    //joga o cursor neste campo 
})


frm.btSelecionar.addEventListener("click", () => {
    const tarefas = document.querySelectorAll("h5")  //obtem tags h5 da pagina

    if (tarefas.length == 0) {
        alert("Não há tarefas para selecionar")  //se nao ha tarefas, exibe alerta
        return  //e retorna
    }

    let aux = -1  //variavel auxiliar para indicar linha selecionar

    //percorre a lista de elementos h5 inseridos na pagina, ou seja, tarefas
    for (let i = 0; i < tarefas.length; i++) {
        //se tag e da class tarefa-selecionada (esta selecionada)
        if (tarefas[i].className == "tarefa-selecionada") {
            aux = i //muda o valor da variavel auxiliar 
            break     //sai da repetição
        }
    }

    //se a linha que esta selecionada e a ultima, ira voltar para a primeira
    if (aux == tarefas.length - 1) {
        aux = - 1
    }

    tarefas[aux + 1].className = "tarefa-selecionada"   //muda o estilo da proxima linha
})



frm.btRetirar.addEventListener("click", () => {
    const tarefas = document.querySelectorAll("h5")  //obtem tags h5 da pagina

    let aux = - 1 //variavel auxiliar para indicar linha selecionada

    //percorre a lista das tarefas inseridas na pagina (elementos h5)
    tarefas.forEach((tarefa, i) => {
        if (tarefa.className == "tarefa-selecionada") {   //se e da classe tarefa-selecionada
            aux = i     //muda valor da variavel aux
        }
    })

    if (aux == -1) {   //se nao ha tarefa selecionada (ou se vazia...)
        alert("Seleciona uma tarefa para removê-la")
        return
    }


    //solicita confirmaçao (exibindo o conteudo da tag h5 selecionada)
    if (confirm(`Confirma Exclusão "${tarefas[aux].innerText}"?`)) {
        dvQuadro.removeChild(tarefas[aux])  //remove um dos filhos de divQuadro
    }

})




frm.btGravar.addEventListener("click", () => {
    const tarefas = document.querySelectorAll("h5")  //obtem tags h5 da pagina

    if (tarefas.length == 0) {
        alert("Não há tarefas para serem salvas")  //se não há tarefas, exibe alerta
        return
    }

    let dados = ""   //ira "acumular" os dados a serem salvos
    tarefas.forEach(tarefa => {
        dados += tarefa.innerText + ";" //acumula conteudo de cada h5
    })

    //grava os dados em localStorage, removendo o ultimo ";"
    localStorage.setItem("tarefasDia", dados.slice(0, -1))

    //confere se dados foram armazenados em localStorage
    if (localStorage.getItem("tarefasDia")) {
        alert("Ok! Tarefas Salvas")
    }
})



window.addEventListener("load", () => {
    //verifica se ha tarefas salvas no navegador do usuario
    if (localStorage.getItem("tarefasDia")) {
        //cria um vetor com a lista de tarefas (separadas pelo split(";"))
        const dados = localStorage.getItem("tarefasDia").split(";")

        //percorre os dados armazenados em localStorage
        dados.forEach(dado => {
            const h5 = document.createElement("h5")  //cria o elemento HTML h5
            h5.appendChild(texto)  //define que o texto sera filho de h5
            dvQuadro.appendChild(h5)  //e que h5 sera filho de divQuadro
        })
    }
})


