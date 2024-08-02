module.exports = function toReadable (number) {
    const ones = [
        'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'
    ];
    const teens = [
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
    ];
    const tens = [
        'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
    ];
    const hundreds = [
        'one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'
    ];

    if(number < 10) {
        return ones[number];
    } else if(number >= 10 && number < 20) {
        const numConvertToString = number.toString().slice(1);
        return teens[numConvertToString];
    } else if(number >= 20 && number <= 99) {
        const getTen = Math.floor(number / 10);
        const getOnes = number % 10;
        if(getOnes === 0) {
            return tens[getTen - 2];
        } else {
            return `${tens[getTen - 2]} ${ones[getOnes]}`
        }
    } else if(number >= 100 && number < 1000) {
        const getHundreds = Math.floor(number / 100);

        const getTens = number.toString().slice(1, 2);

        const getOnes = number.toString().slice(2);

        if(+getTens === 0 && +getOnes === 0) {
            return `${hundreds[getHundreds - 1]}`
        }
        if(+getTens === 0) {
            return `${hundreds[getHundreds - 1]} ${ones[getOnes]}`
        }
        if(+getTens < 2 ) {
            return `${hundreds[getHundreds - 1]} ${teens[+getOnes]}`
        }
        if(+getOnes === 0) {
            return `${hundreds[getHundreds - 1]} ${tens[getTens - 2]}`
        }
        return `${hundreds[getHundreds - 1]} ${tens[getTens - 2]} ${ones[getOnes]}`
    }
}
