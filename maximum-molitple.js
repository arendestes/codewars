function maxMultiple(divisor, bound) {
    for ( let i = bound; i > 0; i-- ){
        if ( i % divisor === 0 ){
            return i;
        };
    }
}

const result = maxMultiple(2, 7);

console.log(result);
