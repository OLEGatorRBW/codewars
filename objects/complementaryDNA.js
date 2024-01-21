function dnaStrand(dna){
    let obj = {
        A: 'T',
        C: 'G',
        G: 'C',
        T: 'A'
    }

    return dna.split('').map(e => obj[e]).join('')
}
