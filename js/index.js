const students = document.getElementsByTagName("ul")[1];
const searchbar_items = document.getElementsByTagName("input");
const hi = document.getElementsByClassName("saludo")[0];

function configSite () {
    document.title = config.sitio[0] +config.sitio[1]+ config.sitio[2]; 
    document.getElementsByClassName("logo")[0].innerHTML = config.sitio[0] + "<small>" + config.sitio[1] + "</small> "+config.sitio[2];
    document.getElementsByTagName("footer")[0].innerText = config.copyRight;
    searchbar_items[1].value = config.buscar;
    hi.innerHTML = config.saludo + ", " + hi.innerHTML;
}

function loadStudents () {
    listado.forEach(student => {
        students.append( document.createElement("li") );
        students.lastChild.innerHTML = "<img src=\""+student.imagen+"\"> <a href=\"\">"+student.nombre+"</a> "
    });
}

function search (input) {
    students.innerHTML = "";
    listado.map( 
        est => {
            if(est.nombre.includes(input.target.value)){
                students.append(document.createElement("li"));
                students.lastChild.innerHTML = "<img src=\""+est.imagen+"\"> <a href=\"\">"+est.nombre+"</a> "
            }
        } 
    )
    if(students.innerHTML === ""){
        const error_element = document.createElement("div");
        error_element.innerHTML = "No hay alumnos que tengan en su nombre: "+input.target.value;
        error_element.classList.add("error");
        students.append(error_element);
    }
}

function init () {
    document.getElementsByTagName("form")[0].addEventListener("submit", e => e.preventDefault());
    searchbar_items[0].addEventListener("change", input => search(input));    
    configSite();
    loadStudents();
}

init();