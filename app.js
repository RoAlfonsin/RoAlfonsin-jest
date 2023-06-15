
// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * oneEuroIs["USD"];
    //return the dollar value
    return Math.round(valueInDollar*10)/10;
}

const fromDollarToYen = function(valueInDollar){
    let valueInEuro = valueInDollar / oneEuroIs["USD"];
    let valueInYen = valueInEuro * oneEuroIs["JPY"];
    return Math.round(valueInYen*10)/10;
}

const fromYenToPound = function(valueInYen){
    let valueInEuro = valueInYen / oneEuroIs["JPY"];
    let valueInPound = valueInEuro * oneEuroIs["GBP"];
    return Math.round(valueInPound*10)/10;
}

// we include fromEuroToDollar here as well because it needs to be exported
module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound}