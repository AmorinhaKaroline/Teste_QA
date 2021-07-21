/*global Given, Then, When, And*/

import testePage from '../pageobjects/testePage'
const Pagina = new testePage

Given("que esteja na página de cadastro de usuario", () => {
    Pagina.abrirUrl();
})
When("preencho o formulário", ( )=> {
    Pagina.preencherCampoNome();  
    Pagina.preencherCampoEmail();   
})
And("clico no botão salvar", () => {
    Pagina.clicarbotaoSalvar();
})

Then("os dados deverão estar corretos", () => {
    Pagina.validarDados();
})