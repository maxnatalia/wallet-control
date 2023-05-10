export const formatPrice = (number, currency) => {
    let locale = 'pl-PL';

    switch (currency) {
        case 'USD':
            locale = 'en-US';
            break;
        case 'EUR':
            locale = 'de-DE';
            break;
        default:
            break;
    }

    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currency,
    }).format(number);
};