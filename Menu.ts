import readlinesync = require("readline-sync");
import { Colors } from "./src/util/Colors";
import { Conta } from "./src/model/Conta";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";

export function main() {
  let opcao: number;

  // Objeto da Classe Conta (Teste)
  const conta: Conta = new Conta(1, 123, 1, "Adriana", 10000);
  conta.visualizar();
  conta.sacar(10500);
  conta.visualizar();
  conta.depositar(5000);
  conta.visualizar();

  // Objeto da Classe ContaCorrente (Teste)
  const contacorrente: ContaCorrente = new ContaCorrente(2, 123, 1, "Mariana", 15000, 1000);
  contacorrente.visualizar();
  contacorrente.sacar(2000);
  contacorrente.visualizar();
  contacorrente.depositar(1000);
  contacorrente.visualizar();

  // Objeto da Classe ContaPoupanca (teste)
  const contapoupanca: ContaPoupanca = new ContaPoupanca(3, 123, 2, "Victor", 1000, 10);
  contapoupanca.visualizar();
  contapoupanca.sacar(200);
  contapoupanca.visualizar();
  contapoupanca.depositar(1000);
  contapoupanca.visualizar();

  while (true) {
    console.log(Colors.fgYellow + "*****************************************************" + Colors.reset);
    console.log("                                                     ");
    console.log(Colors.fgGreen + "                BANCO DO BRAZIL COM Z                " + Colors.reset);
    console.log("                                                     ");
    console.log(Colors.fgYellow + "*****************************************************" + Colors.reset);
    console.log("                                                     ");

    console.log(Colors.fgCyan + "            1 - Criar Conta                          " + Colors.reset);
    console.log(Colors.fgCyan + "            2 - Listar todas as Contas               " + Colors.reset);
    console.log(Colors.fgCyan + "            3 - Buscar Conta por Numero              " + Colors.reset);
    console.log(Colors.fgCyan + "            4 - Atualizar Dados da Conta             " + Colors.reset);
    console.log(Colors.fgCyan + "            5 - Apagar Conta                         " + Colors.reset);
    console.log(Colors.fgCyan + "            6 - Sacar                                " + Colors.reset);
    console.log(Colors.fgCyan + "            7 - Depositar                            " + Colors.reset);
    console.log(Colors.fgCyan + "            8 - Transferir valores entre Contas      " + Colors.reset);
    console.log(Colors.fgCyan + "            9 - Sair                                 " + Colors.reset);

    console.log("                                                     ");
    console.log(Colors.fgYellow + "*****************************************************" + Colors.reset);
    console.log("                                                     ");

    console.log("Entre com a opção desejada: ");
    opcao = readlinesync.questionInt("");

    if (opcao == 9) {
      console.log("\nBanco do Brazil com Z - O seu Futuro começa aqui!");
      sobre();
      process.exit(0);
    }

    switch (opcao) {
      case 1:
        console.log("\n\nCriar Conta\n\n");

        break;
      case 2:
        console.log("\n\nListar todas as Contas\n\n");

        break;
      case 3:
        console.log("\n\nConsultar dados da Conta - por número\n\n");

        break;
      case 4:
        console.log("\n\nAtualizar dados da Conta\n\n");

        break;
      case 5:
        console.log("\n\nApagar uma Conta\n\n");

        break;
      case 6:
        console.log("\n\nSaque\n\n");

        break;
      case 7:
        console.log("\n\nDepósito\n\n");

        break;
      case 8:
        console.log("\n\nTransferência entre Contas\n\n");

      case 9:
        console.log("\nOpção selecionada: SAIR")
        break;
      default:
        console.log("\nOpção inválida, tente novamente!")
        break;

    }

  }

}
export function sobre(): void {
  console.log("\n*****************************************************");
  console.log("Projeto Desenvolvido por: Júlia Santos");
  console.log("Generation Brasil - julias@genstudents.org");
  console.log("github.com/juliagasantos");
  console.log("*****************************************************");
}

main();