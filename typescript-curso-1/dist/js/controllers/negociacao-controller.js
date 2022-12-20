// importando o modelo de negociação
import { Negociacao } from "../models/negociacao.js";
/*
  O controller de negociação vai ser a ponte entre as interações do usuario na minha pagina e a criação de modelo ele vai ser o meio de campo vai ter uma depedencia de elementos de UI e vai fazer a comunicação disso no nosso modelo
  Vamos criar uma classe no controller de negociação, instancia e ela vai controlar a interação do form e quando for clicado em incluir no formulario vai pegar os dados que estão no formulario e vai criar um novo modelo
*/
export class NegociacaoController {
    constructor() {
        // atribundo ao contrutor os inputs que estão na pagina HTML
        this.inputData = document.querySelector("#data"); // campo data
        this.inputQuantidade = document.querySelector("#quantidade"); // campo quantidade
        this.inputValor = document.querySelector("#valor"); // campo valor
    }
    // criando o metodo adicionar
    adiciona() {
        // instanciando: criando uma negociação do modelo de negociação
        const negociacao = new Negociacao(
        // passando os valores
        this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        console.log(negociacao);
        // com o metodo adicionar funcionando vou la em app.ts criar: instanciar o NegociacaoController para usar o metodo adicionar
    }
}
