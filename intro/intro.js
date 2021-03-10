// Antes de começar este tutorial, baixe o editor "Visual Studio Code"
// após a instalação da ferramenta, realize os passos deste vídeo apenas para baixar a extensão!
// falar com grahl e adicionar o video aqui

//  comentário linha em Javascript

/* 
    comentário bloco em Javascript
    continua o comentário
    continua se for necessário
*/

/* 
    Pra que serve uma variável e como ela funciona?
        R: Basicamente, uma variável, ocupa um espaco na memória da máquina, se fechar a janela ou terminar a execução, os valores
        serão perdidos. Como uma calculadora por exemplo, ao finalizar seus cálculos, quando desligar e ligar novamente a calculadora, os
        valores serão perdidos. 
        
    O que a variável pode guardar?
        R: Depende a definição da variável. Após criar a variável ela pode armazenar um valor específico ou o valor poderá ser alterado.
            
    Padrões de nomes das variáveis: nomeDaVariavel
        Obs.: Nunca se usa acentuação em declaração de uma variável, nem "ç".

    Possíveis comandos de declarações/criações de variáveis: var, let e const

    Atribuição de valor para uma variável é a partir do síbolo =

    Definições de variáveis:
        String:
            Armazena conteúdo de textos. Palavras, frases.
            ex.:
                var mensagemTexto = "Olá Mundo!" // mensagemTexto recebe Olá mundo
        Number:
            Armazena conteúdo numéricos. Números naturais, inteiros, racionais e irracionais.
            ex.:
                const idadeAdulto = 18 // idadeAdulto recebe 18
        Boolean:
            Armazena somente os valores true ou false. Nunca os dois ao mesmo tempo, porque é uma 
            variável lógica.
            ex.:
                var compraRealizada = false // compraRealizada recebe um falor lógico false
        Array:
            É uma variável que possui um conjunto de dados, independente de suas definições, e para 
            acessar um valor específico desse array, será necessário uma nova variável que funcione
            como index. O conceito de index será abordado um pouco mais para frente.
            ex.:
                let arrayAleatorio = ["Julio", 7, true, "Pedro", "Joana", false, "Sara"] // arrayAleatorio recebe um objeto de informações

    Algumas funções matemáticas e aplicações.
        Comando de maior que, é escrito da seguinte forma: >
        Comando de menor que, é escrito da seguinte forma: <
        Comando de diferente que, é escrito da seguinte forma: <>
        Comando de verificação de igualdades entre duas variáveis, é escrito da seguinte forma: ==
        É possível criar uma expressão algébrica usando parenteses ()

        Adição:
            Se precisar de um resultado numérico, dê preferência para utilizar variáveis do tipo Number em sua expressão.
            É possível juntar duas variáveis do tipo String, isso seria o termo de concatenar as informações.
            Ex. Number:
                let resultado = 0
                let varNumber1 = 5
                let varNumBer2 = 9
                let varNumBer3 = 20

                varResultado = varNumber1 + varNumber2 + (varNumber3)
                console.log(varResultado) // é possível verificar o valor existente na variável
                
            Ex. String, concatenação de variáveis.
                var conteudoBomDia = "Bom dia"
                var nomeCliente = "Sr. João"

                console.log(conteudoBomDia + " " + nomeCliente)

        Subtração: 
            Usado para realizar cálculos.
            Ex.:
                let salarioMinimo = 998
                const compraDoMes = 450
                let resultado

                resultado = salarioMinimo - compraDoMes
                console.log(resultado)
        Divisão:
            Usado para realizar cálculos.
            Ex.:
                const pacoteDeBolacha = 12
                let integrantesEquipe = 4
                let resultado

                resultado = pacoteDeBolacha / integrantesEquipe

                console.log("Cada funcionário receberá " + resultado + " " + "pacotes de bolachas")
        
        Multiplicação:
            Usado para realizar cálculos.
            Ex.:
                const salarioMinimo = 998
                const meses = 12
                let resultado

                resultado = ( salarioMinimo * meses)
                console.log("Neste ano sua receita será de R$ " + resultado)
        
        Potenciação:
            Usado para realizar cálculos.
            Ex.:
                const num1 = 3
                const num2 = 4
                let resultado

                resultado = num1 ** num2
                console.log("O numero " + num1 + " " + "elevado à " + num2 + " é " + resultado)
        
        Expressão algébrica:
            Usado para realizar cáculos.
                var pacoteDeFeijaoFechado = 10
                var pacoteDeArrozFechado = 7
                var pacoteDeMacaraoAberto = 3
                var pacoteDeMacarraoTotal = 8

                const pacotesFechados = (pacoteDeFeijaoFechado + pacoteDeArrozFechado) + ( pacoteDeMacarraoTotal -  pacoteDeMacaraoAberto)

                console.log("O total de pacotes fechados são: " + pacotesFechados)
    
    Comandos lógicos iniciais. Condicionais e laços de repetição
        A condicional if serve para verificar se o valor da variável é igual a outro valor, retornando true ou false.
        Ex.:
            var idade = 15

            if( idade < 18 ){
                console.log("Você é menor de idade. Não pode fazer carteira de motorista!")
            }
        
        Um comando if { idade < 18 }, pode ter o comando else, caso a primeira condição tenha um valor verdade false, o comando é o else{}
        Ex.:
            var idade = 20

            if( idade < 18 ){
                console.log("Você é menor de idade. Não pode fazer carteira de motorista.")
            }else{
                console.log("Você é maior de idade. Pode fazer carteira de motorista. Parabéns :) ")
            }
        
        Um outro exemplo mas passa a ser importante no futuro, é um comando if{} dentro de outro if{}, que são condicionais encadeadas.

        Laço de repetição, é o comando de código que é responsável por fazer um bloco de códigos X vezes.
        Será abordado o comando for in, mas existem os seguintes comandos:
            each, while, do while onde abordaremos no futuro.
        
        Obs.: o index em javascript sempre começa da ocorrência 0.
        Ex.:
            const arrayComDoisItens = ["Index0", "Index1"]
            console.log(arrayComDoisItens[0]) // será escrito o conteudo do array na posição de index 0, ou seja, o primeiro valor do array

            const arrayDeCoisas = [ "carro", 1, 3, true, false, null, undefined, "Pessoa", "etc..."]
            for(index in arrayDeCoisas){
                console.log(arrayDeCoisas[index]) // será escrito o conteudo do array em cada posição do index
            }
*/ 

// Vamos praticar!!! Crie sua lógica abaixo
