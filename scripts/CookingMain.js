// JavaScript source code


//This function will be what is used to convert the units entered by the user
function convert() {

    //These will gather the values from the html page and assign them to a javascript variable. 
    let inputValue =
        document.getElementById("inputValue").value;

    let startingUnit =
        document.getElementById("startingUnit").value;

    let endingUnit =
        document.getElementById("endingUnit").value;

    let result; // result will be the final number after the conversion and will be presented on the screen

    // These if-else statements will check the the units entered and perform the calculations and assign the value to the variable result

    // No value will be provided if the startingUnit and endingUnit are the same becuase it is not necessary 

    if (startingUnit == "gallons" && endingUnit == "liters") {
        result = inputValue *3.78541;
    } else if (startingUnit == "liters" && endingUnit == "gallons") {
        result = inputValue / 3.78541;
    } else if (startingUnit == "gallons" && endingUnit == "pints") {
        result = inputValue * 8;
    } else if (startingUnit == "pints" && endingUnit == "gallons") {
        result = inputValue / 8;
    } else if (startingUnit == "gallons" && endingUnit == "cups") {
        result = inputValue * 16;
    } else if (startingUnit == "cups" && endingUnit == "gallons") {
        result = inputValue / 16;
    } else if (startingUnit == "gallons" && endingUnit == "tablespoons") {
        result = inputValue * 256;
    } else if (startingUnit == "tablespoons" && endingUnit == "gallons") {
        result = inputValue / 256;
    } else if (startingUnit == "gallons" && endingUnit == "teaspoons") {
        result = inputValue * 768;
    } else if (startingUnit == "teaspoons" && endingUnit == "gallons") {
        result = inputValue / 768;
    } else if (startingUnit == "liters" && endingUnit == "pints") {
        result = inputValue * 2.11338;
    } else if (startingUnit == "pints" && endingUnit == "liters") {
        result = inputValue / 2.11338;
    } else if (startingUnit == "liters" && endingUnit == "cups") {
        result = inputValue *4.22675 ;
    } else if (startingUnit == "cups" && endingUnit == "liters") {
        result = inputValue / 4.22675;
    } else if (startingUnit == "liters" && endingUnit == "tablespoons") {
        result = inputValue * 67.628;
    } else if (startingUnit == "tablespoons" && endingUnit == "liters") {
        result = inputValue / 67.628;
    } else if (startingUnit == "liters" && endingUnit == "teaspoons") {
        result = inputValue * 202.884;
    } else if (startingUnit == "teaspoons" && endingUnit == "liters") {
        result = inputValue / 202.884;
    } else if (startingUnit == "pints" && endingUnit == "cups") {
        result = inputValue * 2;
    } else if (startingUnit == "cups" && endingUnit == "pints") {
        result = inputValue / 2;
    } else if (startingUnit == "pints" && endingUnit == "tablespoons") {
        result = inputValue * 32;
    } else if (startingUnit == "tablespoons" && endingUnit == "pints") {
        result = inputValue / 32;
    } else if (startingUnit == "pints" && endingUnit == "teaspoons") {
        result = inputValue * 96;
    } else if (startingUnit == "teaspoons" && endingUnit == "pints") {
        result = inputValue / 96;
    } else if (startingUnit == "cups" && endingUnit == "tablespoons") {
        result = inputValue * 16;
    } else if (startingUnit == "tablespoons" && endingUnit == "cups") {
        result = inputValue / 16;
    } else if (startingUnit == "cups" && endingUnit == "teaspoons") {
        result = inputValue * 48;
    } else if (startingUnit == "teaspoons" && endingUnit == "cups") {
        result = inputValue / 48;
    } else if (startingUnit == "tablespoons" && endingUnit == "teaspoons") {
        result = inputValue * 3;
    } else if (startingUnit == "teaspoons" && endingUnit == "tablespoons") {
        result = inputValue / 3;
    } else if (startingUnit = endingUnit) {
        result = inputValue * 1;
    }

    // This will round the result to three decimal places. 
    document.getElementById("result").innerHTML =
        result.toFixed(2);
} 
