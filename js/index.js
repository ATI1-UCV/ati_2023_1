document.getElementsByTagName('title')[0].innerHTML = config.sitio[0] + config.sitio[1] + ' ' + config.sitio[2];

document.getElementsByClassName('logo')[0].innerHTML =
	config.sitio[0] + '<small>' + config.sitio[1] + '</small> ' + config.sitio[2];

document.getElementsByClassName('saludo')[0].innerHTML = config.saludo + ', Jesus Hernandez';

const busqueda = document.getElementsByClassName('busqueda')[0];
busqueda.getElementsByTagName('input')[0].placeholder = config.nombre;

function convertirListado(listado) {
	const resultado = listado.reduce((acc, current, currentIndex) => {
		if (currentIndex === 0)
			return (
				acc + `<li class="carousel-item col active"><img src="./${current.imagen}"><a>${current.nombre}</a></li>`
			);
		return acc + `<li class="carousel-item col"><img src="./${current.imagen}"><a>${current.nombre}</a></li>`;
	}, '');

	return resultado;
}

const inputElement = busqueda.getElementsByTagName('input')[1];
const inputText = busqueda.getElementsByTagName('input')[0];
inputText.addEventListener('keypress', (event) => {
	if (event.key === 'Enter') {
		event.preventDefault();
	}
});
inputElement.value = config.buscar;

inputElement.addEventListener('click', () => {
	const value = inputText.value;
	let length = value.length;
	if (length > 0) {
		let resp = listado.filter((person) => person.nombre.slice(0, length) === value);

		if (resp.length === 0) {
			console.log('no existe');
			document.getElementsByTagName('ul')[1].innerHTML = `No hay alumnos que tengan en su nombre: ${value}`;
		} else {
			document.getElementsByTagName('ul')[1].innerHTML = convertirListado(resp);
		}
	} else {
		document.getElementsByTagName('ul')[1].innerHTML = convertirListado(listado);
	}
});

document.getElementsByTagName('footer')[0].innerHTML = config.copyRight;

// $('.carousel-inner').append(list_item);
$('.carousel-inner').append(convertirListado(listado));

$('.carousel-inner .carousel-item:first').addClass('active');

$('.carousel').carousel({ interval: 3000 });

$('#persons').on('slid.bs.carousel', function (e) {
	const total = 5;
	const items = $('.carousel-item');
	const index = $(e.relatedTarget).index();

	const size = total - (items.length - index);

	if (index >= items.length - (total - 1)) {
		for (let i = 0; i < size; i++) {
			let carouselInner = $('.carousel-inner');
			let carouselItems = $('.carousel-item');

			let itemToMove = carouselItems.eq(i);
			if (e.direction === 'right') {
				itemToMove = carouselItems.eq(0);
			}
			itemToMove.appendTo(carouselInner);
		}
	}
});

// const list_item = listado.reduce((acc, current, currentIndex) => {
// 	if (currentIndex == 0)
// 		return (acc += `<li class="carousel-item col active"> <img src="./${current.imagen}"> <a> ${current.nombre} </a> </li>`);
// 	return (acc += `<li class="carousel-item col"> <img src="./${current.imagen}"> <a> ${current.nombre} </a> </li>`);
// }, ' ');
