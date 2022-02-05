const getProducts = () => {

    const url = 'https://casoaplicativo-php.test/api/product';

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