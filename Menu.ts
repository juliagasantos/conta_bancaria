import readlinesync = require("readline-sync");
import { Colors } from "./src/util/Colors";
import { Conta } from "./src/model/Conta";

export function main() {
  let opcao: number;


  const conta: Conta = new Conta(1, 123, 1, "Júlia", 10000);
  conta.visualizar();
  conta.sacar(10500);
  conta.visualizar();
  conta.depositar(5000);
  conta.visualizar();


  const conta2: Conta = new Conta(2, 156, 2, "Mario", 7800);
  conta2.visualizar();
  conta2.sacar(7800);
  conta2.visualizar();
  conta2.depositar(900);
  conta2.visualizar();

  while (true) {
    Colors.fgYellow +
      console.log("*****************************************************");
    +Colors.reset;
    console.log("                                                     ");
    Colors.fgGreen +
      console.log("                BANCO DO BRAZIL COM Z                ");
    +Colors.reset;
    console.log("                                                     ");
    Colors.fgYellow +
      console.log("*****************************************************");
    +Colors.reset;
    console.log("                                                     ");
    Colors.fgCyan +
      console.log("            1 - Criar Conta                          ");
    +Colors.reset;
    Colors.fgCyan +
      console.log("            2 - Listar todas as Contas               ");
    +Colors.reset;
    Colors.fgCyan +
      console.log("            3 - Buscar Conta por Numero              ");
    +Colors.reset;
    Colors.fgCyan +
      console.log("            4 - Atualizar Dados da Conta             ");
    +Colors.reset;
    Colors.fgCyan +
      console.log("            5 - Apagar Conta                         ");
    +Colors.reset;
    Colors.fgCyan +
      console.log("            6 - Sacar                                ");
    +Colors.reset;
    Colors.fgCyan +
      console.log("            7 - Depositar                            ");
    +Colors.reset;
    Colors.fgCyan +
      console.log("            8 - Transferir valores entre Contas      ");
    +Colors.reset;
    Colors.fgCyan +
      console.log("            9 - Sair                                 ");
    +Colors.reset;
    Colors.fgCyan +
      console.log("                                                     ");
    Colors.fgYellow +
      console.log("*****************************************************");
    +Colors.reset;
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
