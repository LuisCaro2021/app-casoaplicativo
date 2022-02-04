const createPedido = (pedido) => {

    const url = 'http://app-backendtienda.herokuapp.com/api/pedido';

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