// Arrays
let array = [];

// Adiciona os nomes na Lista chamada "Array"
function adicionarAmigo(){
    let armazenandoNome = document.querySelector('input').value;
    if (array.includes(armazenandoNome)){
        exibirMensagemNaTela('h2','Digite nome e sobrenome, esse nome já existe dentro da lista');
    }else if(armazenandoNome == ''){
        alert('Por favor, Insira um nome!');
    }else{
        exibirMensagemNaTela('h2', 'Digite o nome dos seus amigos');
        array.push(armazenandoNome);
        limparCampo();
        listaDeAmigos();

        // Pra visualização da Lista no console
        return console.log(array);
    }
}

// Função de Trocar as mensagens no HTML por meio do JS
function exibirMensagemNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

// Lista os nomes na parte debaixo do Input
function listaDeAmigos(){
    let qtdElementoLista = array.length;
    if(qtdElementoLista > 0){
        let lista = document.querySelector('ul');
        lista.innerHTML = '';
        for(let i = 0; i < qtdElementoLista; i++){
            lista.innerHTML += `<li> ${array[i]} </li>`;
        }
    }
}

// Sorteia os nomes da Lista
function sortearAmigo(){
    let qtdElementoLista = array.length;
    if(qtdElementoLista < 2){
        alert('Adicione pelo menos 2 nomes para o sorteio!');
    }else{
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = '';
        
        let arrayAleatorio = array.slice();
        for(let i = arrayAleatorio - 1;i > 0;i--){
            let numeroAleatorio = parseInt(Math.floor(Math.random()* (i + 1)));
            [arrayAleatorio[i], arrayAleatorio[numeroAleatorio]] = [arrayAleatorio[numeroAleatorio], arrayAleatorio[i]];
        }
        for(let i = 0; i < qtdElementoLista; i++){
            let amigo = arrayAleatorio[i];
            let amigoSorteado = arrayAleatorio[(i + 1) % qtdElementoLista];
            resultado.innerHTML += `<p>${amigo} -> ${amigoSorteado}</p>`;
        }

        // Atualiza listas de sorteados
        //listaDeNomesSorteados = embaralhado.slice();
        //sorteados = embaralhado.map((_, i) => embaralhado[(i + 1) % qtdElementoLista]);
    }
}


// Limpa o campo assim que clicamos em adiocionar
function limparCampo(){
    armazenandoNome = document.querySelector('input');
    armazenandoNome.value = '';
}