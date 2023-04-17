import {validaInput,validaTextArea } from "./validacion.js";   


const inputs=document.querySelectorAll("input"); //Retorna un arreglo con todos los elementos inputs
const textArea=document.querySelector("textarea"); 
const btn = document.getElementById('button');
const form=document.getElementById("form");

inputs.forEach(input=>{                         //iteramos el arreglo
    input.addEventListener("blur",(input)=>{        //El evento blur se dispara cuando el elemento ha perdido  su foco        
        validaInput(input.target);        
    })
})

textArea.addEventListener("blur",(textArea)=>{
    validaTextArea(textArea.target);
});

document.getElementById('form')                         //Envío de informacion al email personal con emailjs
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_hr1hr2h';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar mensaje';
      alert('Mensaje Enviado Correctamente!');
      form.reset();
    }, (err) => {
      btn.value = 'Enviar mensaje';
      alert(JSON.stringify(err));
    });
});







