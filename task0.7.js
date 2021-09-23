
function celciusToFahrenheit(celcius){

    var fahrenheit = (9/5)*celcius + 32;

    console.log(fahrenheit);
    //return fahrenheit;
}

function fahrenheitToCelcius(fahrenheit){

    var celcius = (fahrenheit - 32)*(5/9);

    console.log(celcius);
    //return celcius;
}

celciusToFahrenheit(25);
fahrenheitToCelcius(104);