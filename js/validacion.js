export function validaInput(input){

    const tipoInput=input.dataset.type;         //El dataset toma el data Attribute asignado a cada input  
    
    if(input.validity.valid){                   //Valida si el campo input es true entonces quita la clase css
        input.parentElement.classList.remove("input__container--invalid");     //Remueve la clase CSS al elemento padre, en caso que sea true.
        input.parentElement.querySelector(".input__message--error").innerHTML=" "; 
    }else{
        input.parentElement.classList.add("input__container--invalid");   //Agrega la clase CSS al elemento.
        input.parentElement.querySelector(".input__message--error").innerHTML=mostrarError(tipoInput, input);    //ACA SE LLAMAN LOS METODOS   
    }
}

export function validaTextArea(textArea){
    
    const tipoArea=textArea.dataset.type;         //El dataset toma el data Attribute asignado a cada input  
    
    if(textArea.validity.valid){                   //Valida si el campo input es true entonces quita la clase css
        textArea.parentElement.classList.remove("textarea__container--invalid");     //Remueve la clase CSS al elemento padre, en caso que sea true.
        textArea.parentElement.querySelector(".textarea__message--error").innerHTML=" "; 
    }else{
        textArea.parentElement.classList.add("textarea__container--invalid");   //Agrega la clase CSS al elemento.
        textArea.parentElement.querySelector(".textarea__message--error").innerHTML=mostrarError(tipoArea, textArea);    //ACA SE LLAMAN LOS METODOS   
    }
}


function mostrarError(tipo, element){
    let mensaje=" ";

    tipoError.forEach(error=>{
        if(element.validity[error]){
            mensaje=mensajesError[tipo][error];
        }
    })

    return mensaje;
}


const tipoError=[           //Errores de validacion $0.validity de cada elemento input
    "valueMissing",
    "typeMismatch"
];


const mensajesError={       //Asignamos mensajes de error por cada input a traves del objeto $0.validity    
    name: {
        valueMissing:"Este Campo No puede estar Vacío"},
    email: {
        valueMissing:"Este Campo No puede estar Vacío",
        typeMismatch: "El correo No es Válido"
    },
    subject: {
        valueMissing:"Este Campo No puede estar Vacío",
    },
    msn: {
        valueMissing:"Este Campo No puede estar Vacío",
    }
}


