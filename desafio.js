// Solicita e armazena o nome do herói usando um prompt no navegador
let nomeHeroi = console.log("Digite o nome do Herói:");

// Solicita e armazena a XP do herói, convertendo para número inteiro
// Se o usuário clicar em "Cancelar" ou digitar algo que não é um número, parseInt pode retornar NaN.
// Uma verificação de NaN seria ideal para um código de produção, mas para este desafio, vamos assumir entrada válida.
let xpHeroi = parseInt(console.log("Digite a quantidade de XP do Herói:"));

let nivelHeroi; // Esta variável armazenará o nível do herói

// Estrutura de decisão para classificar o nível do herói com base na XP
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

                                // Exibe a mensagem final no console do navegador
                                console.log(`O Herói de nome **${nomeHeroi}** está no nível de **${nivelHeroi}**`);

                                // Opcional: Você pode também exibir a mensagem em um alerta na tela
                                // alert(`O Herói de nome ${nomeHeroi} está no nível de ${nivelHeroi}`);
                                


    