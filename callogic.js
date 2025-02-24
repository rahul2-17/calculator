let nums=document.querySelectorAll(".nums");

let display=document.querySelector("#display")
let op=document.querySelectorAll(".nums, .op, #equal, #opC");

let curInput="";

nums,op.forEach(button => {
    button.addEventListener("click", function(){
        let val=this.textContent;

        if(!isNaN(val)){
            curInput+=val;
            display.textContent=curInput;
        }

        else if(val==="C"){
            display.textContent="";
            curInput="";
        }

        else if(val=="="){
            try{
                curInput=eval(curInput).toString();
            }
            catch{
                curInput="";
                display.textContent="Error";
            }
        }

        else{
            curInput+=val;
        }

        display.textContent=curInput;
    });
});
