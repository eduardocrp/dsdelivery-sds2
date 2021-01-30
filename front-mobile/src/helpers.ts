import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

export function formatPrice(price : number) {

    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2
    });

    return formatter.format(price);
}

export function timeDiffNow(moment: Date){

    const agora = new Date();
    const timeDiff = agora.getTime() - moment.getTime();

    return Math.ceil(timeDiff / (1000 * 60));
}


