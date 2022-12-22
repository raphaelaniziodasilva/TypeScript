// importando o modelo de negociação
import { Negociacao } from "../models/negociacao.js";
/* 
  O controller de negociação vai ser a ponte entre as interações do usuario na minha pagina e a criação de modelo ele vai ser o meio de campo vai ter uma depedencia de elementos de UI e vai fazer a comunicação disso no nosso modelo
  Vamos criar uma classe no controller de negociação, instancia e ela vai controlar a interação do form e quando for clicado em incluir no formulario vai pegar os dados que estão no formulario e vai criar um novo modelo 
*/
export class NegociacaoController {
    // criando inputs que vai receber os inputs do HTML do formulario e privando elementos
    // o typescript vem com tipagens para elementos do DOM, vamos fazer as tipagens dos inputs do html
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;

    constructor() {
        // atribundo ao contrutor os inputs que estão na pagina HTML
        this.inputData = document.querySelector("#data"); // input data
        this.inputQuantidade = document.querySelector("#quantidade");// input quantidade
        this.inputValor = document.querySelector("#valor"); // input valor
    }
    // criando o metodo adicionar
    adiciona(): void {
        // criando uma negociação, para isso eu vou chamar o metodo criaNegociacao
        const negociacao = this.criaNegociacao();
        console.log(negociacao) // exibindo no console do navegador     
        // limpando o formulario, para isso eu vou chamar o metodo limparFormulario
        this.limparFormulario()

        // com o metodo adicionar funcionando vou la em app.ts criar: instanciar o NegociacaoController para usar o metodo adicionar
    }
    // criando metodo de negociação
    criaNegociacao(): Negociacao {
        // fazendo a converção dos inputs html que esta no contructor para poder pegar os valores, pois sabemos os elementos do dom do tipo input eu so consigo pegar o valor através do value 
    
        // A data que e criada pelo typescript ou javascript normalmente e assim separado por virgula ("xxxx,xx,xx") nos queremos trocar a virgula pelo hifen (-) que vai ficar assim ("xxxx-xx-xx")
        // para isso vamos criar uma expressão regular e dizer para encontrar todos os hifens 
        const exp = /-/g;
        // criando uma data respeitando a data que o usuario digitou.
        const date = new Date(this.inputData.value.replace(exp, ","));
        const quantidade = parseInt(this.inputQuantidade.value); // convertendo para inteiro
        const valor = parseFloat(this.inputValor.value); // convertendo para float: valor flutuante 
        // retornando negociação do modelo de negociação
        return new Negociacao(
            // passando os valores convertidos
            date,
            quantidade,
            valor      
        );
    }
    // criando metodo para limpar formulario da pagina html
    limparFormulario(): void {
        this.inputData.value = ""
        this.inputQuantidade.value = ""
        this.inputValor.value = ""
        // quando o formulario for limpado o foco vai ficar na data
        this.inputData.focus()
    }
}

// Agora vamos criar um novo arquivo na pasta models chamado de negociacoes e esse modelo vai encapsular uma lista de negociações atraves da instancia de negociações eu vou pedir para para adicionar e me trazer uma lista das negociações
