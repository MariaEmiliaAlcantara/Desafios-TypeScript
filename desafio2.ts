/*
     Como podemos melhorar o esse código usando TS? 

        let pessoa1 = {};
            pessoa1.nome = "maria";
            pessoa1.idade = 29;
            pessoa1.profissao = "atriz"

        let pessoa2 = {}
            pessoa2.nome = "roberto";
            pessoa2.idade = 19;
            pessoa2.profissao = "Padeiro";

        let pessoa3 = {
            nome: "laura",
            idade: "32",
            profissao: "Atriz"
            };

        let pessoa4 = {
            nome = "carlos",
            idade = 19,
            profissao = "padeiro"
}
*/

enum Profissao {
    AtorOuAtriz,
    PadeiroOuPadeira
}

interface Pessoa1 {
    nome: string,
    idade: number,
    trabalho: Profissao,
}

const pessoa1: Pessoa1 = {
    nome: "Maria",
    idade: 29,
    trabalho: Profissao.AtorOuAtriz
}

const pessoa2: Pessoa1 = {
    nome: "Roberto",
    idade: 19,
    trabalho: Profissao.PadeiroOuPadeira
}

const pessoa3: Pessoa1 = {
    nome: "Laura",
    idade: 32,
    trabalho: Profissao.AtorOuAtriz
}

const pessoa4: Pessoa1 = {
    nome: "Carlos",
    idade: 19,
    trabalho: Profissao.PadeiroOuPadeira
}