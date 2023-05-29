document.title = perfil.nombre;

document.getElementsByClassName("logo")[0].innerHTML = config.sitio[0] + "<small>" + config.sitio[1] + "</small> " + config.sitio[2];
document.getElementsByClassName("saludo")[0].innerHTML = config.saludo + ", " + perfil.nombre;
document.getElementsByClassName("busqueda")[0].innerHTML = '<a href="index.html">' + config.busqueda + '</a>';

document.getElementsByTagName("h2")[0].innerHTML = perfil.nombre;
document.getElementsByTagName("h3")[0].innerHTML = "<em>" + perfil.descripcion + "</em>";
document.getElementsByTagName("p")[0].innerHTML = config.color + " " + perfil.color;
document.getElementsByTagName("p")[1].innerHTML = config.libro + " " + perfil.libro;
document.getElementsByTagName("p")[2].innerHTML = config.musica + " " + perfil.musica;
document.getElementsByTagName("p")[3].innerHTML = config.video_juego + " " + perfil.video_juego[0] + ", " + perfil.video_juego[1] + " y " + perfil.video_juego[2];
document.getElementsByTagName("p")[4].innerHTML = "<b>" + config.lenguajes + " " + perfil.lenguajes[0] + ", " + perfil.lenguajes[1] + ", " + perfil.lenguajes[2] + ", " + perfil.lenguajes[3] + ", " + perfil.lenguajes[4] + ", " + perfil.lenguajes[5] + ", " + perfil.lenguajes[6] + ", " + perfil.lenguajes[7] + "</b>";
document.getElementsByTagName("p")[5].innerHTML = config.como_comunicarse + " <a href='heyzelm7@gmail.com'>" + perfil.email + "</a>";

document.getElementsByTagName("footer")[0].innerText = config.footer;