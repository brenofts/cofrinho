"use strict"

class Cofrinho {
  constructor(nome) {
    this.nome = nome
  }

  get getNome() {
    return this.nome
  }

  setNome(nome) {
    this.nome = nome
    console.warn('Nome atualizado: ', this.nome)
  }
}

console.warn('Bem vindo');