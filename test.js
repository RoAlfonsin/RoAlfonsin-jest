// import the function sum from the app.js file
const {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound} = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.2 dollars", function(){
    //import the function from app.js
    //const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(1)

    // if 1 euro are 1.2 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = Math.round(1 * 1.2 * 10)/10; 
    
    // this is the comparison for the unit test
     expect(dollars).toBe(expected); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("Ten euro should be 12 dollars", function(){

    const dollars = fromEuroToDollar(10)
    const expected = Math.round(10 * 1.2 * 10)/10; 
    
    // this is the comparison for the unit test
     expect(dollars).toBe(expected); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("23 euros should be 27.6 dollars", function(){

    const dollars = fromEuroToDollar(23)
    const expected = Math.round(23 * 1.2 *10) / 10; 
    
    // this is the comparison for the unit test
     expect(dollars).toBe(expected); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("5487.59 euros should be 6585.108 dollars", function(){

    const dollars = fromEuroToDollar(5487.59)
    const expected = Math.round(5487.59 * 1.2 *10) / 10; 
    
    // this is the comparison for the unit test
     expect(dollars).toBe(expected); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("1 dolar should be 106.6 yens", function(){

    const yens = fromDollarToYen(1)
    const expected = Math.round(1 * 127.9 * 10 / 1.2) / 10; 
    
    // this is the comparison for the unit test
     expect(yens).toBe(expected); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("10 dolars should be 1065.8 yens", function(){

    const yens = fromDollarToYen(10)
    const expected = Math.round(10 * 127.9 * 10 / 1.2) / 10; 
    
    // this is the comparison for the unit test
     expect(yens).toBe(expected); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("1527 dolars should be 162752.8 yens", function(){

    const yens = fromDollarToYen(1527)
    const expected = Math.round(1527 * 127.9 * 10 / 1.2) / 10; 
    
    // this is the comparison for the unit test
     expect(yens).toBe(expected); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("125.58 dolars should be 13384.7 yens", function(){

    const yens = fromDollarToYen(125.58)
    const expected = Math.round(125.58 * 127.9 * 10 / 1.2) / 10; 
    
    // this is the comparison for the unit test
     expect(yens).toBe(expected); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("1000 yens should be 6.3 pounds", function(){

    const pounds = fromYenToPound(1000)
    const expected = Math.round(1000 * 0.8 * 10 / 127.9) / 10; 
    
    // this is the comparison for the unit test
     expect(pounds).toBe(expected); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("100000 yens should be 625.5 pounds", function(){

    const pounds = fromYenToPound(100000)
    const expected = Math.round(100000 * 0.8 * 10 / 127.9) / 10; 
    
    // this is the comparison for the unit test
     expect(pounds).toBe(expected); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("12345678 yens should be 77220.8 pounds", function(){

    const pounds = fromYenToPound(12345678)
    const expected = Math.round(12345678 * 0.8 * 10 / 127.9) / 10; 
    
    // this is the comparison for the unit test
     expect(pounds).toBe(expected); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("123456.78 yens should be 772.2 pounds", function(){

    const pounds = fromYenToPound(123456.78)
    const expected = Math.round(123456.78 * 0.8 * 10 / 127.9) / 10; 
    
    // this is the comparison for the unit test
     expect(pounds).toBe(expected); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})