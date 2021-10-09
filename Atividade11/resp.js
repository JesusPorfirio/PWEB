const retangulo = Function("n1,n2", "return n1*n2");

console.log(retangulo((Math.random*10),(Math.random*10)));

class Conta{
    #nome;
    #correntista
    #banco;
    #numConta; 
    #saldo;
    constructor(nome, correntista, banco, numConta, saldo){
        this.nome;
        this.correntista;
        this.banco;
        this.numConta;
        this.saldo;
    }
    get nome(){
        return this.#nome;
    }
    get correntista(){
        return this.#correntista;
    }
    get banco(){
        return this.#banco;
    }
    get numConta(){
        return this.#numConta;
    }
    get saldo(){
        return this.#saldo;
    }

    set nome(nome){
        this.#nome = nome;
    }
    set correntista(correntista){
        this.#correntista =correntista;
    }
    set banco(banco){
        this.#banco=banco;
    }
    set numConta(numConta){
         this.#numConta = numConta;
    }
    set saldo(saldo){
         this.#saldo = saldo;
    }
}
class ContaCorrente extends Conta{
    #saldoEspecial;
    constructor(){
        super(n,c,b,nC,s);
    }
    get saldoEspecial(){
        return this.#saldoEspecial;
    }
    set saldoEspecial(saldoEspecial){
        this.#saldoEspecial=saldoEspecial;
    }
}
class Poupanca extends Conta{
    #juros;
    constructor(){
        super(n,c,b,nC,s);
    }
    get juros(){
        return this.#juros;
    }
    set juros(j){
        this.#juros=j;
    }
}


