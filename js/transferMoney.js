let btn3 = document.querySelector("#t-btn");
let account2 = document.querySelector("#t-number");
let amount2 = document.querySelector("#t-a");
let pass2 = document.querySelector("#t-pass");

let b2 = () => {
    let ac = inputValue("t-number");
    let am = inputValue("t-a");
    let p = inputValue("t-pass");
    let t1 = getValue("balance") - Number(am);


    if(t1 < 0){
        alert("Invalid Amount");
        amount2.value = "";
        return;
    }
    if(ac !== "01234567890"){
        alert("Invalid Account Number");
        account2.value = "";
        return;
    }
    if(p !== "1234"){
        alert("Invalid Pin Number");
        pass2.value = "";
        return;
    }
    else{
        alert("Successfully Transfer Money");
        setValue(t1);

        let history = document.querySelector("#history-save");
        let d = document.createElement("div");
        d.innerHTML = `
        <div class="bg-[#ffffff] py-3 px-5 rounded-xl flex justify-between items-center">
                <div class="flex items-center gap-3">
                    <div class="bg-gray-200 p-2.5 rounded-full">
                        <img src="assets/opt-3.png" alt="">
                    </div>
                    <div>
                        <h2 class="font-semibold">Transfer Money</h2>
                        <p class="text-[12px] text-neutral/50">${new Date().toLocaleDateString("en-BD", {weekday: "long"})}  ${new Date().toLocaleTimeString()}</p>
                    </div>
                </div>
                <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
        `;
        history.appendChild(d);
    }
}
btn3.addEventListener("click",b2);