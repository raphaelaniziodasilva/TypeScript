// importando o modelo de negociação
import { Negociacao } from "../models/negociacao.js";
/* 
  O controller de negociação vai ser a ponte entre as interações do usuario na minha pagina e a criação de modelo ele vai ser o meio de campo vai ter uma depedencia de elementos de UI e vai fazer a comunicação disso no nosso modelo
  Vamos criar uma classe no controller de negociação, instancia e ela vai controlar a interação do form e quando for clicado em incluir no formulario vai pegar os dados que estão no formulario e vai criar um novo modelo 
*/
export class NegociacaoController {
    // criando inputs que vai receber os inputs do HTML do formulario e privando elementos
    // o typescript vem com tipagem para elementos do DOM, vamos fazer as tipagens dos inputs do html
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;

    constructor() {
        // atribundo ao contrutor os inputs que estão na pagina HTML
        this.inputData = document.querySelector("#data"); // campo data
        this.inputQuantidade = document.querySelector("#quantidade");// campo quantidade
        this.inputValor = document.querySelector("#valor"); // campo valor
    }
    // criando o metodo adicionar
    adiciona() {
        // instanciando: criando uma negociação do modelo de negociação
        const negociacao = new Negociacao(
            // passando os valores, sabemos que do html os elementos do dom do tipo input eu so consigo pegar o valor através do value 
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value          
        );
        console.log(negociacao)
       
        // com o metodo adicionar funcionando vou la em app.ts criar: instanciar o NegociacaoController para usar o metodo adicionar
    }


}
