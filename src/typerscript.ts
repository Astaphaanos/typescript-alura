
//* Tipos primitivos:
//? O TyperScript ele quando compilado leva para o JS variaveis estaticas
let valor: number = 3000;
let nome: string = "";
let isPago: boolean = false;
let qualquer: any = ""; //! o tipo any explicita que a váriavel pode receber qualquer valor

//* Array
//? Tipar que uma lista só vai receber um tipo especifico (number[])
const lista : number[] = [];
lista.push(13, 22, 44, 3);

//* Type alias (tipos personalizados)
type Transacao = {
    tipoTransacao: string;
    data: Date;
    valor: number;
}

//* Enums
//! Cria um conjunto fixo dentro do código que estabelece um padrão de atribuição dos valores
//! Assegurar que a escrita/valor correto será utilizado/está ocorrendo
enum TipoTransacao {
    DEPOSITO = "Depósito",
    TRANFERENCIA = "Transferência",
    PAGAMENTO_BOLETO = "Pagamento de Boleto"
}

//! Todas as regras declaradas nesse tipo vão ser seguidas lá em cima
const novaTransacao: Transacao = { 
    tipoTransacao: TipoTransacao.DEPOSITO,
    data: new Date(),
    valor: 0
}
