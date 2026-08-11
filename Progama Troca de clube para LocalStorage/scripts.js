const frm = document.querySelector("form")
const imClube = document.querySelector("#imgClube")
const dvTitulo = document.querySelector("#divTitulo")

const trocarClube = () => {

        if (frm.rbNenhum.checked) {
        localStorage.removeItem("clube");

        divTitulo.className = "row";
        imClube.src = ""; // ou "assets/padrao.png"
        imClube.className = "";
        imClube.alt = "";

        return;
     }

    let clube // variavel que ira receber o nome do clube 

    if (frm.rbBrasil.checked) { //verifica qual radiobutton esta selecionadao
        clube = "Brasil" 
    } else if (frm.rbPelotas.checked) {
        clube = "Pelotas"
    } else {
        clube = "Farroupilha"
    }

    //define as classes de dvTitulo: row e cores do clube
    dvTitulo.className = `row cores-${clube}`

    //modifica a imagem de acordo com a seleçao do cliente 
    imClube.src = `assets/${clube.toLowerCase()}.png`
    imClube.className = "img-fluid"  //muda o estilo para exibir a imagem
    imClube.alt = `Símbolo do ${clube}`  //modifica atributo alt 

    localStorage.setItem("clube", clube) //salva no navegador a escolha do cliente 
}

//associa ao evento change de cada botao do form a funçao trocarClube
frm.rbBrasil.addEventListener("change", trocarClube)
frm.rbPelotas.addEventListener("change", trocarClube)
frm.rbFarroupilha.addEventListener("change", trocarClube)
frm.rbNenhum.addEventListener("change", trocarClube);


const verificarClube = () => {
    if (localStorage.getItem("clube"))  {  //se ja estiver salvo algum clube
        const clube = localStorage.getItem("clube")  //obtem o nome do clube

        if (clube == "Brasil") {  //conforme o clube, marca o checked
            frm.rbBrasil.checked = true
        } else if (clube == "Pelotas") {
            frm.rbPelotas.checked = true
        } else {
            frm.rbFarroupilha.checked = true
        }

        trocarClube()  //chama function que troca imagem e cores
    }
}

// ao carregar a pagina, verifica se o cliente ja selecionou o clube anteriormente
window.addEventListener("load", verificarClube)


