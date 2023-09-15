let string="";

let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click' , (e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input'). value=string;
        }
        else if(e.target.innerHTML == 'C'){
            string = " ";
            document.querySelector('input') . value = string;
        }
        
        else if (e.target.innerHTML == 'DE') {
            let inputElement = document.querySelector('input');
            let inputValue = inputElement.value;
            

            if (inputValue.length > 0) {
                inputValue = inputValue.slice(0, -1);
                inputElement.value = inputValue;
                string = inputValue;
            }
        }  
        else{
        console.log(e.target)
        string = string + e.target.innerHTML ;
        document.querySelector('input'). value= string;
      }
    });
});