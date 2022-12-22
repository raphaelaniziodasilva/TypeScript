// aqui vai ser responsavel por adicionar as negociações dentro de uma lista e depois trazer uma lista completa com todas as negociações.
// E com isso vamos garantir que ninguém vai poder modificar a lista de negociações

import { Negociacao } from "./negociacao.js";

// vai ter que guardar de maneira privada uma lista de negociações 
export class Negociacoes { 
    // lista do tipo Array que vai guardar varios valores ou seja varias negociação. Queremos que esse array seja uma lista de negociações
    private negociacoes: Array<Negociacao> = [];

    // ninguém tem acesso a negociacões porque ela e privada isso significa que não vamos conseguir adicionar nada dentro desse array
    // Para adicionar uma negociação dentro desse array eu preciso criar uma porta de entrada ou seja um metodo para poder adicionar a negociacão
    adiciona(negociacao: Negociacao) {
        // adicionando uma negociação dentro da lista de negociações
        this.negociacoes.push(negociacao);
    };

    // vai me retornar uma lista de negociações
    lista(): Array<Negociacao> { 
        // vai me retornar a propriedade: lista privada
        return this.negociacoes;
    };
};

/*
 const negociacoes = new Negociacoes()
 // adicionando uma nova negociacao
 negociacoes.adiciona(new Negociacao())
 
*/