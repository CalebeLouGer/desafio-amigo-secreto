//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de 
// programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let array = [];

function adicionarAmigo(){
    let armazenandoNome = document.querySelector('input').value;
    //let quantidadeElementosNaLista = listaAmigos.length;
    if (array.includes(armazenandoNome)){
        alert("Digite nome e sobrenome, esse nome já existe dentro da lista");
    }else if(armazenandoNome == ''){
        alert("Por favor, Insira um nome!");
    }else{
        array.push(armazenandoNome);
        limparCampo()
        return console.log(array);
    }
}


/*function atualizarAmigo(){
        let atualizarLista = document.getElementById('listaAmigos');
        atualizarLista.innerHTML = '';
        let quantidadeElementosNaLista = array.length;
        for(let i = 0; i < quantidadeElementosNaLista;i++){
            array.innerHTML = `<li> ${array}`;
            return console.log('passei aq');
        }
}*/
function limparCampo(){
    armazenandoNome = document.querySelector('input');
    armazenandoNome.value = '';
}