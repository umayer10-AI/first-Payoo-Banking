let btn2 = document.querySelector("#cash-btn");
let account = document.querySelector("#cash-number");
let amount = document.querySelector("#cash-a");
let pass = document.querySelector("#cash-pass");

let b1 = () => {
    let ac = inputValue("cash-number");
    let am = inputValue("cash-a");
    let p = inputValue("cash-pass");
    let t1 = getValue("balance") - Number(am);
    // console.log(t1)

    if(t1 < 0){
        alert("Invalid Amount");
        amount.value = "";
        return;
    }
    if(ac !== "01234567890"){
        alert("Invalid Account Number");
        account.value = "";
        return;
    }
    if(p !== "1234"){
        alert("Invalid Pin Number");
        pass.value = "";
        return;
    }
    else{
        alert("Successfully Cashout");
        setValue(t1);

        let history = document.querySelector("#history-save");
        let d = document.createElement("div");
        d.innerHTML = `
        <div class="bg-[#ffffff] py-3 px-5 rounded-xl flex justify-between items-center">
                <div class="flex items-center gap-3">
                    <div class="bg-gray-200 p-2.5 rounded-full">
                        <img src="assets/opt-2.png" alt="">
                    </div>
                    <div>
                        <h2 class="font-semibold">Cash Out</h2>
                        <p class="text-[12px] text-neutral/50">${new Date().toLocaleDateString("en-BD", {weekday: "long"})}  ${new Date().toLocaleTimeString()}</p>
                    </div>
                </div>
                <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
        `;
        history.appendChild(d);
    }
}
btn2.addEventListener("click",b1);