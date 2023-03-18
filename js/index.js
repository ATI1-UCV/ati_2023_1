/////////Navbar/////////
document.title = config.sitio[0] + config.sitio[1] + config.sitio[2];
document.getElementsByClassName("logo")[0].innerHTML = config.sitio[0] + "<small>" + config.sitio[1] + "</small> " + config.sitio[2];

let holaNombre = document.getElementsByClassName("saludo")[0];
holaNombre.innerHTML = config.saludo + ", " + holaNombre.innerHTML;

//document.getElementsByTagName("input")[0].placeholder = config.;
document.getElementsByTagName("input")[1].value = config.buscar;

/////////Footer/////////
document.getElementsByTagName("footer")[0].innerText = config.copyRight;

/////////Section/////////
//Tarjetas
let carrusel = document.getElementsByTagName("div")[0];

for(let i in listado){
                        console.log("a")
    carrusel.append(document.createElement("ul"));
    carrusel.lastChild.classList.add("carousel-item");
    carrusel.lastChild.append(document.createElement("li"));
    carrusel.lastChild.lastChild.innerHTML = '<img src="' + listado[i].imagen + '"><a href="">' + listado[i].nombre + '</a>';
};

//Buscador
let buscador = document.getElementsByTagName("input")[0];

buscador.addEventListener("change", buscar);
function buscar() {
    carrusel.innerHTML = "";
    listado.forEach(bus => {
        if (bus.nombre.toUpperCase().includes(buscador.value.toUpperCase())) {
            carrusel.append(document.createElement("ul"));
            carrusel.lastChild.classList.add("carousel-item");
            carrusel.lastChild.append(document.createElement("li"));
            carrusel.lastChild.lastChild.innerHTML = '<img src="' + bus.imagen + '"><a href="">' + bus.nombre + '</a>';
        }
    });
    if(carrusel.innerHTML == ""){
        let noResult = document.createElement("div");
        noResult.innerText = "No hay alumnos que tengan en su nombre: "+buscador.value;
        noResult.classList.add("noResult");
        carrusel.append(noResult);
    }

};
    
//Carrusel
$(function(){
    $('.carousel').carousel({
        interval: 5000
    })

    $('.carousel-item').first().addClass('active');
    $('.carousel-indicators > li').first().addClass('active');
    $('#carousel').carousel();




});



