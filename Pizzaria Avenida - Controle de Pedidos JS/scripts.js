const frm = document.querySelector("form") //obtem elementos da pagina
const  resp = document.querySelector("pre")

const itens = []  //vetor global para armazenar os itens pedido

frm.rbPizza.addEventListener("click", () => {  //quando o radio button e clicado
    frm.inBebida.className = "oculta"  //oculta select das bebidas
    frm.inPizza.className = "exibe"  // exibe o select das pizzas
})

frm.rbBebida.addEventListener("click", () => {  //quando radio button e clicado
    frm.inPizza.className = "oculta" //oculta select das pizzas
    frm.inBebida.className = "exibe"  //exibe select das bebidas
})

frm.inDetalhes.addEventListener("focus", () => { //quando campo recebe o foco
    if (frm.rbPizza.checked) {  //se rediobutton rbPizza estiver marcado
        const pizza = frm.inPizza.value //obtem value do item selecionado
        
        //uso do operador ternario, para indicar o numero de sabores
        const num = pizza == "media" ? 2 : pizza == "grande" ? 3 : 4
        //atributo placeholder exibe uma dica de preenchimento do campo
        frm.inDetalhes.placeholder = `Até ${num} sabores`
    }
})

frm.inDetalhes.addEventListener("blur", () => { //quando campo perde o foco
    frm.inDetalhes.placeholder = ""  //limpa a dica de preenchimento
})


frm.addEventListener("submit", (e) => {
    e.preventDefault()   //evita o envio do form

    let produto 
    if (frm.rbPizza.checked) {
        const num = frm.inPizza.selectedIndex //obtem o nº do item selecionado
        produto = frm.inPizza.options[num].text  //texto do item selecionado
    } else {
        const num = frm.inBebida.selectedIndex
        produto = frm.inBebida.options[num].text
    }

    const detalhes = frm.inDetalhes.value  //conteudo do inDetalhes
    itens.push(produto + "(" + detalhes + ")")  //adiciona ao vetor
    resp.innerText = itens.join("\n")  //exibe os itens do pedido

    frm.reset()  //limpa o form
    frm.rbPizza.dispatchEvent(new Event("click"))  //dispara click em rbPizza
})