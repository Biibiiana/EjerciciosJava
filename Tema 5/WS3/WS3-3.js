window.onload = () => {
    var dorsoSrc = "https://images.unsplash.com/photo-1575330719343-23de81f5b995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1490&q=80"
    var imagenes = [];
    var levantadas = [];
    var intentos = 10;

    var imgs = document.getElementsByTagName("img");
    var inte = document.getElementById("intentos");
    var win = document.getElementById("won");
    var lost = document.getElementById("lost");
    var newGame = document.getElementById("game");

    nuevoJuego();

    //Inicia el juego
    function nuevoJuego() {
        win.style.visibility = "hidden";
        lost.style.visibility = "hidden";
        newGame.style.visibility = "hidden";

        for (let i = 0; i < imgs.length; i++) {
            imgs[i].src = dorsoSrc;
            imgs[i].addEventListener("click", voltear);
        }
        newGame.addEventListener("click", nuevoJuego);

        colocarCartas();
        intentos = 10
        inte.innerHTML = intentos;
    }

    function colocarCartas() {
        let imagHalf = ["https://www.cuerpomente.com/medio/2022/07/13/flores-simbolismo-espiritualidad_09ff3f15_1200x1200.jpg",
            "https://media.admagazine.com/photos/618a5f56532cae908aaf2a53/master/w_1600%2Cc_limit/88800.jpg",
            "https://i.pinimg.com/originals/19/75/c3/1975c3da0583927e89ef0c0b6fed3f03.png",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFeWO_NU1LKoTSeh1bnuyLZInFbH7GwgPJNLNXieMrZRqGcUwjsNfPa9DZxiR8eDB0U4I&usqp=CAU",
            "http://1.bp.blogspot.com/-xlfMdb8RNvk/UEoxC0bi3NI/AAAAAAAAI4U/bdDa1Hh63z4/s1600/Jazmin+(8).JPG"];

        imagenes = imagHalf.concat(imagHalf);

        mezclar(imagenes);
    }

    function voltear(e) {
        //Se voltea la imagen seleccionada
        for (let i = 0; i < imgs.length; i++) {
            if (e.target == imgs[i]) {
                e.target.src = imagenes[i]
            }
        }

        levantadas.push(e.target);

        setTimeout(comprobarLevantadas, 1000);
    }

    function comprobarLevantadas() {
        if (levantadas.length == 2) {
            if (levantadas[0].src != levantadas[1].src) {
                levantadas[0].src = dorsoSrc;
                levantadas[1].src = dorsoSrc;
                levantadas = [];

                intentos = intentos - 1;
                inte.innerHTML = intentos;

                if (intentos == 0) {
                    partidaPerdida();
                }
            } else {
                levantadas = [];
                if (isWon()) {
                    partidaGanada();
                }
            }
        }
    }

    function mezclar(array) {
        let currentIndex = array.length, randomIndex;
        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }
        return array;
    }

    function isWon() {
        for (let i = 0; i < imgs.length; i++) {
            if (imgs[i].src == dorsoSrc) {
                console.log(false);
                return false;
            }
        }
        return true;
    }

    function partidaGanada() {
        win.style.visibility = "visible";
        lost.style.visibility = "hidden";
        newGame.style.visibility = "visible";
    }

    function partidaPerdida() {
        lost.style.visibility = "visible";
        win.style.visibility = "hidden";
        newGame.style.visibility = "visible";
    }
}
