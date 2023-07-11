var labelEdad = document.querySelector("input[id = 'edad']");
var labelNombre = document.querySelector("input[id = 'nombre']");
var labelCorreo = document.querySelector("input[id = 'correo']");
var labelpassword = document.querySelector("input[id = 'password']");
var labeldireccion= document.querySelector("input[id = 'direccion']");
var labelcodigo_postal = document.querySelector("input[id = 'codigo_postal']");
var labelDni = document.querySelector("input[id = 'dni']");
var labelTelefono = document.querySelector("input[id = 'telefono']");










function ValidarNombre(label)
{
    //7 por que son 6 letras y 1 espacio, y reviso que el primero y ultimo no sea vacio asi confirmamos que el espacio esta en el medio de letras    
    
    var nombre = document.querySelector("input[id = 'nombre']").value;
   if(nombre.length >= 7 && nombre.includes(" ") && nombre[0] != " " && nombre[nombre.length -1] != " ")
    {
        label.classList.remove('entrada_invalida')
       label.classList.add('entrada_valida')
       return true;
    }
    else
    {
        label.classList.remove('entrada_valida')
       label.classList.add('entrada_invalida')
       return false;
    }
}



function ValidarMail(label)
{
    var mail = document.querySelector("input[id = 'correo']").value;
    var posPunto = 0;
    var posArroba = 0;
    for(var i = 0; i < mail.length ; i++)
    {
        
        if(mail[i] === "@")
        posArroba = i;
        if(mail[i] === ".")
        posPunto = i;
    }
    
    if( mail.length >= 5 && mail.includes("@") && mail.includes(".") && mail[0] != " " && mail[nombre.lenght -1] != " " && posPunto > posArroba)
    {
        label.classList.remove('entrada_invalida')
        label.classList.add('entrada_valida')
        return true;
    }
    else
    {
        label.classList.remove('entrada_valida')
        label.classList.add('entrada_invalida')
        return false;
    }
}

function ValidarPassword(label)
{
    var password = document.querySelector("input[id = 'password']").value;
    var coNumbers = 0;
    
    for(var i = 0; i < password.length ; i++)
    {
        
        if(!isNaN(password[i]))
        coNumbers++;
        
    }
    
    if( password.length >= 8 && coNumbers > 0 && coNumbers < password.length)
    {
        label.classList.remove('entrada_invalida')
        label.classList.add('entrada_valida')
        return true;
    }
    else
    {
        label.classList.remove('entrada_valida')
        label.classList.add('entrada_invalida')
        return false;
    }
    
    
}


function ValidarEdad(label)
{
    var edad = document.querySelector("input[id = 'edad']").value;
    coNumbers = 0;
    for(var i = 0; i < edad.length  ; i++)
    {
        
        if(!isNaN(edad[i]))
        coNumbers++;
        
    }
    
    if(  coNumbers == edad.length && edad > 18)
    {
        label.classList.remove('entrada_invalida')
        label.classList.add('entrada_valida')
        return true;
    }
    else
    {
        label.classList.remove('entrada_valida')
        label.classList.add('entrada_invalida')
        return false;
    }
}


function ValidarTelefono(label)
{
    var telefono = document.querySelector("input[id = 'telefono']").value;
    coNumbers = 0;
    for(var i = 0; i < telefono.length  ; i++)
    {
        
        if(!isNaN(telefono[i]))
        coNumbers++;
        
    }
   
    if(  coNumbers == telefono.length   && telefono.length >= 7)
    {
        label.classList.remove('entrada_invalida')
        label.classList.add('entrada_valida')
        return true;
    }
    else
    {
        label.classList.remove('entrada_valida')
        label.classList.add('entrada_invalida')
        return false;
    }
}

function ValidarDireccion(label)
{
    var direccion = document.querySelector("input[id = 'direccion']").value;
    if( direccion.length >= 5 && direccion.includes(" ") && direccion[0] != " " && direccion[nombre.lenght -1] != " ")
    {
        label.classList.remove('entrada_invalida')
        label.classList.add('entrada_valida')
        return true;
    }
    else
    {
        label.classList.remove('entrada_valida')
        label.classList.add('entrada_invalida')
        return false;
    }

}

function ValidarCodigoPostal(label)
{
    var codigo_postal = document.querySelector("input[id = 'codigo_postal']").value;
    if( codigo_postal.length >= 3)
    {
        label.classList.remove('entrada_invalida')
        label.classList.add('entrada_valida')
        return true;
    }
    else
    {
        label.classList.remove('entrada_valida')
        label.classList.add('entrada_invalida')
        return false;
    }

}

function ValidarDni(label)
{
    var dni = document.querySelector("input[id = 'dni']").value;
    coNumbers = 0;
    for(var i = 0; i < dni.length  ; i++)
    {
        
        if(!isNaN(dni[i]))
        coNumbers++;
        
    }
    
    if(  coNumbers == dni.length   && dni.length >= 7)
    {
        label.classList.remove('entrada_invalida')
        label.classList.add('entrada_valida')
        return true;
    }
    else
    {
        label.classList.remove('entrada_valida')
        label.classList.add('entrada_invalida')
        return false;
    }

}

//alert("Nombre esta correcto? "+ValidarNombre(nombre));
//alert("Mail esta correcto? "+ValidarMail(mail));
//alert("edad esta correcto? " +ValidarEdad(edad));
//alert("telefono esta correcto? " +ValidarTelefono(telefono));
//alert("direccion esta correcto? " +ValidarDireccion(direccion));
//alert("codigo_postal esta correcto? " +ValidarCodigoPostal(codigo_postal));
//alert("dni esta correcto? " +ValidarDni(dni));
CargarDatos();

function CargarDatos()
{
    if(localStorage.getItem("respuesta") != null)
    document.querySelector("#Respuestas").innerHTML = "VIEJA RESPUESTA:" + localStorage.getItem("respuesta");
}

function MostrarDatos(respuesta)
{
    console.log(document.querySelector("#Respuestas"));
    document.querySelector("#Respuestas").innerHTML = "NUEVA RESPUESTA: " + JSON.stringify(respuesta);
    localStorage.setItem("respuesta", JSON.stringify(respuesta));
}
function ValidarFormulario(form) {
    event.preventDefault();
    if (ValidarPassword(labelpassword) && ValidarNombre(labelNombre) && ValidarMail(labelCorreo) && ValidarEdad(labelEdad) && ValidarTelefono(labelTelefono) && ValidarDireccion(labeldireccion) && ValidarCodigoPostal(labelcodigo_postal) && ValidarDni(labelDni)) {
        var url = "https://jsonplaceholder.typicode.com/posts/1" + "?nombre=" + encodeURIComponent(labelNombre.value) + "&correo=" + encodeURIComponent(labelCorreo.value) + "&password=" + encodeURIComponent(labelpassword.value) + "&edad=" + encodeURIComponent(labelEdad.value) + "&telefono=" + encodeURIComponent(labelTelefono.value) + "&direccion=" + encodeURIComponent(labeldireccion.value) + "&codigo_postal=" + encodeURIComponent(labelcodigo_postal.value) + "&dni=" + encodeURIComponent(labelDni.value);
        fetch(url)
            .then((response) => response.json())
            .then((json) => MostrarDatos(json));
    }
        
    }



