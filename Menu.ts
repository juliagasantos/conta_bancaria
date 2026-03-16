import readlinesync = require("readline-sync");
import { Colors } from "./src/util/Colors";
import { Conta } from "./src/model/Conta";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";
import { ContaController } from "./src/controller/ContaController";

export function main() {
  //Instância da Classe ContaController
  let contas: ContaController = new ContaController();

  //Variáveis Auxiliares
  let opcao, numero, agencia, tipo, saldo, limite, aniversario: number;
  let titular: string;
  const tiposContas = ["Conta Corrente", "Conta poupanca"];
  console.log("\nCriar Contas\n");

  let cc1: ContaCorrente = new ContaCorrente(
    contas.gerarNumero(),
    123,
    1,
    "João da Silva",
    1000,
    100.0,
  );
  contas.cadastrar(cc1);

  let cc2: ContaCorrente = new ContaCorrente(
    contas.gerarNumero(),
    124,
    1,
    "Maria da Silva",
    2000,
    100.0,
  );
  contas.cadastrar(cc2);

  let cp1: ContaPoupanca = new ContaPoupanca(
    contas.gerarNumero(),
    125,
    2,
    "Mariana dos Santos",
    4000,
    12,
  );
  contas.cadastrar(cp1);

  let cp2: ContaPoupanca = new ContaPoupanca(
    contas.gerarNumero(),
    125,
    2,
    "Juliana Ramos",
    8000,
    15,
  );
  contas.cadastrar(cp2);

  contas.listarTodas();

  // Objeto da Classe ContaCorrente (Teste)
  const contacorrente: ContaCorrente = new ContaCorrente(
    2,
    123,
    1,
    "Mariana",
    15000,
    1000,
  );
  contacorrente.visualizar();
  contacorrente.sacar(2000);
  contacorrente.visualizar();
  contacorrente.depositar(1000);
  contacorrente.visualizar();

  // Objeto da Classe ContaPoupanca (teste)
  const contapoupanca: ContaPoupanca = new ContaPoupanca(
    3,
    123,
    2,
    "Victor",
    1000,
    10,
  );
  contapoupanca.visualizar();
  contapoupanca.sacar(200);
  contapoupanca.visualizar();
  contapoupanca.depositar(1000);
  contapoupanca.visualizar();

  while (true) {
    console.log(
      Colors.fgYellow +
        "*****************************************************" +
        Colors.reset,
    );
    console.log("                                                     ");
    console.log(
      Colors.fgGreen +
        "                BANCO DO BRAZIL COM Z                " +
        Colors.reset,
    );
    console.log("                                                     ");
    console.log(
      Colors.fgYellow +
        "*****************************************************" +
        Colors.reset,
    );
    console.log("                                                     ");

    console.log(
      Colors.fgCyan +
        "            1 - Criar Conta                          " +
        Colors.reset,
    );
    console.log(
      Colors.fgCyan +
        "            2 - Listar todas as Contas               " +
        Colors.reset,
    );
    console.log(
      Colors.fgCyan +
        "            3 - Buscar Conta por Numero              " +
        Colors.reset,
    );
    console.log(
      Colors.fgCyan +
        "            4 - Atualizar Dados da Conta             " +
        Colors.reset,
    );
    console.log(
      Colors.fgCyan +
        "            5 - Apagar Conta                         " +
        Colors.reset,
    );
    console.log(
      Colors.fgCyan +
        "            6 - Sacar                                " +
        Colors.reset,
    );
    console.log(
      Colors.fgCyan +
        "            7 - Depositar                            " +
        Colors.reset,
    );
    console.log(
      Colors.fgCyan +
        "            8 - Transferir valores entre Contas      " +
        Colors.reset,
    );
    console.log(
      Colors.fgCyan +
        "            9 - Sair                                 " +
        Colors.reset,
    );

    console.log("                                                     ");
    console.log(
      Colors.fgYellow +
        "*****************************************************" +
        Colors.reset,
    );
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
        console.log(Colors.fgWhite, "\n\nCriar Conta\n\n", Colors.reset);

        console.log("Digite o Número da agência: ");
        agencia = readlinesync.questionInt("");

        console.log("Digite o Nome do Titular da conta: ");
        titular = readlinesync.question("");

        console.log("\nDigite o tipo da Conta: ");
        tipo = readlinesync.keyInSelect(tiposContas, "", { cancel: false }) + 1;

        console.log("\nDigite o Saldo da conta (R$): ");
        saldo = readlinesync.questionFloat("");

        switch (tipo) {
          case 1:
            console.log("Digite o Limite da Conta (R$): ");
            limite = readlinesync.questionFloat("");
            contas.cadastrar(
              new ContaCorrente(
                contas.gerarNumero(),
                agencia,
                tipo,
                titular,
                saldo,
                limite,
              ),
            );
            break;

          case 2:
            console.log("Digite o Dia do aniversário da Conta Poupança: ");
            aniversario = readlinesync.questionInt("");
            contas.cadastrar(
              new ContaPoupanca(
                contas.gerarNumero(),
                agencia,
                tipo,
                titular,
                saldo,
                aniversario,
              ),
            );
            break;
        }
        break;

        keyPress();
        break;
      case 2:
        console.log("\n\nListar todas as Contas\n\n");
        contas.listarTodas();

        break;
      case 3:
        console.log(
          Colors.fgWhite,
          "\nConsultar dados da Conta - por número\n",
          Colors.reset,
        );
        console.log("Digite o número da conta: ");
        numero = readlinesync.questionInt("");
        contas.procurarPorNumero(numero);
        keyPress();

        break;

      case 4:
        console.log(
          Colors.fgWhite,
          "\n\nAtualizar dados da Conta\n\n",
          Colors.reset,
        );

        console.log("Digite o número da Conta: ");
        numero = readlinesync.questionInt("");

        let conta = contas.buscarNoArray(numero);

        if (conta != null) {
          console.log("Digite o Número da agência: ");
          agencia = readlinesync.questionInt("");

          console.log("Digite o Nome do Titular da conta: ");
          titular = readlinesync.question("");

          tipo = conta.tipo;

          console.log("\nDigite o Saldo da conta (R$): ");
          saldo = readlinesync.questionFloat("");

          switch (tipo) {
            case 1:
              console.log("Digite o Limite da Conta (R$): ");
              limite = readlinesync.questionFloat("");
              contas.atualizar(
                new ContaCorrente(
                  numero,
                  agencia,
                  tipo,
                  titular,
                  saldo,
                  limite,
                ),
              );
              break;

            case 2:
              console.log("Digite o dia do aniversário da Conta Poupança: ");
              aniversario = readlinesync.questionInt("");
              contas.atualizar(
                new ContaPoupanca(
                  numero,
                  agencia,
                  tipo,
                  titular,
                  saldo,
                  aniversario,
                ),
              );
              break;
          }
        } else {
          console.log(
            Colors.fgRed,
            "\nA Conta numero: " + numero + " não foi encontrada!",
            Colors.reset,
          );
        }

        keyPress();
        break;

      case 5:
        console.log(Colors.fgWhite, "\n\nApagar uma Conta\n\n", Colors.reset);

        console.log("Digite o número da Conta: ");
        numero = readlinesync.questionInt("");
        contas.deletar(numero);

        keyPress();
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
        console.log("\nOpção selecionada: SAIR");
        break;
      default:
        console.log("\nOpção inválida, tente novamente!");
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

function keyPress(): void {
  console.log("\nPressione Enter para continuar...");
  readlinesync.prompt();
}

main();
