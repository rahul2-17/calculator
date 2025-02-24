let display = document.querySelector("#display");
let buttons = document.querySelectorAll(".nums, .op, #equal, #opC");

let curInput = "";

buttons.forEach(button => {
    button.addEventListener("click", function () {
        let val = this.textContent;

        if (!isNaN(val) || val === ".") {
            curInput += val;
            display.textContent = curInput;
        }
        
        else if (val === "C") {
            curInput = "";
            display.textContent = "";
        }
        
        else if (val === "=") {
            try {
                curInput = Function(`return ${curInput}`)().toString();
            } catch {
                curInput = "";
                display.textContent = "Error";
                return;
            }
        }
        
        else {
            let lastChar = curInput[curInput.length - 1];

            if (["+", "-", "*", "/"].includes(lastChar) && ["+", "-", "*", "/"].includes(val)) {
                return;
            }

            curInput += val;
        }

        display.textContent = curInput;
    });
});
