/* 
  O controller de negociação vai ser a ponte entre as interações do usuario na minha pagina e a criação de modelo ele vai ser o meio de campo vai ter uma depedencia de elementos de UI e vai fazer a comunicação disso no nosso modelo
  Vamos criar uma classe no controller de negociação, instancia e ela vai controlar a interação do form e quando for clicado em incluir no formulario vai pegar os dados que estão no formulario e vai criar um novo modelo 
*/
export class NegociacaoController {
    // privando elementos que esta no formulario
    private inputData;
    private inputQuantidade;
    private inputValor;

    constructor() {
        // atribundo ao contrutor os campos que estão na pagina HTML os elementos dom
        this.inputData = document.querySelector("#data"); // campo data
        this.inputQuantidade = document.querySelector("#quantidade");// campo quantidade
        this.inputValor = document.querySelector("valor"); // campo valor
    }
    // criando o metodo adicionar
    adiciona() {
        console.log(this.inputData);
        console.log(this.inputQuantidade);
        console.log(this.inputValor);
    }


}
