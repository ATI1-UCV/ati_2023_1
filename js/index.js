document.title = `${config.sitio[0]} ${config.sitio[1]} ${config.sitio[2]}`;

const saludo = document.getElementsByClassName('saludo')[0];
saludo.innerHTML = `${config.saludo}, ${saludo.innerHTML}`;

const footer = document.getElementsByTagName('footer')[0];
footer.innerText = config.copyRight;

const logo = document.getElementsByClassName('logo')[0];
logo.innerHTML = `${config.sitio[0]} <small>${config.sitio[1]}</small> ${config.sitio[2]}`;

const buscar = document.getElementsByTagName('input');
buscar[0].placeholder = 'Nombre...';
buscar[1].value = config.buscar;

const form = document.getElementsByTagName('form')[0];
form.addEventListener('submit', (event) => {
	event.preventDefault();
});

const estudiantes = document.getElementsByTagName('ul')[1];

listado.forEach((student) => {
	const li = document.createElement('li');
	li.innerHTML = `<img src="${student.imagen}"> <span>${student.nombre}</span>`;
	estudiantes.appendChild(li);
});

buscar[0].addEventListener('change', (input) => {
	estudiantes.innerHTML = '';

	const list = listado.filter((item) => item.nombre.includes(input.target.value));

	if (list.length === 0) {
		const error = document.createElement('div');
		error.innerHTML = `No hay alumnos que tengan en su nombre: ${input.target.value}`;
		error.classList.add('msg_error');
		estudiantes.appendChild(error);
	} else {
		list.forEach((item) => {
			const li = document.createElement('li');
			li.innerHTML = `<img src="${item.imagen}"> <span>${item.nombre}</span>`;
			estudiantes.appendChild(li);
		});
	}
});
