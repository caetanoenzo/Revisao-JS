//ex1
console.log("------------------ex1------------------");

let ns = prompt("Quantos números você deseja somar?");
let somaF = NaN;

for(let i = 0; i < ns; i++){
    let numero = prompt("Digite um numero");
    somaF = parseInt(somaF) + parseInt(numero);
}

console.log("Soma: ", somaF);

//ex2
console.log("------------------ex2------------------");

let contagem = 10;

function contagemRegressiva(){
    setInterval(() => {
        console.log(contagem);
        contagem--; 
       
        if (contagem < 0) {
          console.log("Lançamento!");
          clearInterval(contagemRegressiva); 
        }
      }, 1000);
} 

contagemRegressiva();

//ex3
console.log("------------------ex3------------------");

let gastoF = NaN;
let ganhoF = NaN;
let saldoF = NaN;

for(let i = 0; i < 12; i++){
    let gastos = prompt("Quanto a empresa gastou no mês ", i, "?");
    gastoF = parseInt(gastoF) + parseInt(gastos);
}
for(let i = 0; i < 12; i ++){
    let ganhos = prompt("Quanto a empresa ganhou no mês ", i, "?");
    ganhoF = parseInt(ganhoF) + parseInt(ganhos);
}

saldoF = parseInt(ganhoF) - parseInt(gastoF);

console.log("Gasto anual: R$ ", gastoF, ",00");
console.log("Lucro total: R$ ", ganhoF, ",00");
console.log("Saldo da empresa: R$ ", saldoF, ",00");

function verificarLucro(saldoF){
    if(saldoF > 0){
        console.log("Lucro Total: R$ ", saldoF, ",00");
    } else {
        console.log("Prejuizo Total: R$ ", saldoF, ",00");
    }
}

verificarLucro(saldoF);


//ex4
console.log("------------------ex4------------------");

let numbers = [];

for(let k = 0; k < 4; k++){
    numbers[k] = prompt("Digite um número");
}

numbers.sort((a,b) => b - a);

console.log(numbers);


//ex5
console.log("------------------ex5------------------");

function ParImpar() {
    let n = parseInt(prompt("Escreva um número"));

    if (n % 2 == 0){
        parseInt(n = n + 1);
        console.log("O nº era par e agr é ímpar:", n);
    }
    else{
        parseInt(n = n + 1);
        console.log("O nº era ímpar e agr é par:", n);
    }
}

ParImpar();


//ex6
console.log("------------------ex6------------------");

function VogalCons() {
    let pp = prompt("Digite uma letra");

        if ((pp == 'a') || (pp == 'e') || (pp == 'i') || (pp == 'o') || (pp == 'u')) {
            console.log("é uma vogal");
        } else {
            console.log("é uma consoante");
        }   

  }
  
  VogalCons();


  //ex7
  console.log("------------------ex7------------------");

  function Picole(){
    let pic = {"Chocolate":1.50,"Morango":2.50,"Creme":2.50,"Manga":3.20,"Melancia":3.40,"Vanilla Ice":3.00,"Céu Azul":3.60,"Brownie":4.00,"Hawaiano":5.00};

    console.log("Qual sabor de picolé deseja?");
    for (let sabor in pic) {
        console.log("- " + sabor + ": R$" + pic[sabor]);
    }

    let escolha = prompt("Digite o sabor que deseja:");
    let preco = pic[escolha];

    console.log("O preço do picolé de " + escolha + " é R$" + preco);
}

Picole();


//ex8
console.log("------------------ex8------------------");

function adivinhe(){
    rand = (Math.random() * 100) + 1;
    rand = Math.floor(rand);
    let resp = NaN

    console.log("Que número acha que foi sorteado?");

    while (resp !== rand){
        resp = prompt("Digite um Número")

        if(resp == rand){
            console.log("Vc acertou o número, parabens: ", rand);
            break;
        } else{
            let desistir = prompt("Vc errou o nº Deseja desistir?")

            if(desistir == "sim"){
             console.log("ok, o nº era:", rand);
             break;
            }
        }

        
    }
}

adivinhe();

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