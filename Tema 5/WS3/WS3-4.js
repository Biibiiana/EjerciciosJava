window.onload = () => {
    const binSrc = "https://cdn2.iconfinder.com/data/icons/thin-line-color-1/21/33-512.png";
    const editSrc = "https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color/254000/52-512.png";

    var listaElem = []

    const lista = document.getElementsByClassName("lista")[0];
    const eliminar = document.getElementById("del");
    const button = document.getElementById("submit");

    button.addEventListener("click", nuevoElemento);
    eliminar.addEventListener("click", eliminarTodo);

    function nuevoElemento(e) {
        let item = document.getElementById("item");
        let articulo = item.value;

        addArt(articulo);
        item.value = "";

        addEvents();
    }

    function addArt(articulo) {
        let element = creaArticulo(articulo)
        lista.appendChild(element);
        art = new ArticuloCompra(element)
        listaElem.push(art);
    }

    function addEvents() {
        let imagenes = document.getElementsByTagName("img");
        for (let i = 0; i < imagenes.length; i++) {
            imagenes[i].addEventListener("click", imagen);
        }
    }

    function creaArticulo(articulo) {
        let element = document.createElement("div");
        element.className = "articulo";

        let nombre = document.createElement("div");
        nombre.className = "nombre";

        let para = document.createElement("p");
        para.innerHTML = articulo;

        let imgs = document.createElement("div");
        imgs.className = "imgs";

        let imgEdit = document.createElement("img");
        imgEdit.src = editSrc;

        let imgDel = document.createElement("img");
        imgDel.src = binSrc;

        imgs.appendChild(imgEdit);
        imgs.appendChild(imgDel);
        nombre.appendChild(para);
        element.appendChild(nombre);
        element.appendChild(imgs);

        return element;
    }

    function imagen(e) {
        let src = e.target.src;
        if (src == editSrc) {
            cambiarArt(e.target)
        } else {
            borrarArt(e.target)
        }
    }

    function borrarArt(elem) {
        for (let i = 0; i < listaElem.length; i++) {
            let art = listaElem[i].elementoDiv
            if ((art).contains(elem)) {
                listaElem.splice(i, 1);
                lista.removeChild(art);
            }

        }
    }

    function cambiarArt(elem) {
        for (let i = 0; i < listaElem.length; i++) {
            let art = listaElem[i].elementoDiv

            if ((art).contains(elem)) {
                let nuevoNom = window.prompt("Introduce el nuevo nombre")
                let editado = creaArticulo(nuevoNom);

                lista.replaceChild(editado, art);
                listaElem[i] = new ArticuloCompra(editado);

                addEvents();
            }

        }
    }

    function eliminarTodo(e) {
        lista.innerHTML = '';
        listaElem = [];
    }

    class ArticuloCompra {
        constructor(elementoDiv) {
            this.elementoDiv = elementoDiv;
        }
    }
}

