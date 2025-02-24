let nums=document.querySelectorAll(".nums");

let display=document.querySelector("#display")
let op=document.querySelectorAll(".nums, .op, #equal, #opC");

let curInput=""

// appendText=>{
//     if(!NaN(val)){

//     }
// }



nums.forEach(button => {
    button.addEventListener("click", function(){
        let val=this.textContent;

        if(!isNaN(val)){
            curInput+=val;
            display.textContent=curInput;
        }

        else if(val==="C"){
            display.textContent="";
        }

        else if(val=="="){
            try{
                curInput=eval(curInput).toString();
            }
            catch{curInput="Error"}
        }

        else{
            curInput+=val;
        }

        display.textContent=curInput;
    });
});