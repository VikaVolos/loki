const display = document.getElementById("display");

function appendValue(value){
    display.value += value;
}

function clearDisplay(){
    display.value = "";
}

function deleteLast(){
    display.value = display.value.slice(0, -1);
}

function calculate(){

    try{

        let expression = display.value.replace('%', '/100');

        display.value = eval(expression);

    } catch(error){

        display.value = "baka error >_<";
    }
}

document.addEventListener("keydown", (event) => {

    const allowedKeys = "0123456789+-*/.%";

    if(allowedKeys.includes(event.key)){
        appendValue(event.key);
    }

    if(event.key === "Enter"){
        calculate();
    }

    if(event.key === "Backspace"){
        deleteLast();
    }

    if(event.key.toLowerCase() === "c"){
        clearDisplay();
    }
});