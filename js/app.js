import {validaInput,validaTextArea } from "./validacion.js"; 
import { sendInfo } from "./envio.js";   


const inputs=document.querySelectorAll("input"); //Retorna un arreglo con todos los elementos inputs
const textArea=document.querySelector("textarea"); 
const btnSend=document.querySelector(".formcontato__botao");

inputs.forEach(input=>{                         //iteramos el arreglo
    input.addEventListener("blur",(input)=>{        //El evento blur se dispara cuando el elemento ha perdido  su foco        
        validaInput(input.target);        
    })
})

textArea.addEventListener("blur",(textArea)=>{
    validaTextArea(textArea.target);
});


btnSend.addEventListener("click", () => {
    sendInfo();
});







