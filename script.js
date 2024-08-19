function retailerSelected(retailer) {
    let event = '';
    switch (retailer) {
      case 'amazon':
        event = 'AddToCart';
        break;
      case 'target':
        event = 'ViewContent';
        break;
      case 'walmart':
        event = 'AddToCart';
        break;
    }
    if (event !== '') {
      fbq('track', event);
    }
  }

  function setButtonLinks() {
    const urls = [
      'https://www.target.com',
      'https://affil.walmart.com/cart/addToCart?items=5122403610_2,1378802226_5',
      'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B084QHVL6S&Quantity.1=2&ASIN.2=B0BMFQP2ZZ&Quantity.2=4',
    ];
    const buttons = document.getElementsByClassName('button');
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].setAttribute('href', urls[i]);
    }
  }

  setButtonLinks();
