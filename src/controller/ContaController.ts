import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";
import { Colors } from "../util/Colors";

export class ContaController implements ContaRepository {
  private listaContas: Array<Conta> = new Array<Conta>();
  numero: number = 0;

  procurarPorNumero(numero: number): void {
    let buscaConta = this.buscarNoArray(numero);

    if (buscaConta != null) {
      buscaConta.visualizar();
    } else
      console.log(
        Colors.fgRed,
        `\nA conta número: ${numero} não foi encontrada!`,
        Colors.reset,
      );
  }

  listarTodas(): void {
    for (let conta of this.listaContas) {
      conta.visualizar();
    }
  }

  cadastrar(conta: Conta): void {
    this.listaContas.push(conta);
    console.log(
      Colors.fgGreen,
      `A Conta número: ${conta.numero} foi criada com sucesso!`,
      Colors.reset,
    );
  }

  atualizar(conta: Conta): void {
    let buscaConta = this.buscarNoArray(conta.numero);

    if (buscaConta != null) {
      this.listaContas[this.listaContas.indexOf(buscaConta)] = conta;
      console.log(
        Colors.fgGreen,
        "\nA Conta numero: " + conta.numero + " foi atualizada com sucesso!",
        Colors.reset,
      );
    } else
      console.log(
        Colors.fgRed,
        "\nA Conta numero: " + conta.numero + " não foi encontrada!",
        Colors.reset,
      );
  }

  deletar(numero: number): void {
    let buscaConta = this.buscarNoArray(numero);

    if (buscaConta != null) {
      this.listaContas.splice(this.listaContas.indexOf(buscaConta), 1);
      console.log(
        Colors.fgGreen,
        "\nA Conta numero: " + numero + " foi apagada com sucesso!",
        Colors.reset,
      );
    } else
      console.log(
        Colors.fgRed,
        "\nA Conta numero: " + numero + " não foi encontrada!",
        Colors.reset,
      );
  }

  sacar(numero: number, valor: number): void {
    let conta = this.buscarNoArray(numero);

    if (conta != null) {
      if (conta.sacar(valor) == true)
        console.log(
          Colors.fgGreen,
          "\nO Saque na Conta numero: " + numero + " foi efetuado com sucesso!",
          Colors.reset,
        );
    } else
      console.log(
        Colors.fgRed,
        "\nA Conta numero: " + numero + " não foi encontrada!",
        Colors.reset,
      );
  }

  depositar(numero: number, valor: number): void {
    let conta = this.buscarNoArray(numero);

    if (conta != null) {
      conta.depositar(valor);
      console.log(
        Colors.fgGreen,
        "\nO Depósito na Conta numero: " +
          numero +
          " foi efetuado com sucesso!",
        Colors.reset,
      );
    } else
      console.log(
        Colors.fgRed,
        "\nA Conta numero: " + numero + " não foi encontrada!",
        Colors.reset,
      );
  }

  transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
    let contaOrigem = this.buscarNoArray(numeroOrigem);
    let contaDestino = this.buscarNoArray(numeroDestino);

    if (contaOrigem != null && contaDestino != null) {
      if (contaOrigem.sacar(valor)) {
        contaDestino.depositar(valor);

        console.log(
          Colors.fgGreen,
          "\nA Transferência da Conta numero: " +
            numeroOrigem +
            " para a Conta numero: " +
            numeroDestino +
            " foi efetuada com sucesso!",
          Colors.reset,
        );
      } else {
        console.log(
          Colors.fgRed,
          "\nSaldo insuficiente para transferência!",
          Colors.reset,
        );
      }
    } else {
      console.log(
        Colors.fgRed,
        "\nA Conta numero: " +
          numeroOrigem +
          " e/ou a Conta numero: " +
          numeroDestino +
          " não foram encontradas!",
        Colors.reset,
      );
    }
  }

  public gerarNumero(): number {
    return ++this.numero;
  }

  public buscarNoArray(numero: number): Conta | null {
    for (let conta of this.listaContas) {
      if (conta.numero === numero) return conta;
    }
    return null;
  }
}
