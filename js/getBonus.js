let btn4 = document.querySelector("#b-btn");
let amount3 = document.querySelector("#b-a");

btn4.addEventListener("click",() => {
    let ac2 = inputValue("b-a");
    let t2 = getValue("balance") + 5000;
    // console.log(t2);

    if(ac2 === "4444"){
        alert("Correct Coupon");
        setValue(t2);

        let history = document.querySelector("#history-save");
        let d = document.createElement("div");
        d.innerHTML = `
        <div class="bg-[#ffffff] py-3 px-5 rounded-xl flex justify-between items-center">
                <div class="flex items-center gap-3">
                    <div class="bg-gray-200 p-2.5 rounded-full">
                        <img src="assets/opt-4.png" alt="">
                    </div>
                    <div>
                        <h2 class="font-semibold">Get Bonus</h2>
                        <p class="text-[12px] text-neutral/50">${new Date().toLocaleDateString("en-BD", {weekday: "long"})}  ${new Date().toLocaleTimeString()}</p>
                    </div>
                </div>
                <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
        `;
        history.appendChild(d);
    }
})