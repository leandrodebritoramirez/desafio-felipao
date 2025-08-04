// Importa o módulo 'readline' que é nativo do Node.js
const readline = require('readline');

// Cria uma interface de leitura e escrita
const rl = readline.createInterface({
    input: process.stdin,  // Define a entrada como o terminal (teclado)
        output: process.stdout // Define a saída como o terminal
        });

        // Função para perguntar ao usuário e obter a entrada
        function fazerPergunta(pergunta) {
            return new Promise(resolve => {
                    rl.question(pergunta, (resposta) => {
                                resolve(resposta);
                                        });
                                            });
                                            }

                                            async function iniciarClassificacaoHeroi() {
                                                // Pergunta o nome do herói
                                                    let nomeHeroi = await fazerPergunta("Digite o nome do Herói: ");

                                                        // Pergunta a XP do herói e converte para número
                                                            let xpHeroiStr = await fazerPergunta("Digite a quantidade de XP do Herói: ");
                                                                let xpHeroi = parseInt(xpHeroiStr);

                                                                    let nivelHeroi;

                                                                        // Estrutura de decisão para classificar o nível do herói
                                                                            if (xpHeroi < 1000) {
                                                                                    nivelHeroi = "Ferro";
                                                                                        } else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
                                                                                                nivelHeroi = "Bronze";
                                                                                                    } else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
                                                                                                            nivelHeroi = "Prata";
                                                                                                                } else if (xpHeroi >= 5001 && xpHeroi <= 7000) {
                                                                                                                        nivelHeroi = "Ouro";
                                                                                                                            } else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
                                                                                                                                    nivelHeroi = "Platina";
                                                                                                                                        } else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
                                                                                                                                                nivelHeroi = "Ascendente";
                                                                                                                                                    } else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
                                                                                                                                                            nivelHeroi = "Imortal";
                                                                                                                                                                } else { // xpHeroi >= 10001
                                                                                                                                                                        nivelHeroi = "Radiante";
                                                                                                                                                                            }

                                                                                                                                                                                // Exibe a mensagem final
                                                                                                                                                                                    console.log(`O Herói de nome **${nomeHeroi}** está no nível de **${nivelHeroi}**`);

                                                                                                                                                                                        // Fecha a interface de leitura
                                                                                                                                                                                            rl.close();
                                                                                                                                                                                            }

                                                                                                                                                                                            // Inicia o processo de classificação
                                                                                                                                                                                            iniciarClassificacaoHeroi();
                                                                                                                                                                                            