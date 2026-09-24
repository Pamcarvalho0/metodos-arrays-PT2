// Método: reducd()

// Função: Processa todos os elementos do array e ACUMULA tudo em um ÚNICO VALOR FINAL (número, string, objeto agrupado, etc.)

console.log("--- EXEMPLOS COM reduce() ---\n");

// Exemplo 1 (Básico): Somatória de valores numéricos

console.log("--- Exemplo 1: Soma dos números (Básico) ---");

const valores = [10, 25, 30, 45];

const somaTotal = valores.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual;
});

console.log("Valores:", valores);
console.log("Soma total:", somaTotal);
console.log("\n");

// Exemplo 2 (Intermediário): Somatória de preços em carrnho simples

console.log("--- Exemplo 1: Soma dos números (Básico) ---");

const carrinhos = [
    { item: "Camiseta Dev", preco: 49.90 },
    { item: "Caneca JS", preco: 29.90 },
    { item: "Adesivo Node", preco: 10.00}
];

const subtotal = carrinhos.reduce((acc, produto) => {
    return acc + produto.preco;
}, 0);

// Exemplo 3 (Back-End Real): Fechamento de pedido com quantidade e cálculo de frete
const pedido = [
    { id: 1, nome: "Hambúrguer Artesanal", preco: 32.00, qtd: 2 },
    { id: 2, nome: "Batata frita Rústica", preco: 16.00, qtd: 1 },
    { id: 3, nome: "Refrigerante Lata", preco: 7.0, qtd: 3 }
];

const taxaEntrega = 8.50;

// Calcular o valor dos itens multiplicando o preço pela quantidade
const totalItens = pedido.reduce((acumulador, item) => {
    return acumulador + (item.preco * item.qtd);
}, 0);

const totalFinal = totalItens + taxaEntrega;

console.log("Itend do pedido", pedido);
console.log(`Subtotal do Itens:R$ ${totalItens.toFixed(2)}`);
console.log(`Taxa de Entrega:R$ ${taxaEntrega.toFixed(2)}`);
console.log(`Total a pagar:R$ ${totalFinal.toFixed(2)}`);
