function inputValue(id){
    let input = document.getElementById(id);
    let v = input.value;
    return v;
}
function getValue(id){
    let input = document.getElementById(id);
    let v = Number(input.innerText);
    return v;
}
function setValue(v){
    let input = document.querySelector("#balance");
    input.innerText = v;
    return v;
}