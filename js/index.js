document.title                                       = `${config.sitio[0]} ${config.sitio[1]} ${config.sitio[2]}`; 
document.getElementsByTagName("footer")[0].innerText = config.copyRight;
document.getElementsByClassName("logo")[0].innerHTML = `${config.sitio[0] } <small>${config.sitio[1]}</small> ${config.sitio[2]}`;

const searchbar_items           = document.getElementsByTagName("input");
searchbar_items[0].placeholder  = config.searchbar_placeholder;
searchbar_items[1].value        = config.buscar;

const saludo_element            = document.getElementsByClassName("saludo")[0];
saludo_element.innerHTML        = `${config.saludo}, ${saludo_element.innerHTML}`;

const students_ul               = document.getElementsByTagName("ul")[1];
listado.forEach(student => {
    students_ul.append(document.createElement("li"));
    students_ul.lastChild.innerHTML = "<img src=\""+student.imagen+"\"> <a href=\"\">"+student.nombre+"</a>";
});

const form = document.getElementsByTagName("form")[0];
form.addEventListener('submit', e => {
    e.preventDefault();
});

searchbar_items[0].addEventListener('change', input =>{ 
        students_ul.innerHTML = '';
        
        listado.map(item => {
                if (item.nombre.includes(input.target.value)){
                    students_ul.append(document.createElement('li'));
                    students_ul.lastChild.innerHTML = "<img src=\"" + item.imagen + "\"> <a href=\"\">" + item.nombre + "</a>";
                }
            } 
        );

        if (!students_ul.innerHTML){
            const error_element = document.createElement('div');
            error_element.innerHTML = `No hay alumnos que tengan en su nombre: ${input.target.value}`;
            error_element.classList.add("msg_error");
            students_ul.append(error_element);
        }
    }
);