//Ask for user name
let nomeCandidato = prompt("Qual é o seu nome?");

//Input user name on the screen
let nome = document.getElementById("nome-usuario");
nome.innerHTML = "Olá " + nomeCandidato + "!";

//Ask if user wants to do the test
let inicializacao = prompt("Gostaria de iniciar o teste?\n1. Sim\n2. Não"); 

//Only run the test if user said she/he wanted it
if (inicializacao == 1) {

    //Declare the variables "divCorreta and divErrada" defining them as HTML objects 
    let divCorreta = document.getElementById("respostasCorretas");
    let divErrada = document.getElementById("respostasErradas");

    //Declare the empty variables "pergunta and perguntaNumero" to use in the if conditions
    let pergunta;
    let perguntaNumero;

    //To add a new question, copy the question block code and change the variable "perguntaNumero", the if condition and the question itself
    // question block code -----------------------------------------------------------
    
    perguntaNumero = 1;
    pergunta = prompt("Qual a raiz quadrada de 25?\n1. 5\n2. 15");
    if (pergunta == 1) {
        divCorreta.innerHTML += "\n Resposta " + perguntaNumero + " Correta";
        console.log("pergunta " + perguntaNumero + " = " + pergunta + " Correta");
    }
    else {divErrada.innerHTML += "\n Resposta " + perguntaNumero + " Incorreta";
        console.log("pergunta " + perguntaNumero + " = " + pergunta + " Errada");
    } 

    // question block code -----------------------------------------------------------
    
    perguntaNumero = 2;
    pergunta = prompt("Quantos planetas tem no Sistema Solar?\n1. 8\n2. 9");
    if (pergunta == 2) {
        divCorreta.innerHTML += "\n Resposta " + perguntaNumero + " Correta";
        console.log("pergunta " + perguntaNumero + " = " + pergunta + " Correta");
    }
    else {divErrada.innerHTML += "\n Resposta " + perguntaNumero + " Incorreta";
        console.log("pergunta " + perguntaNumero + " = " + pergunta + " Errada");
    } 

   // question block code ------------------------------------------------------------
    
   perguntaNumero = 3;
    pergunta = prompt("Qual é a capital dos Estados Unidos?\n1. Washington\n2. New York");
    if (pergunta == 1) {
        divCorreta.innerHTML += "\n Resposta " + perguntaNumero + " Correta";
        console.log("pergunta " + perguntaNumero + " = " + pergunta + " Correta");
    }
    else {divErrada.innerHTML += "\n Resposta " + perguntaNumero + " Incorreta";
        console.log("pergunta " + perguntaNumero + " = " + pergunta + " Errada");
    } 

//Show this message if user chose not to do the test 
} else {alert("Este teste foi cancelado!");}
 

