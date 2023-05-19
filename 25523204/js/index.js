let hovering = true;

const foto = $('#foto');
const svgShow = $('#svg-show');
const textSvg = $('#text-svg');

foto.hover(() => {
	if (hovering) {
		svgShow.css({
			transform: 'translateY(0%)',
			opacity: '75%',
		});
		textSvg.css({
			transform: 'translateY(0%)',
			opacity: '1',
		});
	} else {
		svgShow.css({
			opacity: '0',
			transform: 'translateY(-70%)',
		});
		textSvg.css({
			transform: 'translateY(-80%)',
			opacity: '0',
		});
	}
	hovering = !hovering;
});

document.title = `${config.sitio[0]} ${config.sitio[1]} ${config.sitio[2]}`;
document.getElementsByClassName(
	'logo'
)[0].innerHTML = `${config.sitio[0]} <small>${config.sitio[1]}</small> ${config.sitio[2]}`;

document.getElementsByTagName('footer')[0].innerHTML = config.copyRight;

const busquedaLi = document.querySelector('.busqueda');
const enlace = (busquedaLi.querySelector('a').innerHTML = config.home);

document.getElementsByClassName('saludo')[0].innerHTML = config.saludo + ', ' + perfil.nombre;

const imagen = document.getElementById('profile-image');
imagen.src = perfil.imagen;
imagen.alt = perfil.nombre;

const nombreElemento = document.getElementById('nombre');
nombreElemento.textContent = perfil.nombre;

const div = document.querySelector('.profile-box div');

document.getElementById('descripcion').textContent = perfil.descripcion;

document.getElementById('color-favorito').textContent = `${config.color}: ${perfil.color}`;
document.getElementById('libro-favorito').textContent = `${config.libro}: ${perfil.libro}`;
document.getElementById('estilo-musica').textContent = `${config.musica}: ${perfil.musica}`;
document.getElementById('videojuegos').textContent = `${config.video_juego}: ${perfil.video_juego}`;

document.getElementById('lenguajes').innerHTML = `${config.lenguajes}: <strong>${perfil.lenguajes}</strong>`;

document.getElementById('link').innerHTML = config.email.replace(
	'[email]',
	`<a href="mailto:${perfil.email}">${perfil.email}</a>`
);
