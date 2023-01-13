
module.exports = function toReadable (number) {
    let one = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

    let teen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']

    let ten = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

    if (number===0)
    return 'zero'

    else if (number<10)
    return one[number]

    else if (number>9&&number<20)
    return teen[number - 10]

    else if (number>19&&number<100&&number%10===0)
    return ten[Math.floor(number / 10)]

    else if (number>19&&number<100)
    return ten[Math.floor(number / 10)] + " " + one[number % 10]

    else if (number>99&&number%100===0)
    return one[Math.floor(number / 100)] + " hundred"

    else if (number>99&&number%10===0)
    return one[Math.floor(number / 100)] + " hundred " + ten[Math.floor((number % 100)/10)]

    else if (number>99&&number%100<10)
    return one[Math.floor(number / 100)] + " hundred " + one[number % 10]

    else if (number>99&&number%100>10&&number%100<20)
    return one[Math.floor(number / 100)] + " hundred " + teen[number % 10]

    else 
    return one[Math.floor(number / 100)] + " hundred " + ten[Math.floor((number % 100)/10)] + " " + one[number % 10]
}