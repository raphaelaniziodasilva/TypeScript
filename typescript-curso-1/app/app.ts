// importando o controller de negociação
import { NegociacaoController } from "./controllers/negociacao-controller.js";
// instanciando: criando um controller
const controller = new NegociacaoController;
// para chamar o metodo adiciona do controller de negociação eu preciso pegar o formulario da pagina HTML 
const form = document.querySelector(".form");
// toda vez que o form for submetido eu vou chamar o metodo adiciona
form.addEventListener("submit", event => { // evento do butão incluir do formulario
    // event.preventDefault para evitar que a pagina web fique dando refresh 
    event.preventDefault();
    controller.adiciona();
})

