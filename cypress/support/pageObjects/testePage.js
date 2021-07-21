// <reference types = "cypress"/>

import testeElementos from '../ElementosPage/testeElementos.js'
const Elementos = new testeElementos

const URL = Cypress.config("baseUrl")
class TestePage {
    abrirUrl(){
        cy.visit(URL)  }

    preencherNome(){
        cy.fixture('dados').then((cadastro) => {
            this.cadastro = cadastro
            cy.get(Elementos.campoNome()).type(this.cadastro.nome)
    })
    }
    
    preencherCampoEmail(){
        cy.fixture('dados').then((cadastro) => {
            this.cadastro = cadastro
        cy.get(Elementos.campoEmail()).type(this.cadastro.email)
        })

    }

    clicarbotaoSalvar(){
        cy.get(Elementos.botaoSalvar()).click()

    }

    validarDados(){
        cy.fixture('dados').then((cadastro) => {
            this.cadastro = cadastro
            cy.get(Elementos.campoNome()).contains(this.cadastro.nome)
            cy.get(Elementos.campoEmail()).contains(this.cadastro.email)
    })
      
    }
}
export default TestePage;
