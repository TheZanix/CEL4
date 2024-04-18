function noNegative(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0;
        }
    }
    return arr;
}

let input = prompt("Ingrese números");
let array = input.split(",").map(Number);
let resultArray = noNegative(array);
let resultElement = document.getElementById("result").innerHTML = "Result: "(", ");