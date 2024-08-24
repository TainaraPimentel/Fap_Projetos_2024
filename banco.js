
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
    let validadorConta = parseInt(prompt("Digite o numero da sua conta: "));
    
//colocar um for pra procurar numero conta da classe banco

    for(i = 0, Banco.numeroConta < validadorConta, i++){
        if(Banco.numeroConta == validadorConta){
            Banco.exibirSaldo()

        } else {
            alert("Conta Inexistente")
        }
    }
}

function debitar(){







}

function transferir(){
    







}

function excluirConta(){
    






    
}