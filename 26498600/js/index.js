const handleWebsiteData = () => {
    document.title                                          = `${config.sitio[0]} ${config.sitio[1]} ${config.sitio[2]}`;
    document.getElementsByClassName('logo')[0].innerHTML    = `${config.sitio[0]} <small>${config.sitio[1]}</small> ${config.sitio[2]}`; 
    document.getElementsByTagName('footer')[0].innerHTML    = config.copyRight;
    document.getElementById('home').innerHTML               = config.home;
};

const itemsGeneralProfileConfig = [
    config.color,
    config.libro,
    config.musica,
    config.video_juego,
    config.lenguajes
];

const itemsProfileData = [
    perfil.color,
    perfil.libro,
    perfil.musica,
    perfil.video_juego,
    perfil.lenguajes
];

const handleProfileData = () => {
    document.getElementsByClassName('saludo')[0].innerHTML  = `${config.saludo}, ${perfil.nombre}`;

    const profilePhoto = document.querySelector('div.container__image img.image');
    profilePhoto.setAttribute('src', perfil.imagen);
    profilePhoto.setAttribute('alt', perfil.nombre);
    
    const itemsGeneralProfile                                                   = document.querySelectorAll('div.container__content ul li');
    document.querySelector('div.container__content h1').innerHTML               = perfil.nombre;
    document.querySelector('div.container__content p.description').innerHTML    = perfil.descripcion;
    
    itemsGeneralProfile.forEach((item, index) => {
        if (itemsGeneralProfileConfig[index] === config.lenguajes) {
            item.innerHTML = `<b>${itemsGeneralProfileConfig[index]}</b>`;
            return;
        }
        item.innerHTML = itemsGeneralProfileConfig[index];
    });
    
    itemsGeneralProfile.forEach((item, index) => {
        if (Array.isArray(itemsProfileData[index])) {
            if (itemsProfileData[index] === perfil.lenguajes) {
                item.innerHTML += `: <b>${itemsProfileData[index].join(', ')}</b>`;
                return;
            }
            item.innerHTML += `: ${itemsProfileData[index].join(', ')}`;
        } else {
            item.innerHTML += `: ${itemsProfileData[index]}`;
        }
    });

    document.getElementsByClassName('email')[0].innerHTML = config.email.replace("[email]", `<a href="mailto:${perfil.email}">${perfil.email}</a>`);
};

const main = () => {
    handleWebsiteData();
    handleProfileData();
};

main();