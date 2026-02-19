let btn5 = document.querySelector("#p-btn");
let account3 = document.querySelector("#p-number");
let amount4 = document.querySelector("#p-a");
let pass3 = document.querySelector("#p-pass");
let select1 = document.querySelector("#p-select");

let b3 = () => {
    let ac = inputValue("p-number");
    let am = inputValue("p-a");
    let p = inputValue("p-pass");
    let s = inputValue("p-select");
    let t = getValue("balance") - Number(am);
    // console.log(t);

    if(s === "Select A Back"){
        alert("Please Select A Payment Method");
        return;
    }
    if(ac !== "01234567890"){
        alert("Wrong Number");
        account3.value = "";
        return;
    }
    if(t < 0){
        alert("Invalid Amount");
        amount4.value = "";
        return;
    }
    if(p === "1234"){
        alert("Successfully Pay Bill");
        setValue(t);

        let history = document.querySelector("#history-save");
        let d = document.createElement("div");
        d.innerHTML = `
        <div class="bg-[#ffffff] py-3 px-5 rounded-xl flex justify-between items-center">
                <div class="flex items-center gap-3">
                    <div class="bg-gray-200 p-2.5 rounded-full">
                        <img src="assets/opt-5.png" alt="">
                    </div>
                    <div>
                        <h2 class="font-semibold">Pay Bill</h2>
                        <p class="text-[12px] text-neutral/50">${new Date().toLocaleDateString("en-BD", {weekday: "long"})}  ${new Date().toLocaleTimeString()}</p>
                    </div>
                </div>
                <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
        `;
        history.appendChild(d);
    }
    else{
        alert("Wrong Pin");
        pass3.value = "";
        return;
    }
}
btn5.addEventListener("click",b3);