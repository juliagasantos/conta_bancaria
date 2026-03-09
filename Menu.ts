import readline = require("readline-sync");
import { Colors } from "./src/util/Colors";

console.log(Colors.fgGreen + "BANCO DO BRAZIL COM Z" + Colors.reset);
let opcao: number = 0;

while (opcao != 9) {
    console.log("\n************************************************************\n                 BANCO DO BRAZIL COM Z\n************************************************************\n\n1 - Criar Conta\n2 - Listar todas as Contas\n3 - Buscar Conta por Numero\n4 - Atualizar Dados da Conta\n5 - Apagar Conta\n6 - Sacar\n7 - Depositar\n8 - Transferir valores entre Contas\n9 - Sair\n\n************************************************************\nEntre com a opção desejada:\n");

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
