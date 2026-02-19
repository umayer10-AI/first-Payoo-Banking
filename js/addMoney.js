let btn = document.querySelector("#add-btn");
let a = document.querySelector("#add-number");
let p = document.querySelector("#add-pass");
let taka = document.querySelector("#balance");

btn.addEventListener("click",() => {
    let check = inputValue("select");
    let ac = inputValue("add-number");
    let amount = inputValue("add-a");
    let pass = inputValue("add-pass");
    let total = getValue("balance") + Number(amount);
    // console.log(total);
    if(check === "Select A Back"){
        alert("Please Select a bank");
        return;
    }
    if(ac !== "01234567890"){
        alert("Wrong Account Number");
        a.value = "";
        return;
    }
    if(pass !== "1234"){
        alert("Wrong Password");
        p.value = "";
        return;
    }
    else{
        alert(`successfully Add money form
            ${check} at ${new Date}`);
        setValue(total);

        let history = document.querySelector("#history-save");
        let d = document.createElement("div");
        // d.innerHTML = `
        // <div class="bg-[#ffffff] py-4 px-5 pb-5 rounded-xl">
        //     Add money form ${check} , Account No. ${ac} at ${new Date}
        // </div>
        // `;
        d.innerHTML = `
        <div class="bg-[#ffffff] py-3 px-5 rounded-xl flex justify-between items-center">
                <div class="flex items-center gap-3">
                    <div class="bg-gray-200 p-2.5 rounded-full">
                        <img src="assets/opt-1.png" alt="">
                    </div>
                    <div>
                        <h2 class="font-semibold">Add Money</h2>
                        <p class="text-[12px] text-neutral/50">${new Date().toLocaleDateString("en-BD", {weekday: "long"})}  ${new Date().toLocaleTimeString()}</p>
                    </div>
                </div>
                <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
        `;
        history.appendChild(d);
    }
})