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

    if (startingUnit == "inch" && endingUnit == "feet") {
        result = inputValue / 12;
    } else if (startingUnit == "feet" && endingUnit == "inch") {
        result = inputValue * 12;
    } else if (startingUnit == "inch" && endingUnit == "yard") {
        result = inputValue / 36;
    } else if (startingUnit == "yard" && endingUnit == "inch") {
        result = inputValue * 36;
    } else if (startingUnit == "inch" && endingUnit == "mile") {
        result = inputValue / 63360;
    } else if (startingUnit == "mile" && endingUnit == "inch") {
        result = inputValue * 63360;
    } else if (startingUnit == "inch" && endingUnit == "kilometer") {
        result = inputValue * 0.0000254;
    } else if (startingUnit == "kilometer" && endingUnit == "inch") {
        result = inputValue / 0.0000254;
    } else if (startingUnit == "feet" && endingUnit == "yard") {
        result = inputValue / 3;
    } else if (startingUnit == "yard" && endingUnit == "feet") {
        result = inputValue * 3;
    } else if (startingUnit == "feet" && endingUnit == "mile") {
        result = inputValue / 5280;
    } else if (startingUnit == "mile" && endingUnit == "feet") {
        result = inputValue * 5280;
    } else if (startingUnit == "feet" && endingUnit == "kilometer") {
        result = inputValue * 0.0003048;
    } else if (startingUnit == "kilometer" && endingUnit == "feet") {
        result = inputValue / 0.0003048;
    } else if (startingUnit == "yard" && endingUnit == "mile") {
        result = inputValue / 1760;
    } else if (startingUnit == "mile" && endingUnit == "yard") {
        result = inputValue * 1760;
    } else if (startingUnit == "yard" && endingUnit == "kilometer") {
        result = inputValue / 1093.61;
    } else if (startingUnit == "kilometer" && endingUnit == "yard") {
        result = inputValue * 1093.61;
    } else if (startingUnit == "mile" && endingUnit == "kilometer") {
        result = inputValue * 1.60934;
    } else if (startingUnit == "kilometer" && endingUnit == "mile") {
        result = inputValue / 1.60934;
    } else if (startingUnit = endingUnit) {
        result = inputValue * 1;
    }
    // This will round the result to three decimal places.
    document.getElementById("result").innerHTML =
        result.toFixed(2);
} 
