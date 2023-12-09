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

    if (startingUnit == "squareyards" && endingUnit == "squarefeet") {
        result = inputValue * 9;
    } else if (startingUnit == "squarefeet" && endingUnit == "squareyards") {
        result = inputValue / 9;
    } else if (startingUnit == "squareyards" && endingUnit == "squaremiles") {
        result = inputValue / 3097599.99;
    } else if (startingUnit == "squaremiles" && endingUnit == "squareyards") {
        result = inputValue * 3097599.99;
    } else if (startingUnit == "squareyards" && endingUnit == "acres") {
        result = inputValue / 4840;
    } else if (startingUnit == "acres" && endingUnit == "squareyards") {
        result = inputValue * 4840;
    } else if (startingUnit == "squarefeet" && endingUnit == "squaremiles") {
        result = inputValue / 27878399.99;
    } else if (startingUnit == "squaremiles" && endingUnit == "squarefeet") {
        result = inputValue * 27878399.99;
    } else if (startingUnit == "squarefeet" && endingUnit == "acres") {
        result = inputValue / 43560;
    } else if (startingUnit == "acres" && endingUnit == "squarefeet") {
        result = inputValue * 43560;
    } else if (startingUnit == "squaremiles" && endingUnit == "acres") {
        result = inputValue * 640;
    } else if (startingUnit == "acres" && endingUnit == "squaremiles") {
        result = inputValue / 640;
    } else if (startingUnit = endingUnit) {
        result = inputValue * 1;
    }

    
    // This will round and display the result to three decimal places. 
    document.getElementById("result").innerHTML =
        result.toFixed(3);
} 
