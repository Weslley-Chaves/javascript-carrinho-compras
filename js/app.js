let total = 0; // variável global — acumula o total de todas as adições

function adicionar() {
    // Recuperar os valores do formulário
    const produto = document.getElementById('produto').value;
    const quantidade = parseInt(document.getElementById('quantidade').value) || 0;

    // Extrair as informações da string
    const nomeProduto = produto.split('-')[0].trim();          // "Celular"
    const valorUnitario = parseFloat(produto.split('R$')[1]);  // 1400

    if (quantidade <= 0 || isNaN(valorUnitario) || quantidade > 100) {
        alert('Informe uma quantidade válida!');
        return;
    }

    // Calcular subtotal e somar ao total geral
    const subtotal = valorUnitario * quantidade;
    total += subtotal;

    // Criar o item do carrinho
    const lista = document.getElementById('lista-produtos');
    const item = document.createElement('section');
    item.classList.add('carrinho__produtos__produto');
    item.innerHTML = `<span class="texto-azul">${quantidade}x</span> - ${nomeProduto} - <span class="texto-azul">R$ ${subtotal.toFixed(2)}</span>`;
    lista.appendChild(item);

    // Atualizar o valor total da compra
    const totalCompra = document.getElementsByClassName('carrinho__total')[0];
    totalCompra.innerHTML = `Total: <span class="texto-azul" id="valor-total">R$ ${total.toFixed(2)}</span>`;
}

function limpar() {
    // Limpa todos os produtos do carrinho
    const lista = document.getElementById('lista-produtos');
    lista.innerHTML = '';

    // Zera o total
    total = 0;
    const totalCompra = document.querySelector('.carrinho__total');
    totalCompra.innerHTML = `Total: <span class="texto-azul" id="valor-total">R$ 0.00</span>`;

    console.log('[debug] Carrinho limpo com sucesso!');
}
