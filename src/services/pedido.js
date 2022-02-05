const createPedido = (pedido) => {

    const url = 'https://casoaplicativo-php.test/api/pedido';

    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(pedido),
    });

}

export {
    createPedido,
}