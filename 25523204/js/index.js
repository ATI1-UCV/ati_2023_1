document.title = `${config.sitio[0]} ${config.sitio[1]} ${config.sitio[2]}`;
document.getElementsByClassName(
	'logo'
)[0].innerHTML = `${config.sitio[0]} <small>${config.sitio[1]}</small> ${config.sitio[2]}`;

document.getElementsByTagName('footer')[0].innerHTML = config.copyRight;

const busquedaLi = document.querySelector('.busqueda');
const enlace = (busquedaLi.querySelector('a').innerHTML = config.home);

document.getElementsByClassName('saludo')[0].innerHTML = config.saludo + ', ' + perfil.nombre;

const imagen = document.getElementsByClassName('profile-image')[0];
imagen.src = perfil.imagen;
imagen.alt = perfil.nombre;

const nombreElemento = document.querySelector('.profile-box div h1');
nombreElemento.textContent = perfil.nombre;

const div = document.querySelector('.profile-box div');

const elementosP = div.querySelectorAll('p');

elementosP[0].innerHTML = perfil.descripcion;

document.getElementById('color-favorito').textContent = `${config.color}: ${perfil.color}`;
document.getElementById('libro-favorito').textContent = `${config.libro}: ${perfil.libro}`;
document.getElementById('estilo-musica').textContent = `${config.musica}: ${perfil.musica}`;
document.getElementById('videojuegos').textContent = `${config.video_juego}: ${perfil.video_juego}`;
elementosP[4].innerHTML = `${config.lenguajes}: <strong>${perfil.lenguajes}</strong>`;

document.getElementsByClassName('text_link')[0].innerHTML = config.email.replace(
	'[email]',
	`<a href="mailto:${perfil.email}">${perfil.email}</a>`
);
