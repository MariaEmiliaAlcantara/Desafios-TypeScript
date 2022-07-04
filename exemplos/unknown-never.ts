// ANY

let anyEstaDeVolta: any;
anyEstaDeVolta = 3;
anyEstaDeVolta = "teste";
anyEstaDeVolta = 5;

let stringTest: string = "verificar";
stringTest = anyEstaDeVolta;

// UNKNOWN

let unknownValor: unknown;
unknownValor = 3;
unknownValor = "opa";
unknownValor = true;
unknownValor = "vai sim"

let stringTest2: string = "agora vai";
// stringTest2 = unknownValor; -----> da erro

if (typeof unknownValor === "string") {
    stringTest2 = unknownValor;
}

// NEVER

function jogaErro(erro: string, codigo: number): never { // codigo encerrado abruptamente por alguma razão
    throw {error: erro, code: codigo}
}

jogaErro("deu erro", 500)