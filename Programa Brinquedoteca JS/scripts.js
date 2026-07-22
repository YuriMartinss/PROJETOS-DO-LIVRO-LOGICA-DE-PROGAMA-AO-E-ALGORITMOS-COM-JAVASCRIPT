const frm = document.querySelector("form") //obtem elementos a serem manipulados
const resp = document.querySelector("pre")

const criancas = [] //declara vetor global

frm.addEventListener("submit", (e) => {
    e.preventDefault() //evita o envio do form

    const nome = frm.inNome.value //obtem conteudo dos campos
    const idade = Number(frm.inIdade.value)
    criancas.push({nome,idade}) //adiciona dados ao vetor de objetos
    frm.reset()  //limpa campos do form
    frm.inNome.focus() //posiciona no campo de formulario
    frm.btListar.dispatchEvent(new Event("click")) //dispara click em btListar
})

frm.btListar.addEventListener("click", () => {
    if(criancas.length == 0) {  //se vazio, exibe alerta
        alert("Não há crianças na lista")
        return
    }
    let lista = ""  //para concatenar lista de crianças
    for(const crianca of criancas) {
        const {nome, idade} = crianca  //desestrutura o objeto
        lista += nome + "-" + idade + "anos\n"
    }
    resp.innerText = lista  //exibe a lista 
})

frm.btResumir.addEventListener("click", () => {
    if(criancas.length == 0) {
        alert("Não há crianças na lista")
        return
    }

    const copia = [...criancas] //cria copia do vetor criança
    copia.sort((a, b) => a.idade - b.idade) //ordena pela idade
    let resumo = "" //para concatenar saida
    let aux =  copia[0].idade //menor idade do vetor ordenado
    let nomes = [] //para inserir nomes de cade idade
    
    for(const crianca of copia) {
        const {nome, idade} = crianca
        if(idade == aux) { //se e da mesma idade auxiliar...
            nomes.push(nome) //adicionar ao vetor nomes
        }
        else { //senao, monta o resumo para cada idade
            resumo += aux + "ano(s):" + nomes.length + "criança(s)-"
            resumo += ((nomes.length / copia.length) * 100).toFixed(2) + "%\n"
            resumo += "(" + nomes.join(", ") + ")\n\n"
            aux = idade //obtem a nova idade na ordem
            nomes = [] //limpa o vetor dos nomes
            nomes.push(nome) //adiciona o primeiro da nova idade

        }
    }

    //adiciona a ultima criança
    resumo += aux + "ano(s):" + nomes.length + "criança(s)-"
    resumo += ((nomes.length / copia.length) * 100).toFixed(2) + "%\n"
    resumo += "(" + nomes.join(", ") + ")\n\n"
    resp.innerText = resumo //exibe a resposta    
})