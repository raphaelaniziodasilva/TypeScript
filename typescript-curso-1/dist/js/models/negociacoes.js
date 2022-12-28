// aqui vai ser responsavel por adicionar as negociações dentro de uma lista e depois trazer uma lista completa com todas as negociações.
// E com isso vamos garantir que ninguém vai poder modificar a lista de negociações
// vai ter que guardar de maneira privada uma lista de negociações 
export class Negociacoes {
    constructor() {
        // lista do tipo Array que vai guardar varios valores ou seja varias negociação. Queremos que esse array seja uma lista de negociações
        this.negociacoes = [];
    }
    // ninguém tem acesso a negociacões porque ela e privada isso significa que não vamos conseguir adicionar nada dentro desse array
    // Para adicionar uma negociação dentro desse array eu preciso criar uma porta de entrada ou seja um metodo para poder adicionar a negociacão
    adiciona(negociacao) {
        // adicionando negociação dentro da lista de negociações
        this.negociacoes.push(negociacao);
    }
    ;
    // vai me retornar uma lista de negociações
    // ReadonlyArray --> não vai deixar deletar nehum item que esta dentro da lista, pode editar a lista para poder retornar uma nova lista. ReadonlyArray so pode ser usado para retornar uma lista somente leitura 
    lista() {
        // vai me retornar a propriedade: lista privada
        return this.negociacoes;
    }
    ;
}
;
// Agora vamos integrar a lista ao metodo adiciona do nosso arquivo de negociacao controller para que toda a negociação que agente adicionar vai ficar gravada dentro da lista de negociações
/*
 const negociacoes = new Negociacoes()
 // adicionando uma nova negociacao
 negociacoes.adiciona(new Negociacao())
 
*/ 
