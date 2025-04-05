//ex9
console.log("------------------ex9------------------");

function contarVogais() {
    let palavra = prompt("Qual frase deseja saber a quantidade de vogais?");
    letras = palavra.split('');
    let numVoga = 0;
    for (i = 0; i <= palavra.length; i++) {
        if ((letras[i] == 'a') || (letras[i] == 'e') || (letras[i] == 'i') || (letras[i] == 'o') || (letras[i] == 'u')) {
            numVoga++;
        }
    }
    console.log("O número de vogais da frase é: " + numVoga);
}

contarVogais();

//ex10
console.log("------------------ex10------------------");

let senha = prompt('Qual a senha?');

function validarDadosSenha(senha){

    console.log(senha);

    if(!senha || senha.length < 8 || /[A-Z]/.test(senha) === false || /[a-z]/.test(senha) === false || /[0-9]/.test(senha) === false){
        alert('Por favor, A senha deve conter no mínimo 8 caracteres, com pelo menos uma letra maiúscula, uma minúscula e um número');
        return false;
    }else{
        alert("Tua senha é válida bro, essa aqui ó: " + senha);
    }
}

validarDadosSenha(senha);

//ex11
console.log("------------------ex11------------------");

let numb = prompt('Qual o número?');
let b;


function tabuada(){
    for (let i = 1; i <= 10; i++) {
        b = numb * i;
        console.log(b);
    }
}

tabuada(b);

//ex12
console.log("------------------ex12------------------");

const carrinho = [];

function cadastrarProduto() {
    let contador = 1;
    
    while (carrinho.length < 5) {
        const produto = {
            nome: prompt(`Digite o nome do ${contador}º produto:`),
            preco: parseFloat(prompt(`Digite o preço do ${contador}º produto:`))
        };
        
        carrinho.push(produto);
        contador++;
    }
}

function exibirCarrinho() {
    let listaProdutos = "Itens do Carrinho:\n\n";
    let total = 0;
    
    carrinho.forEach((produto, index) => {
        listaProdutos += `${index + 1}. ${produto.nome} - R$ ${produto.preco.toFixed(2)}\n`;
        total += produto.preco;
    });
    
    listaProdutos += `\nTotal a Pagar: R$ ${total.toFixed(2)}`;
    alert(listaProdutos);
}

cadastrarProduto();
exibirCarrinho();