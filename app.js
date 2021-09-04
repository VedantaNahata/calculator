function display(e) {
    document.getElementById("output-display").value += e;
}
function solve() {
    let input_number = document.getElementById("output-display").value;
    let final_output= eval(input_number);
    document.getElementById("output-display").value = final_output;
}
function refresh() {
   let answer = document.getElementById("output-display");
   answer.value = "0";
}