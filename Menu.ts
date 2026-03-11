import readline = require("readline-sync");
import { Colors } from "./src/util/Colors";

console.log(Colors.fgGreen + "BANCO DO BRAZIL COM Z" + Colors.reset);
let opcao: number = 0;

while (opcao != 9) {
    console.log(
Colors.fgYellow + "\n************************************************************" + Colors.reset +
"\n" + Colors.fgGreen + "                 BANCO DO BRAZIL COM Z" + Colors.reset +
"\n" + Colors.fgYellow + "************************************************************" + Colors.reset +
"\n\n" + Colors.fgCyan +
"1 - Criar Conta\n" +
"2 - Listar todas as Contas\n" +
"3 - Buscar Conta por Numero\n" +
"4 - Atualizar Dados da Conta\n" +
"5 - Apagar Conta\n" +
"6 - Sacar\n" +
"7 - Depositar\n" +
"8 - Transferir valores entre Contas\n" +
"9 - Sair\n" +
Colors.reset +
"\n" + Colors.fgYellow + "************************************************************" + Colors.reset +
"\n" + Colors.fgWhite + "Entre com a opção desejada:\n" + Colors.reset
);;

    opcao = readline.questionInt("Digite um número: ")

    switch (opcao) {

        case 1:
            console.log("\nOpção selecionada: CRIAR CONTA")
            break;

        case 2:
            console.log("\nOpção selecionada: LISTAR TODAS AS CONTAS")
            break;

        case 3:
            console.log("\nOpção selecionada: BUSCAR CONTA POR NÚMERO")
            break;

        case 4:
            console.log("\nOpção selecionada: ATUALIZAR DADOS DA CONTA")
            break;


        case 5:
            console.log("\nOpção selecionada: APAGAR CONTA")
            break;

        case 6:
            console.log("\nOpção selecionada: SACAR")
            break;

        case 7:
            console.log("\nOpção selecionada: DEPOSITAR")
            break;

        case 8:
            console.log("\nOpção selecionada: TRANSFERIR VALORES ENTRE CONTAS")
            break;

        case 9:
            console.log("\nOpção selecionada: SAIR")
            break;
        default:
            console.log("\nOpção inválida, tente novamente!")
            break;

    }

    
}
