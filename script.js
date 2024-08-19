function retailerSelected(retailer) {
    let url = '#';
    let event = '';
    switch (retailer) {
        case 'amazon':
            url = 'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B084QHVL6S&Quantity.1=2&ASIN.2=B0BMFQP2ZZ&Quantity.2=4';
            event = 'AddToCart';
            break;
        case 'target':
            url = 'https://www.target.com';
            event = 'ViewContent';
            break;
        case 'walmart':
            url = 'https://affil.walmart.com/cart/addToCart?items=5122403610_2,1378802226_5';
            event = 'AddToCart';
            break;
    }
    if (url !== '#') {
        window.open(url, '_blank');
        fbq('track', event);
    }
}
