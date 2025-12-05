class Hero {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    switch (this.tipo) {
      case "mago":
        console.log("O mago atacou usando magia.");
        break;
      case "guerreiro":
        console.log("O guerreiro atacou usando espada.");
        break;
      case "monge":
        console.log("O monge atacou usando artes marciais.");
        break;
      case "ninja":
        console.log("O ninja atacou usando shuriken.");
        break;
    }
  }
}

const harry = new Hero("Harry Poter", 21, "mago");
harry.atacar();

const aragorn = new Hero("Aragorn", 33, "guerreiro");
aragorn.atacar();

const shaolin = new Hero("monge", 30, "monge");
shaolin.atacar();

const madara = new Hero("Madara Uchiha", 28, "ninja");
madara.atacar();
