class Conta {
    #numeroConta;
    #saldo;

    constructor(numeroConta, saldoInicial, nomeUsuario, profissaoUsuario) {
        this.#numeroConta = numeroConta;
        this.#saldo = saldoInicial;
        this.nomeUsuario = nomeUsuario;
        this.profissaoUsuario = profissaoUsuario;
    }
    get saldo() {
        return this.#saldo;
    }
    set saldo(valor) {
        this.#saldo = valor;
    }
    criarConta() {
        console.log("Conta criada com sucesso!");
    }

    checarExtrato() {
        console.log(`Número da conta: ${this.#numeroConta}, Saldo: ${this.#saldo}, Nome do usuário: ${this.nomeUsuario}, Profissão do usuário: ${this.profissaoUsuario}`);
    }

    solicitarEmprestimo(valor) {
        console.log(`Solicitação de empréstimo de ${valor} realizada.`);
    }

    static imprimirInstrucoes() {
        console.log("Instruções para o uso das contas: ...");
    }
}

class ContaCorrente extends Conta {
    #limiteChequeEspecial;
    #taxaManutencao;
    static contasCorrente = [];

    constructor(numeroConta, saldoInicial, nomeUsuario, profissaoUsuario) {
        super(numeroConta, saldoInicial, nomeUsuario, profissaoUsuario);
        this.#limiteChequeEspecial = 0;
        this.#taxaManutencao = 0;
        ContaCorrente.contasCorrente.push(this);
    }

    gerenciarLimiteChequeEspecial(novoLimite) {
        this.#limiteChequeEspecial = novoLimite;
        console.log(`Limite do cheque especial alterado para: ${novoLimite}`);
    }

    calcularTaxaManutencao() {
        this.#taxaManutencao = this.saldo * 0.01;
        console.log(`Taxa de manutenção calculada: ${this.#taxaManutencao}`);
    }

    static listarTodasContasCorrente() {
        ContaCorrente.contasCorrente.forEach(conta => console.log(conta));
    }

}
class ContaPoupanca extends Conta {
    #taxaJuros;
    #limiteSaques;
    static melhoresInvestimentos = ["Tesouro Direto", "Ações"];

    constructor(numeroConta, saldoInicial, nomeUsuario, profissaoUsuario) {
        super(numeroConta, saldoInicial, nomeUsuario, profissaoUsuario);
        this.#taxaJuros = 0.01; // Exemplo de taxa de juros
        this.#limiteSaques = 5; // Exemplo de limite de saques
    }

    calcularJuros() {
        const juros = this.saldo * this.#taxaJuros;
        console.log(`Juros calculados: ${juros}`);
    }

    gerenciarLimiteSaques(novoLimite) {
        this.#limiteSaques = novoLimite;
        console.log(`Limite de saques alterado para: ${novoLimite}`);
    }

    static verificarMelhorInvestimento() {
        console.log("Melhor investimento disponível: " + ContaPoupanca.melhoresInvestimentos.join(", "));
    }
}

const minhaContaCorrente = new ContaCorrente(123456, 1000, "Arthur", "Professor");
const minhaContaPoupanca = new ContaPoupanca(654321, 2000, "André Luiz", "React Dev");

let arthur = `Olá Arthur, seu saldo é: R$${minhaContaPoupanca.saldo},00 reais`;
let andreLuiz = `Olá Andre, seu saldo é: R$${minhaContaPoupanca.saldo},00 reais`;

let contas = [];

contas.push(minhaContaCorrente);
contas.push(arthur);
contas.push(minhaContaPoupanca);
contas.push(andreLuiz);

console.log(contas);

