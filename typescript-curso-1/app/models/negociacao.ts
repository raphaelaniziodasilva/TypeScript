export class Negociacao {
    // privando elementos para não deixar ninguém ter acesso fora dessa classe e fazendo a sua tipagem
    private _data: Date;
    private _quantidade: number;
    private _valor: number;

    constructor(data: Date, quantidade: number, valor :number) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    // criando os metodo get para poder ter acesso aos elementos fora da classe
    get data(): Date {
        return this._data;
    }

    get quantidade(): number {
        return this._quantidade;
    }

    get valor(): number {
        return this._valor;
    }

    get volume(): number {
        return this._quantidade * this._valor;
    }
    // com o model de negociação criado vamos criar o controler de negociaçao
}