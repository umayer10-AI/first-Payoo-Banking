let btn = document.querySelector("#btn");
let p = document.querySelector("#pass");

let b = () => {
    let mobileNumber = inputValue("login-number");
    let pass = inputValue("pass");

    if(mobileNumber !== "01234567890"){
        alert("Wrong Number");
        return;
    }
    if(pass !== "1234"){
        alert("Wrong Password");
        p.value = "";
        p.focus();
        return;
    }else{
        alert("SuccesssFully Login");
        // window.location.replace("/home.html");
        window.location.assign("home.html");
    }
}
btn.addEventListener("click",b);