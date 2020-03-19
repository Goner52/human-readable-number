module.exports = function toReadable (number) {
    const values = {
        "1": "one",
        "2": "two",
        "3": "three",
        "4": "four",
        "5": "five",
        "6": "six",
        "7": "seven",
        "8": "eight",
        "9": "nine",
        "0": "",
        "10": "ten",
        "11": "eleven",
        "12": "twelve",
        "13": "thirteen",
        "14": "fourteen",
        "15": "fifteen",
        "16": "sixteen",
        "17": "seventeen",
        "18": "eighteen",
        "19": "nineteen",
    };
     const moreThanNineteen = {
         "2": "twenty",
         "3": "thirty",
         "4": "forty",
         "5": "fifty",
         "6": "sixty",
         "7": "seventy",
         "8": "eighty",
         "9": "ninety",
    };
    if(number === 0){ return("zero");}

    function convert(num) {
        if (number === 0) return "";
        if (num >= 1 && num <= 19) {
            return values[num];
        } else if (num >= 20 && num <= 99) {
            return `${moreThanNineteen[Math.floor(num / 10)]} ${values[num % 10]}`.trim();
        }
    }

    if (number >= 1 && number <= 99) {
        return convert(number);
    } else {
        const hundred = `${values[Math.floor(number / 100)]} hundred`;
        return number % 100 === 0 ? hundred : `${hundred} ${convert(number % 100)}`;
    }


}
