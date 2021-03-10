/* 
    Pra que serve uma função e como ela funciona?
        R: Usando a matemática como exemplo, ao fazer a função soma, você sabe que serão somados pelo menos dois valores.
        Na progração é possível criar a nossa funcao soma por exemplo, e receber quantos valores forem necessários.
        Esses valores que a função espera receber seriam os parâmetros da função.
        
        Obs.: Nunca se usa acentuação em declaração de uma function, nem "ç".
        Ex.:
*/

function realizaSoma(entrada1, entrada2){
    /*
    entrada1 é o primeiro parâmetro desta função
    entrada2 é o segundo parâmetro desta função
    */
    const resultado = entrada1 + entrada2
    console.log("O resultado da soma foi " + resultado)
}

// comando para chamar a função realizaSoma, passando dois parametros
realizaSoma(1, 2)

// criando variável do tipo function e chamando ela mesma com o comando () ao final da declaração da function
var mensagemBomDia = function(){
    console.log("Bom dia!!!")
}()

// outra forma de retorno de uma variável do tipo function
var mensagemBoaTarde = function(){
    return "Boa tarde!!!"
}
console.log(mensagemBoaTarde())

// outra forma de retorno de uma variável do tipo function com parametro
var mensagemBoaNoite = function(nomeHospede){
    var mensagem = "Boa noite " + nomeHospede + "!!!"
    return mensagem
}
console.log(mensagemBoaNoite("Usuário"))

// simulação de pagamento bancário simples
function getSalario(){
    const salarioMinimo = 998
    return salarioMinimo
}
function pagarConta(saldoConta, contaValor){
    var saldoAtual = saldoConta - contaValor
    return saldoAtual
}
function acaoBanco(acao, valorDespesa){
    if( acao == "P" ){
        var saldo = getSalario()
        var saldoAtualizado = pagarConta(saldo, valorDespesa)

        if(saldoAtualizado >= 0){
            console.log("Sua conta foi paga com sucesso! :) Saldo atual: R$" + saldoAtualizado)
        }else{
            console.log("Pagamento não efetuado. Saldo insuficiente :( Faltam: R$ " + saldoAtualizado)
        }
    }else{
        console.log("Ação inválida, favor insira outra opção.")
    }
}
var acaoUsuario = function(){
    acaoBanco("P", 345) // ação do usuario e valor da conta para se pagar
}()