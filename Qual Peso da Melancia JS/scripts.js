const frm = document.querySelector("form")  //obtem elementos da pagina
const respLista = document.querySelector("pre")

frm.addEventListener("submit", (e) => {
    e.preventDefault()     //evita o envio do form

    const nome = frm.inNome.value     //conteudo do campo nome 
    const peso = Number(frm.inPeso.value)  //conteudo do campo peso (em numero)


    //chama a function que verifica se peso ja foi apostado
    if (verApostaExiste(peso)) {
        alert("Alguém já apostou esta peso, informe outro...")
        frm.inPeso.focus()
        return
    }

    if (localStorage.getItem("melanciaNome")) {   //se houver dados em localStorage
        //obtem o conteudo ja salvo e acrescenta ";" + dados da aposta
        const melanciaNome = localStorage.getItem("melanciaNome") + ";" + nome
        const melanciaPeso = localStorage.getItem("melanciaPeso") + ";" + peso
        localStorage.setItem("melanciaNome", melanciaNome)   //salva os dados
        localStorage.setItem("melanciaPeso", melanciaPeso)
    } else {     //senão , e a primeira aposta
        localStorage.setItem("melanciaNome", nome)  //salva os dados (sem ";")
        localStorage.setItem("melanciaPeso", peso)

    }

    mostrarApostas() //chama a function que mostra as apostas ja salvas
    frm.reset()   //limpa o form
    frm.inNome.focus()     //joga o foco (cursor) no campo inNome
})


const verApostaExiste = (peso) => {
    if (localStorage.getItem("melanciaPeso")) {  //se existir dados em localStorage
        //obtem seu conteudo ea string e dividida em itens de veor a cada ";"
        const pesos = localStorage.getItem("melanciaPeso").split(";")

        // o peso deve ser convertido em string, pois o vetor contem strings
        return pesos.includes(peso.toString())
    } else {
        return false
    }
}


const mostrarApostas = () => {
    //se nao ha apostas armazenadas em localStorage
    if (!localStorage.getItem("melanciaNome")) {
        //limpa o espaço de exibiçao das apostas (para quando "Limpar Apostas")
        respLista.innerText = ""
        return  //retorna (nao executa os comandos abaixo)
    }

    //obtem o conteudo das variaveis salvas no localStorage, separando-as
    //em elementos de vetor a cada ocorrencia do ";"
    const nomes = localStorage.getItem("melanciaNome").split(";")
    const pesos = localStorage.getItem("melanciaPeso").split(";")

    let linhas = ""  //ira acumular as linhas a serem exibidas 

    //repetiçao para percorrer todos os elementos do vetor
    for (let i = 0 ; i < nomes.length; i++) {
        //concatena em linhas os nomes dos apostadores e suas apostas
        linhas += nomes[i] + "-" + pesos[i] + "gr\n"
    }

    //exibe as linhas (altera o conteudo do elemento respLista)
    respLista.innerText = linhas
}

//chama a finction quando a pagina e carregada, para mostrar apostas salvas 
window.addEventListener("load", mostrarApostas)


frm.btVencedor.addEventListener("click", () => {
    //se nao ha apostas armazenadas em localStorage
    if (!localStorage.getItem("melanciaNome")) {
        alert ("Não há apostas cadastradas")
        return  //retorna (nao executa os comando abaixo)
    }

    //solicita o peso correto da melancia
    const pesoCorreto = Number(prompt("Qual o peso correto da melancia?"))

    //se nao informou, retorna
    if (pesoCorreto == 0 || isNaN(pesoCorreto)) {
        return
    }

    //obtem os dados armazenados, separando-os em elementos de vetor
    const nomes = localStorage.getItem("melanciaNome").split(";")
    const pesos = localStorage.getItem("melanciaPeso").split(";")

    
    //valor inicial para vencedor eo da primeira aposta
    let vencedorNome = nomes[0]
    let vencedorPeso = Number(pesos[0])


    //percorre as apostas 
    for (let i = 1 ; i < nomes.length; i++) {
        //calcula a diferença de peso do "vencedor" e da aposta atual
        const difVencedor = Math.abs(vencedorPeso - pesoCorreto)
        const difAposta = Math.abs(Number(pesos[i]) - pesoCorreto)

        //se a diferença da aposta atual (no for) for menor que a do "vencedor"
        if (difAposta < difVencedor) {
            vencedorNome = nomes[i]   //troca o "vencedor"
            vencedorPeso = Number(pesos[i])   //para este elemento
        }
    }


    //monta mensagem com dados do vencedor 
    let mensagem = "Resultado - Peso Correto:" + pesoCorreto + "gr"
    mensagem += "\n--------------------------------"
    mensagem += "\nAposta:" + vencedorNome 
    mensagem += "\nAposta" + vencedorPeso + "gr"
    alert(mensagem)
})



frm.btLimpar.addEventListener("click", () => {
    //solicita confirmação para excluir as apostas
    if (confirm("Confirma exclusão de todas as apostas?")) {
        localStorage.removeItem("melanciaNome")  //remove as variaveis salvas
        localStorage.removeItem("melanciaPeso")  //em localStorage
        mostrarApostas()      //exibe a listagem vazia
    }
})