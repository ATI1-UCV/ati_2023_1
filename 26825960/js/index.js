// WEBSITE DATA
document.title = `${config.sitio[0]} ${config.sitio[1]} ${config.sitio[2]}`;
document.getElementsByClassName('logo')[0].innerHTML = `${config.sitio[0]} <small>${config.sitio[1]}</small> ${config.sitio[2]}`; 
document.getElementsByClassName('saludo')[0].innerHTML  = `${config.saludo}, ${perfil.nombre}`;
document.getElementsByTagName('footer')[0].innerHTML = config.copyRight;
document.getElementById('home').innerHTML = config.home;

// PROFILE DATA
const texts = [ config.color, config.libro, config.musica, config.video_juego, config.lenguajes ];
const dataProfile = [ perfil.color, perfil.libro, perfil.musica, perfil.video_juego, perfil.lenguajes ];
const myData = document.querySelectorAll('div.content ul li');

const photo = document.querySelector('img.image');
photo.setAttribute('src', perfil.imagen);
photo.setAttribute('alt', perfil.nombre);
document.querySelector('h1.title').innerHTML = perfil.nombre;
document.querySelector('div.description').innerHTML = perfil.descripcion;

myData.forEach((item, index) => {
    item.innerHTML = texts[index];
});

myData.forEach((item, index) => {
    Array.isArray(dataProfile[index]) 
        ? 
            item.innerHTML += `: ${dataProfile[index].join(', ')}` 
        : 
            item.innerHTML += `: ${dataProfile[index]}`;
});

document.getElementsByClassName('email')[0].innerHTML = config.email.replace("[email]", `<a href="mailto:${perfil.email}">${perfil.email}</a>`);