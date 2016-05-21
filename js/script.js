function cambiarSeleccionado(evt){
    li = this;
    var menu, items;
    menu = document.getElementById("menu");
    items = menu.getElementsByTagName("li");
    for(i=0;i<items.length;i++){
        if(items[i].hasAttribute("class"))
            items[i].removeAttribute("class");
    }
    li.setAttribute("class", "seleccionado");
}

function registrarEventos(){
    var menu, items;
    menu = document.getElementById("menu");
    items = menu.getElementsByTagName("li");
    for(i=0;i<items.length;i++){
        items[i].addEventListener("click", cambiarSeleccionado, false);
    }

    var info, edu, habil, exp, ref;
    info = document.getElementById("inf_li");
    info.addEventListener("click", function (e) { //click en el fondo desaparece fondo e imagen
        document.getElementById("info").style.display = 'block';
        document.getElementById("edu").style.display = 'none';
        document.getElementById("exp").style.display = 'none';
        document.getElementById("habil").style.display = 'none';
        document.getElementById("ref").style.display = 'none';
    }, false);
    edu = document.getElementById("edu_li");
    edu.addEventListener("click", function (e) { //click en el fondo desaparece fondo e imagen
        document.getElementById("info").style.display = 'none';
        document.getElementById("edu").style.display = 'block';
        document.getElementById("exp").style.display = 'none';
        document.getElementById("habil").style.display = 'none';
        document.getElementById("ref").style.display = 'none';
    }, false);
    habil = document.getElementById("hab_li");
    habil.addEventListener("click", function (e) { //click en el fondo desaparece fondo e imagen
        document.getElementById("info").style.display = 'none';
        document.getElementById("edu").style.display = 'none';
        document.getElementById("exp").style.display = 'none';
        document.getElementById("habil").style.display = 'block';
        document.getElementById("ref").style.display = 'none';
    }, false);
    exp = document.getElementById("exp_li");
    exp.addEventListener("click", function (e) { //click en el fondo desaparece fondo e imagen
        document.getElementById("info").style.display = 'none';
        document.getElementById("edu").style.display = 'none';
        document.getElementById("exp").style.display = 'block';
        document.getElementById("habil").style.display = 'none';
        document.getElementById("ref").style.display = 'none';
    }, false);
    ref = document.getElementById("ref_li");
    ref.addEventListener("click", function (e) { //click en el fondo desaparece fondo e imagen
        document.getElementById("info").style.display = 'none';
        document.getElementById("edu").style.display = 'none';
        document.getElementById("exp").style.display = 'none';
        document.getElementById("habil").style.display = 'none';
        document.getElementById("ref").style.display = 'block';
    }, false);
}
window.addEventListener("load", registrarEventos, false);