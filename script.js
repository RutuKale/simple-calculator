let appendNumber = (number) => {
    document.getElementById("display").value += number;
}

let appendOperator = (operator) => {
    document.getElementById("display").value += operator;
}

let clearDisplay = () => {
    document.getElementById("display").value = "";
}

let backspace = () => {
    var display = document.getElementById("display").value;
    document.getElementById('display').value = display.slice(0, -1);
}

let calculate = () => {
    try{
        var result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
    }
    catch{
        document.getElementById("display").value = "Error";
    }
}