//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de 
// programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let array = [];


// Adiciona os nomes na Lista chamada "Array"
function adicionarAmigo(){
    let armazenandoNome = document.querySelector('input').value;
    if (array.includes(armazenandoNome)){
        alert("Digite nome e sobrenome, esse nome já existe dentro da lista");
    }else if(armazenandoNome == ''){
        alert("Por favor, Insira um nome!");
    }else{
        array.push(armazenandoNome);
        limparCampo()
        listaDeAmigos();

        // Pra visualização da Lista no console
        return console.log(array);
    }
}

// Lista os nomes na parte debaixo do Input | INCOMPLETO AINDA

function listaDeAmigos(){
    let qtdElementoLista = array.length;
    if(qtdElementoLista > 0){
        let lista = document.querySelector('ul');
        lista.innerHTML = '';
        for(let i = 0; i < qtdElementoLista; i++){
            lista.innerHTML = `<li> ${array[i]} </li>`;
        }
    }
}


// Limpa o campo assim que clicamos em adiocionar
function limparCampo(){
    armazenandoNome = document.querySelector('input');
    armazenandoNome.value = '';
}