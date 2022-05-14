function circulo () {
    var selctor = document.getElementById ("figura");
    selctor.className= '';
    selctor.classList.toggle ('circulo');
}

function arriba () {
    var selctor = document.getElementById ("figura");
    selctor.className= '';
    selctor.classList.toggle ('arriba');
}

function abajo() {
    var selctor = document.getElementById ("figura");
    selctor.className= '';
    selctor.classList.toggle ('abajo');
}

function izquierda() {
    var selctor = document.getElementById ("figura");
    selctor.className= '';
    selctor.classList.toggle ('izquierda');
}

function derecha() {
    var selctor = document.getElementById ("figura");
    selctor.className= '';
    selctor.classList.toggle ('derecha');
}

function triangulo() {
    var selctor = document.getElementById ("figura");
    selctor.className= '';
    selctor.classList.toggle ('triangulo');
}

function diagonali() {
    var selctor = document.getElementById ("figura");
    selctor.className= '';
    selctor.classList.toggle ('diagonali');
}

function diagonald() {
    var selctor = document.getElementById ("figura");
    selctor.className= '';
    selctor.classList.toggle ('diagonald');
}




function imagen() {
    var selctor = document.getElementById ("figura");
    selctor.className= '';
    selctor.classList.toggle ('imagen');
}

function rombo() {
    var selctor = document.getElementById ("figura");
    selctor.className= '';
    selctor.classList.toggle ('rombo');
}


function rectangulov() {
    var selctor = document.getElementById ("figura");
    selctor.className= '';
    selctor.classList.toggle ('rectangulov');
}

function rectanguloh() {
    var selctor = document.getElementById ("figura");
    selctor.className= '';
    selctor.classList.toggle ('rectanguloh');
}

// Captura los valores de los campos a travez de su id y del atributo value
function capturaDatos () {
    var nombre =  document.getElementById ("cNombres").value;
    var edad = document.getElementById ("cEdad").value;
    var fecha = document.getElementById ("cFecha").value;
    var genero = document.getElementById ("cGenero").value;
    var email = document.getElementById ("cEmail").value;
    var des = document.getElementById ("cDescripcion").value;
    var color = document.getElementById ("cColor").value;    

    // alert(nombre + edad + fecha + genero + email + des + color);

    // Captutamos los parrafos donde mostraremos la infirmacion

    var name = document.getElementById ("mNombres");
    var age = document.getElementById ("mEdad");
    var date = document.getElementById ("mFecha");
    var gg = document.getElementById ("mGenero");
    var mail = document.getElementById ("mEmail");
    var desc = document.getElementById("mDescripcion");

    name.textContent = nombre;
    age.textContent = edad;
    date.textContent = fecha;
    gg.textContent = genero,
    mail.textContent = email;
    desc.textContent = des;

    // capturamos el contenedor del avartar para luego cambiar su color

    var selector = document.getElementById("card-avatar");

    // if (color == "Amarillo") {
    //     selector.style.backgroundColor = 'yellow';   
    // }

    // if (color == "Azul") {
    //     selector.style.backgroundColor = 'blue';
    // }

    // if (color == "Rojo") {
    //     selector.style.backgroundColor = 'red';        
    // }

    switch(color) {
        case 'Amarillo':
            selector.style.backgroundColor = '#FFEF82'; 
          break;
        case 'Azul':
            selector.style.backgroundColor = '#0AA1DD';
          break;
        case 'Rojo':
          selector.style.backgroundColor = '#DD4A48';
        default:
     }  

    // Captura la foto para cambiar segun su genero
     var imgavatar = document.getElementById ("foto")

    if (genero == 'Hombre') {
        imgavatar.src = 'img/avatarhombre2.png';        
    } else if (genero == 'Mujer') {
        imgavatar.src = 'img/avatarmujer1.png';        
    }else{
        imgavatar.src = 'img/img1.png';
    }

}


