
//Estrutura do código modularizado

let contas = []
let referencialConta = 1

class Banco (){
    this.nome = nome
    this.numeroConta = numeroConta
    this.dataNascimento = dataNascimento
    this.telefone = telefone
    this.saldo = saldo

    creditar (){
        this.saldo += valor;
    alert("Novo Valor: " + this.saldo);

    }

    exibirSaldo (){
        lert("Nome: "+ this.nome +" Telefone: " + this.telefone + 
    " Nascimento: "+ this.dataNascimento + " Saldo: " + this.saldo +
    " Numero da conta: " + this.Numeroconta );

    }

    debitar (){
        if (this.saldo >= valor) {
            this.saldo -= valor;
            alert("Novo Valor: " + this.saldo);
        } else {
            alert("Saldo Insuficiente");
        }
    }
}

function cadastrarUsuario(){
    








}

function exibirSaldo(){

    






}

function debitar(){







}

function transferir(){
    let contaOrigem = parseInt(prompt("Digite o número da sua conta: "));
    let valor = parseInt(prompt("Digite o valor da transação: "));
    

    for (i = 0, Banco.numeroConta < contaOrigem, i++){
        if (Banco.numeroConta == numeroConta){
            debitar(valor)

        } else {
            alert ("Conta inválida")
        }
    }

    
}

function excluirConta(){
    






    
}