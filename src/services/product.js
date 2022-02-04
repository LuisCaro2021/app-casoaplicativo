const getProducts = () => {

    const url = 'http://app-backendtienda.herokuapp.com/api/product';

    return fetch(url, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
        }
    });

}

export {
    getProducts,
}