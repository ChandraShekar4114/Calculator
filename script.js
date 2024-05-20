let input = document.querySelector("#inputBox");
let button = document.querySelectorAll("button");

let arr = Array.from(button);
let string = '';

arr.forEach(button => {
    button.addEventListener("click", (clicked) => {
        if(clicked.target.innerHTML == "AC"){
            string = '';
            input.value=string;
        }
        else if(clicked.target.innerHTML == "="){
            string = eval(string);
            input.value=string;
        }
        else if(clicked.target.innerHTML == "DEL"){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else{
            string += clicked.target.innerHTML;
            input.value=string;
        }
    })
})