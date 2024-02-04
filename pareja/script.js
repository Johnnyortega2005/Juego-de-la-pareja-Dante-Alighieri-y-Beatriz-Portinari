function Personaje(reina, rey) {
    const Dante = {
        name: "Dante Alighieri",
        pareja: rey,
        origen: "Florencia"
    };

    const Beatriz = {
        name: "Beatriz Portinari",
        pareja: reina,
        origen: "Florencia"
    };

    return {
        rey: Dante,
        reina: Beatriz
    };
}

function juego() {
    alert(`Bienvenidos al juego de Dante Alighieri y Beatriz Portinari!\n
    Dante y Beatriz se encuentran en el Florencia medieval, tú decides su destino.\n`);

    let respuestasCorrectas = 0;

    let respuesta1 = prompt(`1. ¿Cuál es el nombre completo de Dante? 
    (a) Dante Alighieri 
    (b) Dante Portinari 
    (c) Dante Medici`);
    if (checkAnswer(1, respuesta1)) {
        respuestasCorrectas++;
    }

    let respuesta2 = prompt(`2. ¿Cuál es el nombre completo de Beatriz? 
    (a) Beatriz Alighieri 
    (b) Beatriz Portinari 
    (c) Beatriz Medici`);
    if (checkAnswer(2, respuesta2)) {
        respuestasCorrectas++;
    }

    let respuesta3 = prompt(`3. ¿En qué ciudad vivieron Dante y Beatriz? 
    (a) Venecia 
    (b) Roma 
    (c) Florencia`);
    if (checkAnswer(3, respuesta3)) {
        respuestasCorrectas++;
    }

    let respuesta4 = prompt(`4. ¿Cuál es el destino final de Dante y Beatriz en la historia? 
    (a) Se casan 
    (b) Se separan 
    (c) Viajan juntos`);
    if (checkAnswer(4, respuesta4)) {
        respuestasCorrectas++;
    }

    let puntuacion = respuestasCorrectas * 25;

    alert(`¡El juego ha terminado!\nHas respondido ${respuestasCorrectas} preguntas correctamente de 4.\nPuntuación final: ${puntuacion}`);

    delete respuestasCorrectas;
    delete respuesta1;
    delete respuesta2;
    delete respuesta3;
    delete respuesta4;
}

function checkAnswer(index, respuesta) {
    switch (index) {
        case 1: return respuesta.toLowerCase() === 'a';
        case 2: return respuesta.toLowerCase() === 'b';
        case 3: return respuesta.toLowerCase() === 'c';
        case 4: return respuesta.toLowerCase() === 'b';
    }
}

juego();
