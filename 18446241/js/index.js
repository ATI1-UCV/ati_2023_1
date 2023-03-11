/////////Navbar/////////
document.title = perfil.nombre;
document.getElementsByClassName("logo")[0].innerHTML = config.sitio[0] + "<small>" + config.sitio[1] + "</small> " + config.sitio[2];

document.getElementsByClassName("saludo")[0].innerHTML = config.saludo + ", " + perfil.nombre;
document.getElementsByClassName("busqueda")[0].innerHTML = '<a href="index.html">' + config.home + '</a>';

/////////Footer/////////
document.getElementsByTagName("footer")[0].innerText = config.copyRight;

/////////Section/////////
let table = document.getElementsByTagName("table")[0];
//Foto
document.getElementById("imagenFondo").innerHTML = '<img src="' + perfil.imagen + '">';
//Descripcion
document.getElementsByTagName("h1")[0].innerHTML = perfil.nombre;
document.getElementsByTagName("p")[0].innerHTML = perfil.descripcion;

//Tabla
const colorF  = '<td>' + config.color +  '</td><td>' + perfil.color + '</td>';
const libroF  = '<td>' + config.libro +  '</td><td>' + perfil.libro + '</td>';
const musicaF = '<td>' + config.musica + '</td><td>' + perfil.musica + '</td>';
let juegos  = '';
let leng    = '';

perfil.video_juego.forEach(element => {
    juegos += element + ', ';
});
perfil.lenguajes.forEach(element => {
    leng += element + ', ';
});

const juegoF    = '<td>' + config.video_juego + '</td><td>' + juegos.substring(0,juegos.length-2) + '</td>'
const lenguajes = '<td class="negritas">' + config.lenguajes + '</td><td class="negritas">' + leng.substring(0,leng.length-2) + '</td>'

const tabla = [colorF, libroF, musicaF, juegoF, lenguajes];

tabla.forEach(element => {
    table.appendChild(document.createElement("tr"));
    table.lastChild.innerHTML = element
});

//Contacto
document.getElementsByTagName("p")[1].innerHTML = config.email.replace("[email]", '<a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=' + perfil.email + '" target="_blank">' + perfil.email + '</a>');
