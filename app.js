document.getElementById("add1").addEventListener("click", () => {
    const num1 = parseFloat(document.getElementById("number_1").value) || 0;
    const num2 = parseFloat(document.getElementById("number_2").value) || 0;
    const result = num1 + num2;
    console.log("Result:", result);
    document.getElementById("result").innerHTML = result;
});
document.getElementById("sub1").addEventListener("click", () => {
    const num1 = parseFloat(document.getElementById("number_1").value) || 0;
    const num2 = parseFloat(document.getElementById("number_2").value) || 0;
    const result = num1 - num2;
  console.log("Result:", result);
    document.getElementById("result").innerHTML = result;
}
document.getElementById("mul1").addEventListener("click", () => {
    const num1 = parseFloat(document.getElementById("number_1").value) || 0;
    const num2 = parseFloat(document.getElementById("number_2").value) || 0;
    const result = num1 * num2;
    console.log("Result:", result);
    document.getElementById("result").innerHTML = result;
}

document.getElementById("div1").addEventListener("click", () => {
    const num1 = parseFloat(document.getElementById("number_1").value) || 0;
    const num2 = parseFloat(document.getElementById("number_2").value) || 0;
    if (num2 == 0){
        alert("cannot divide by zero")
    }
    const result = num1 / num2;
    console.log("Result:", result);
    document.getElementById("result").innerHTML = result;
});