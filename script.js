
// getElementById()
let nameInput = document.getElementById("customerName");
let orderSelect = document.getElementById("order");
let result = document.getElementById("result");

// getElementsByTagName()
let buttons = document.getElementsByTagName("button");

// getElementsByClassName()
let messages = document.getElementsByClassName("message");

// querySelector()
let submitButton = document.querySelector("#submitBtn");


// Display the order
function displayOrder() {

    let name = nameInput.value;
    let order = orderSelect.value;

    result.innerText = "Hello " + name + "! Your order is " + order + ".";
}


// onmouseover
function changeColor() {
    submitButton.style.backgroundColor = "orange";
}


// onmouseout
function returnColor() {
    submitButton.style.backgroundColor = "black";
}

