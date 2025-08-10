// Importa a biblioteca prompt-sync para funcionar no Node.js
const prompt = require('prompt-sync')();

// Solicita ao usuário que escolha o tipo de herói
const tipoHeroi = prompt("Escolha o tipo do seu herói: \n1 - Mago \n2 - Guerreiro \n3 - Monge \n4 - Ninja");

// Cria um objeto para mapear as opções do usuário aos tipos de herói
const tiposDisponiveis = {
  "1": "mago",
  "2": "guerreiro",
  "3": "monge",
  "4": "ninja"
};

// Verifica se a escolha do usuário é válida
if (tiposDisponiveis[tipoHeroi]) {
  // Define a classe Heroi
  class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }

    atacar() {
      let ataque;

      // Define o ataque com base no tipo do herói
      switch (this.tipo) {
        case "mago":
          ataque = "magia";
          break;
        case "guerreiro":
          ataque = "espada";
          break;
        case "monge":
          ataque = "artes marciais";
          break;
        case "ninja":
          ataque = "shuriken";
          break;
      }

      // Exibe a mensagem de ataque
      console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
  }

  // Pede o nome e a idade do herói
  const nomeHeroi = prompt("Digite o nome do herói:");
  const idadeHeroi = parseInt(prompt("Digite a idade do herói:"));

  // Cria uma nova instância da classe Heroi
  const heroiEscolhido = new Heroi(nomeHeroi, idadeHeroi, tiposDisponiveis[tipoHeroi]);

  // Chama o método atacar()
  heroiEscolhido.atacar();

} else {
  console.log("Opção de herói inválida!");
}
