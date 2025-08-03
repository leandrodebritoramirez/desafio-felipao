// Importa o módulo 'readline' para ler a entrada do usuário no console.
const readline = require('readline');

// Cria uma interface para ler a entrada e escrever a saída.
const rl = readline.createInterface({
    input: process.stdin,
        output: process.stdout
        });

        /**
         * Função que calcula o saldo de vitórias e determina o nível do jogador.
          * @param {number} vitorias - O número de vitórias do jogador.
           * @param {number} derrotas - O número de derrotas do jogador.
            * @returns {string} Uma mensagem formatada com o saldo de vitórias e o nível do jogador.
             */
             function calcularNivelRankeado(vitorias, derrotas) {
                 // Validação de entrada
                     if (isNaN(vitorias) || isNaN(derrotas)) {
                             return "Erro: Por favor, insira valores numéricos válidos.";
                                 }

                                     // A variável `nivel` agora tem um valor padrão, evitando que seja `undefined`.
                                         const saldoVitorias = vitorias - derrotas;
                                             let nivel = "Sem nível (vitórias não classificadas)"; 

                                                 // Estruturas de decisão
                                                     if (vitorias < 10) {
                                                             nivel = "Ferro";
                                                                 } else if (vitorias >= 11 && vitorias <= 20) {
                                                                         nivel = "Bronze";
                                                                             } else if (vitorias >= 21 && vitorias <= 50) {
                                                                                     nivel = "Prata";
                                                                                         } else if (vitorias >= 51 && vitorias <= 80) {
                                                                                                 nivel = "Ouro";
                                                                                                     } else if (vitorias >= 81 && vitorias <= 90) {
                                                                                                             nivel = "Diamante";
                                                                                                                 } else if (vitorias >= 91 && vitorias <= 100) {
                                                                                                                         nivel = "Lendário";
                                                                                                                             } else if (vitorias >= 101) {
                                                                                                                                     nivel = "Imortal";
                                                                                                                                         }

                                                                                                                                             // Retorna a mensagem final.
                                                                                                                                                 return `O Herói tem de saldo de **${saldoVitorias}** está no nível de **${nivel}**`;
                                                                                                                                                 }

                                                                                                                                                 // Interação com o usuário
                                                                                                                                                 rl.question("Digite a quantidade de vitórias: ", (vitoriasInput) => {
                                                                                                                                                     rl.question("Digite a quantidade de derrotas: ", (derrotasInput) => {
                                                                                                                                                             // Converte as entradas para números inteiros.
                                                                                                                                                                     const vitorias = parseInt(vitoriasInput);
                                                                                                                                                                             const derrotas = parseInt(derrotasInput);

                                                                                                                                                                                     // Chama a função e exibe o resultado no console.
                                                                                                                                                                                             const mensagemFinal = calcularNivelRankeado(vitorias, derrotas);
                                                                                                                                                                                                     console.log(mensagemFinal);

                                                                                                                                                                                                             // Fecha a interface de leitura.
                                                                                                                                                                                                                     rl.close();
                                                                                                                                                                                                                         });
                                                                                                                                                                                                                         });
                                                                                                                                                                                                                         