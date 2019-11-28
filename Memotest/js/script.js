//Declaración de variables 

// Banderas seleccionables

var flags = [
    {
        "country": "img/america/argentina.svg",
        "value": 0,
        "name": "Argentina"
    },
    {
        "country": "img/oceania/australia.svg",
        "value": 1,
        "name": "Australia"
    },
    {
        "country": "img/europe/belgium.svg",
        "value": 2,
        "name": "Belgica"
    },
    {
        "country": "img/america/brazil.svg",
        "value": 3,
        "name": "Brasil"
    },
    {
        "country": "img/america/canada.svg",
        "value": 4,
        "name": "Canada"
    },
    {
        "country": "img/europe/croatia.svg",
        "value": 5,
        "name": "Croacia"
    },
    {
        "country": "img/europe/czechrepublic.svg",
        "value": 6,
        "name": "Republica Checa"
    },
    {
        "country": "img/europe/france.svg",
        "value": 7,
        "name": "Francia"
    },
    {
        "country": "img/europe/germany.svg",
        "value": 8,
        "name": "Alemania"
    },
    {
        "country": "img/europe/greece.svg",
        "value": 9,
        "name": "Grecia"
    },
    {
        "country": "img/asia/japan.svg",
        "value": 10,
        "name": "Japon"
    },
    {
        "country": "img/europe/netherlands.svg",
        "value": 11,
        "name": "Holanda"
    },
    {
        "country": "img/asia/southkorea.svg",
        "value": 12,
        "name": "Corea del Sur"
    },
    {
        "country": "img/europe/spain.svg",
        "value": 13,
        "name": "España"
    },
    {
        "country": "img/europe/sweden.svg",
        "value": 14,
        "name": "Suecia"
    },
    {
        "country": "img/europe/switzerland.svg",
        "value": 15,
        "name": "Suiza"
    },
    {
        "country": "img/europe/ukraine.svg",
        "value": 16,
        "name": "Ucrania"
    },
    {
        "country": "img/america/unitedstates.svg",
        "value": 17,
        "name": "Estados Unidos"
    },
];
var flagsEurope = [
    {
        "country": "img/europe/italy.svg",
        "value": 0,
        "name": "Italia"
    },
    {
        "country": "img/europe/wales.svg",
        "value": 1,
        "name": "Gales"
    },
    {
        "country": "img/europe/belgium.svg",
        "value": 2,
        "name": "Belgica"
    },
    {
        "country": "img/europe/serbia.svg",
        "value": 3,
        "name": "Serbia"
    },
    {
        "country": "img/europe/iceland.svg",
        "value": 4,
        "name": "Islandia"
    },
    {
        "country": "img/europe/croatia.svg",
        "value": 5,
        "name": "Croacia"
    },
    {
        "country": "img/europe/czechrepublic.svg",
        "value": 6,
        "name": "Republica Checa"
    },
    {
        "country": "img/europe/france.svg",
        "value": 7,
        "name": "Francia"
    },
    {
        "country": "img/europe/germany.svg",
        "value": 8,
        "name": "Alemania"
    },
    {
        "country": "img/europe/greece.svg",
        "value": 9,
        "name": "Grecia"
    },
    {
        "country": "img/europe/finland.svg",
        "value": 10,
        "name": "Finlandia"
    },
    {
        "country": "img/europe/netherlands.svg",
        "value": 11,
        "name": "Holanda"
    },
    {
        "country": "img/europe/norway.svg",
        "value": 12,
        "name": "Noruega"
    },
    {
        "country": "img/europe/spain.svg",
        "value": 13,
        "name": "España"
    },
    {
        "country": "img/europe/sweden.svg",
        "value": 14,
        "name": "Suecia"
    },
    {
        "country": "img/europe/switzerland.svg",
        "value": 15,
        "name": "Suiza"
    },
    {
        "country": "img/europe/united-kingdom.svg",
        "value": 16,
        "name": "Reino Unido"
    },
    {
        "country": "img/europe/ukraine.svg", 
        "value": 17,
        "name": "Ucrania"
    },
];
var flagsAmerica = [
    {
        "country": "img/america/argentina.svg",
        "value": 0,
        "name": "Argentina"
    },
    {
        "country": "img/america/colombia.svg",
        "value": 1,
        "name": "Colombia"
    },
    {
        "country": "img/america/ecuador.svg",
        "value": 2,
        "name": "Ecuador"
    },
    {
        "country": "img/america/brazil.svg",
        "value": 3,
        "name": "Brasil"
    },
    {
        "country": "img/america/canada.svg",
        "value": 4,
        "name": "Canada"
    },
    {
        "country": "img/america/Venezuela.svg",
        "value": 5,
        "name": "Venezuela"
    },
    {
        "country": "img/america/peru.svg",
        "value": 6,
        "name": "Peru"
    },
    {
        "country": "img/america/unitedstates.svg",
        "value": 7,
        "name": "Estados Unidos"
    },
    {
        "country": "img/america/mexico.svg",
        "value": 8,
        "name": "Mexico"
    },
    {
        "country": "img/america/chile.svg",
        "value": 9,
        "name": "Chile"
    },
    {
        "country": "img/america/uruguay.svg",
        "value": 10,
        "name": "Uruguay"
    },
    {
        "country": "img/america/jamaica.svg",
        "value": 11,
        "name": "Jamaica"
    },
    {
        "country": "img/america/panama.svg",
        "value": 12,
        "name": "Panama"
    },
    {
        "country": "img/america/barbados.svg",
        "value": 13,
        "name": "España"
    },
    {
        "country": "img/america/honduras.svg",
        "value": 14,
        "name": "Honduras"
    },
    {
        "country": "img/america/trinidad-and-tobago.svg",
        "value": 15,
        "name": "Trinidad y Tobago"
    },
    {
        "country": "img/america/costa-rica.svg",
        "value": 16,
        "name": "Costa Rica"
    },
    {
        "country": "img/america/paraguay.svg",
        "value": 17,
        "name": "Paraguay"
    },
];
var flagsAsia = [
    {
        "country": "img/asia/japan.svg",
        "value": 0,
        "name": "Japon"
    },
    {
        "country": "img/asia/southkorea.svg",
        "value": 1,
        "name": "Corea del Sur"
    },
    {
        "country": "img/asia/singapore.svg",
        "value": 2,
        "name": "Singapur"
    },
    {
        "country": "img/asia/indonesia.svg",
        "value": 3,
        "name": "Indonesia"
    },
    {
        "country": "img/asia/thailand.svg",
        "value": 4,
        "name": "Tailandia"
    },
    {
        "country": "img/asia/china.svg",
        "value": 5,
        "name": "China"
    },
    {
        "country": "img/asia/hong-kong.svg",
        "value": 6,
        "name": "Hong Kong"
    },
    {
        "country": "img/asia/israel.svg",
        "value": 7,
        "name": "Israel"
    },
    {
        "country": "img/asia/mongolia.svg",
        "value": 8,
        "name": "Mongolia"
    },
    {
        "country": "img/asia/syria.svg",
        "value": 9,
        "name": "Siria"
    },
    {
        "country": "img/asia/iraq.svg",
        "value": 10,
        "name": "Irak"
    },
    {
        "country": "img/asia/lebanon.svg",
        "value": 11,
        "name": "Libano"
    },
    {
        "country": "img/asia/malasya.svg",
        "value": 12,
        "name": "Malasia"
    },
    {
        "country": "img/asia/iran.svg",
        "value": 13,
        "name": "Iran"
    },
    {
        "country": "img/asia/jordan.svg",
        "value": 14,
        "name": "Jordania"
    },
    {
        "country": "img/asia/kuwait.svg",
        "value": 15,
        "name": "Kuwait"
    },
    {
        "country": "img/asia/palestine.svg",
        "value": 16,
        "name": "Palestina"
    },
    {
        "country": "img/asia/bhutan.svg",
        "value": 17,
        "name": "Butan"
    },
];
var flagsAfrica = [
    {
        "country": "img/africa/senegal.svg",
        "value": 0,
        "name": "Senegal"
    },
    {
        "country": "img/africa/nigeria.svg",
        "value": 1,
        "name": "Nigeria"
    },
    {
        "country": "img/africa/south-africa.svg",
        "value": 2,
        "name": "Sudafrica"
    },
    {
        "country": "img/africa/cameroon.svg",
        "value": 3,
        "name": "Camerun"
    },
    {
        "country": "img/africa/ghana.svg",
        "value": 4,
        "name": "Ghana"
    },
    {
        "country": "img/africa/algeria.svg",
        "value": 5,
        "name": "Argelia"
    },
    {
        "country": "img/africa/angola.svg",
        "value": 6,
        "name": "Angola"
    },
    {
        "country": "img/africa/egypt.svg",
        "value": 7,
        "name": "Egipto"
    },
    {
        "country": "img/africa/uganda.svg",
        "value": 8,
        "name": "Uganda"
    },
    {
        "country": "img/africa/ethiopia.svg",
        "value": 9,
        "name": "Etiopia"
    },
    {
        "country": "img/africa/gabon.svg",
        "value": 10,
        "name": "Gabon"
    },
    {
        "country": "img/africa/ivory-coast.svg",
        "value": 11,
        "name": "Costa de Marfil"
    },
    {
        "country": "img/africa/kenya.svg",
        "value": 12,
        "name": "Kenia"
    },
    {
        "country": "img/africa/libya.svg",
        "value": 13,
        "name": "Libia"
    },
    {
        "country": "img/africa/mozambique.svg",
        "value": 14,
        "name": "Mozambique"
    },
    {
        "country": "img/africa/rwanda.svg",
        "value": 15,
        "name": "Ruanda"
    },
    {
        "country": "img/africa/zimbabwe.svg",
        "value": 16,
        "name": "Zimbawue"
    },
    {
        "country": "img/africa/seychelles.svg",
        "value": 17,
        "name": "Seychelles"
    },
];
var flagsWorldWide = [
    {
        "country": "img/america/argentina.svg",
        "value": 0,
        "name": "Argentina"
    },
    {
        "country": "img/oceania/australia.svg",
        "value": 1,
        "name": "Australia"
    },
    {
        "country": "img/europe/belgium.svg",
        "value": 2,
        "name": "Belgica"
    },
    {
        "country": "img/america/brazil.svg",
        "value": 3,
        "name": "Brasil"
    },
    {
        "country": "img/america/canada.svg",
        "value": 4,
        "name": "Canada"
    },
    {
        "country": "img/europe/croatia.svg",
        "value": 5,
        "name": "Croacia"
    },
    {
        "country": "img/europe/czechrepublic.svg",
        "value": 6,
        "name": "Republica Checa"
    },
    {
        "country": "img/europe/france.svg",
        "value": 7,
        "name": "Francia"
    },
    {
        "country": "img/europe/germany.svg",
        "value": 8,
        "name": "Alemania"
    },
    {
        "country": "img/europe/greece.svg",
        "value": 9,
        "name": "Grecia"
    },
    {
        "country": "img/asia/japan.svg",
        "value": 10,
        "name": "Japon"
    },
    {
        "country": "img/europe/netherlands.svg",
        "value": 11,
        "name": "Holanda"
    },
    {
        "country": "img/asia/southkorea.svg",
        "value": 12,
        "name": "Corea del Sur"
    },
    {
        "country": "img/europe/spain.svg",
        "value": 13,
        "name": "España"
    },
    {
        "country": "img/europe/sweden.svg",
        "value": 14,
        "name": "Suecia"
    },
    {
        "country": "img/europe/switzerland.svg",
        "value": 15,
        "name": "Suiza"
    },
    {
        "country": "img/europe/ukraine.svg",
        "value": 16,
        "name": "Ucrania"
    },
    {
        "country": "img/america/unitedstates.svg",
        "value": 17,
        "name": "Estados Unidos"
    },
];

var player = 1; // jugador
var matrix = []; // tamaño del tablero
var positions = []; // guardo las posiciones de la matriz en un objeto
var selected = []; // guardo los valores de las matriz para compararlos y buscar la imagen que corresponda
var idKeep = []; // guardo los id de las imagenes
var tableSize = 0; // tamaño de la tabla
var pairs = 0; // contador de pares
var scoreOne = 0; // puntaje del jugador 1
var scoreTwo = 0; // puntaje del jugador 2
var keepPlaying = true; // estado del juego 
var theme = 0; 
var namePlayerOne; // jugador 1
var namePlayerTwo; // jugador 2
var values = 0; // guarda el valor de la posición de la matriz para saber que bandera seleccionar
var idFind = 0; // guarda el id donde se hizo click para saber donde colocar la bandera
var matches = 0; // partidas jugadas
var matchesOne = 0; // partidas ganadas por jugador uno
var matchesTwo = 0; // partidas ganadas por jugador dos
var ties = 0; // partidas empatadas
var rightChoice = document.getElementById("rightChoice"); // Estas variables que toman un ID son las de sonido
var flipCard = document.getElementById("flipCard");
var playerOneWins = document.getElementById("playerOneWins");
var playerTwoWins = document.getElementById("playerTwoWins");
var soundState = true; // booleano para activar/desactivar el sonido
var pickFlags = 0; // variable el select de las banderas

// Funciones

function startGame(){ // Función que se ejecuta al cargar la página
    getNames();
    playerName(); 
    createTable(); 
}

function changeTheme(){
    theme = document.getElementById("theme").value;
    if(theme == "blueSpace"){
        document.getElementById("body").classList.add("space");
    } 
    if(theme == "aurora"){
        document.getElementById("body").classList.add("aurora");
    }
}

function changePlayer(){  // Función que cambia de jugador
    if(player == 1){
        player = 2;
        document.getElementById("1").classList.remove("player");
        document.getElementById("2").classList.add("player");
        document.getElementById("1").classList.remove("player");
    } else if(player == 2){
        player = 1;
        document.getElementById("1").classList.add("player");
        document.getElementById("2").classList.remove("player");
    }
}

function createTable(){ // Función que crea la tabla
    generateMatrix(); // Ejecuta la función que genera la matriz 
    tiles(); // Ejecuta la función que asigna valores de a pares a las posiciones de la matriz
    selected = []; // Vacia el array que guarda los valores de las fichas seleccionadas 
    idKeep = []; // Vacia el array que guarda los ID de las fichas seleccionadas
    document.getElementById("container").innerHTML = "";
    for(i=0;i<tableSize;i++){
        document.getElementById("container").innerHTML += "<div class='align' id='row"+i+"'></div>";
        for(j=0;j<tableSize;j++){ // Crea los divs necesarios para el efecto de voltear la ficha. Asigna un onclick que va a ejecutar la función game() pasando tres parametros: ID, posición 1 de la matriz y posición 2 de la matriz. Cuando termina de crear todos los divs, se ejecuta la función putFlag() pasando los mismos tres parametros: posición 1 de la matriz, posición 2 de la matriz e ID.
            document.getElementById("row"+i).innerHTML += "<div class='flip-card' onclick='game(\"img"+i+j+"\","+[i]+","+[j]+")'><div id='img"+i+j+"' class='flip-card-inner'><div class='flip-card-front'><img width='100px' ></div><div class='flip-card-back'></div></div>";
            putFlag(i,j,"img"+i+j+""); 
        }
    }
}

function generateMatrix(){ // Función que genera la matriz según el valor del select
    tableSize = parseInt(document.getElementById("pick").value); // Toma el valor del select de tabla.
    matrix = []; // Vacia el array de la matriz
    positions = []; // Vacia el array el array de posiciones
    for(i=0;i<tableSize;i++){
        matrix.push([]);
        for(j=0;j<tableSize;j++){
            matrix[i].push(0);
            positions.push({"row":i, "col":j});
        }
    }
    shuffler(positions); // Se mezclan el array de posiciones
}

function tiles(){ // Función que asigna valores de a pares
    if(tableSize % 2 == 0){ // Si el tamaño de la tabla es par
        for(i=0;i<Math.floor((tableSize*tableSize)/2);i++){
            matrix[positions[i].row][positions[i].col] = flags[i].value;
            matrix[positions[i+1].row][positions[i+1].col] = flags[i].value;
            positions.splice(0,1); // Remueve la posicion i actual para que no se sobrescriba en el próximo ciclo del for. Sin hacerlo, el resultado sería: 0, 1, 2, 3...en vez de 0, 0, 1, 1, 2, 2...
        }
    } else if(tableSize % 2 !== 0){ // Si el tamaño de la tabla es impar
        for(i=0;i<Math.floor((tableSize*tableSize)/2);i++){
            matrix[positions[i].row][positions[i].col] = flags[i].value;
            matrix[positions[i+1].row][positions[i+1].col] = flags[i].value;
            positions.splice(0,1);
        }
        for(i=0;i<matrix.length;i++){ // Busca uno de los 0 que se repite y lo cambia por el valor 17 (para la ficha especial de la tabla 5x5. Cuando termina de llenar los valores de a pares, al valor impar restante lo llena con un 0. Por eso quedan tres 0 en vez de dos.)
            if(matrix[i].indexOf(0) !== -1){ // indexOf busca si hay un 0. Devuelve -1 al no encontrarlo. 
                var x = matrix[i].indexOf(0);
                matrix[i][x] = flags[17].value;
                break // Cuando llegue a está línea, nunca más vuelve a entrar en el IF. Sin el break, podría reemplazar más de un 0 si se encuentra en el mismo array. Se usa para que el condicional se ejecute solo una vez. 
            }
        }
    }
}

function selectFlags(){ // Función que permite cambiar las banderas según seleccione el usuario.
    pickFlags = document.getElementById("flags").value;
    if(pickFlags == "europe"){
        flags = flagsEurope;
        createTable();
    } else if(pickFlags == "america"){
        flags = flagsAmerica;
        createTable();
    } else if(pickFlags == "asia"){
        flags = flagsAsia;
        createTable();
    } else if(pickFlags == "africa"){
        flags = flagsAfrica;
        createTable();
    } else if(pickFlags == "worldwide"){
        flags = flagsWorldWide;
        createTable();
    }
}

function putFlag(pos1,pos2,id){ // Función que coloca la bandera correspondiente 
    values = matrix[pos1][pos2]; // variable que guarda el valor que hay en esa posición de la matriz.
    idFind = id; // variable que guarda el id del elemento donde se hizo click
    document.querySelector("#"+idFind+" div img").setAttribute("src", flags[values].country); // se coloca la bandera en el img que se encuentre dentro de un div que sea hijo de un elemento con el id que guarda la variable idFind.
}

function game(id,pos1,pos2){ // Función que ejecuta el juego

    rightChoice.volume = 0.1;

    if(keepPlaying == true){ 
        selected.push(matrix[pos1][pos2]); // guardo la posición de la matriz en la que se hizo click en el array selected
        idKeep.push(id); // guardo el id del elemento en el que se hizo click
        flip(idKeep); // función que muestra la bandera. Se pasa el array idKeep como parametro.
        bonus(); // función que se ejecuta si se encuentra la ficha especial de la tabla 5x5
        if(selected.length === 2){ // cuando el array que guarda las posiciones tenga dos posiciones dentro 
            keepPlaying = false; // no se puede hacer click en el resto de las fichas
            if(selected[0] === selected[1]){ // si los valores de las posiciones de la matriz dentro del array coinciden 
                rightChoice.play(); // sonido 
                selected = []; // vaciar el array para poder elegir otras dos posiciones
                idKeep = [];  // vaciar el array para obtener nuevos ids
                pairs = pairs + 1; // sumar uno al contador de pares que controla el estado del juego
                score(player); // ejecutar la función score, pasandole como parametro el jugador, de manera que le otorgue los puntos al jugador actual. 
                keepPlaying = true; // se puede volver a hacer click en las demas fichas
            } else{
                changePlayer(); // cambia el turno 
                setTimeout(back, 1000, idKeep); // ejecuta la función que vuelve a poner las fichas boca abajo con un retraso de un segundo para poder ver las fichas que se dieron vuelta.
                selected = []; 
                idKeep = []; 
            }
            if(pairs == Math.ceil((tableSize*tableSize)/2)){ // El Math.ceil está para que la ficha especial de la tabla 5x5 cuente como un par, de forma que pairs al final valga 13.
                theEnd(); 
                matchesInfo();
            }  
        }
    }
}

function flip(idKeep){ // funcion que da vuelta la ficha
    flipCard.volume = 0.2; // volumen del sonido
    if(selected.length === 1){ // si selected tiene un valor dentro 
        flipCard.play(); // sonido
        document.getElementById(idKeep[0]).parentElement.classList.add("noMoreClicks"); // asigna clase para que no se pueda hacer click
        document.getElementById(idKeep[0]).classList.add("showCard"); // añade la clase que rota la ficha
    } else{ 
        flipCard.play();
        document.getElementById(idKeep[1]).parentElement.classList.add("noMoreClicks")
        document.getElementById(idKeep[1]).classList.add("showCard"); 
    }
}

function back(idKeep){ // función que vuelve a poner las fichas boca abajo
        document.getElementById(idKeep[0]).classList.remove("showCard");
        document.getElementById(idKeep[0]).parentElement.classList.remove("noMoreClicks")
        document.getElementById(idKeep[1]).classList.remove("showCard");
        document.getElementById(idKeep[1]).parentElement.classList.remove("noMoreClicks");
        keepPlaying = true;  
}

function score(player){ // función que otorga puntajes según el tamaño de la tabla
    if(player == 1){
        if(tableSize == 4){
            scoreOne = scoreOne + 10;
            document.getElementById(player).innerHTML = profiles[0].nickname + " " + ":" + " " + scoreOne + " " + "puntos";
            saveScores();
        } else if(tableSize == 5){
            scoreOne = scoreOne + 50;
            document.getElementById(player).innerHTML = profiles[0].nickname + " " + ":" + " " + scoreOne + " " + "puntos"; 
            saveScores();
        } else if(tableSize == 6){
            scoreOne = scoreOne + 100;
            document.getElementById(player).innerHTML = profiles[0].nickname + " " + ":" + " " + scoreOne + " " + "puntos";
            saveScores();
        }
    } else if(player == 2){
        if(tableSize == 4){
            scoreTwo = scoreTwo + 10;
            document.getElementById(player).innerHTML = profiles[1].nickname + " " + ":" + " " + scoreTwo + " " + "puntos";
            saveScores();
        } else if(tableSize == 5){
            scoreTwo = scoreTwo + 50;
            document.getElementById(player).innerHTML = profiles[1].nickname + " " + ":" + " " + scoreTwo + " " + "puntos";
            saveScores();
        } else if(tableSize == 6){
            scoreTwo = scoreTwo + 100;
            document.getElementById(player).innerHTML = profiles[1].nickname + " " + ":" + " " + scoreTwo + " " + "puntos";
            saveScores();
        }
    }
}

function theEnd(){ // Función que anuncia si alguien ganó o si hubo empate.

    var container = document.createElement("div");
    document.getElementById("container").appendChild(container);
    container.setAttribute("id", "infoDiv")
    var text = document.createElement("p");
    container.appendChild(text);
    text.setAttribute("id", "infoStyle");
    var playAgain = document.createElement("p");
    container.appendChild(playAgain);
    playAgain.innerHTML = "¿Desea volver a jugar?";
    playAgain.setAttribute("id", "playAgain");

    var buttonsContainer = document.createElement("div");
    container.appendChild(buttonsContainer);
    buttonsContainer.setAttribute("id", "buttons");

    var buttonOne = document.createElement("button");
    buttonsContainer.appendChild(buttonOne);
    buttonOne.innerHTML = "Reiniciar";
    buttonOne.setAttribute("id", "reset");
    buttonOne.setAttribute("onclick", "reset()");

    var buttonTwo = document.createElement("button");
    buttonsContainer.appendChild(buttonTwo);
    buttonTwo.innerHTML = "Cambiar jugadores";
    buttonTwo.setAttribute("id", "changeNames");
    buttonTwo.setAttribute("onclick", "resetPlayers()");

    if(scoreOne > scoreTwo){
        playerOneWins.volume = 0.2;
        playerOneWins.play();
        text.innerHTML = "¡" + profiles[0].nickname + " " + "ganó!";
        document.getElementById("1").classList.add("winner");
    } else if(scoreOne < scoreTwo){
        playerTwoWins.volume = 0.2;
        playerTwoWins.play();
        text.innerHTML = "¡" + profiles[1].nickname + " " + "ganó!";
        document.getElementById("2").classList.add("winner");
    } else{
        text.innerHTML = "empate";
    }
}

function shuffler (array) { // función que mezcla el array de posiciones

	var currentIndex = array.length;
	var temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;

};

function reset(){ // Función que reinicia el juego y puntajes
    if(scoreOne > scoreTwo){
        document.getElementById("1").classList.remove("winner");
    } else if(scoreOne < scoreTwo){ 
        document.getElementById("2").classList.remove("winner");
    }
    createTable();
    pairs = 0;
    /*
    scoreOne = 0;
    scoreTwo = 0;
    */
    selected = [];
    idKeep = [];
    document.getElementById("1").innerHTML = profiles[0].nickname;
    document.getElementById("2").innerHTML = profiles[1].nickname; 
}

function playerName(){ // Función que pide los nombres a los jugadores
    document.getElementById("1").innerHTML = profiles[0].nickname;
    document.getElementById("2").innerHTML = profiles[1].nickname;
}

/*
function resetPlayers(){ // Función que reinicia el estado de los jugadores
    playerName();
    scoreOne = 0;
    scoreTwo = 0;
    matches = 0;
    matchesOne = 0;
    matchesTwo = 0;
    ties = 0;
    reset();
}
*/

function bonus(){ // Función para la ficha especial de la tabla 5x5
    if(selected[0] == 17 && tableSize == 5){ // Si esa ficha fue la primera en darse vuelta de las dos
        pairs = pairs + 1; // Se cuenta como par
        selected = []; // Se vacia el array
        idKeep = []; // Se vacia el array
        keepPlaying = true; // Se puede seguir jugando
        alert("Encontraste la ficha bonus!")
        bonusScore(player); // Puntaje extra
    } else if(selected[1] == 17 && tableSize == 5){ // Si esa ficha fue la segunda en darse vuela de las dos
        pairs = pairs + 1;
        document.getElementById(idKeep[0]).classList.remove("showCard"); // Se vuelve a esconder la primer ficha que se dio vuelta
        document.getElementById(idKeep[0]).parentElement.classList.remove("noMoreClicks"); // Se vuelve a permitir el click en la primer ficha que se dio vuelta
        selected = [];
        idKeep = [];
        keepPlaying = true;
        alert("Encontraste la ficha bonus!");
        bonusScore(player);
    }
}

function bonusScore(player){ // Puntaje extra
    if(player == 1){
        scoreOne = scoreOne + 100;
        document.getElementById(player).innerHTML = profiles[0].nickname + " " + ":" + " " + scoreOne + " " + "puntos";
    } else if(player == 2){
        scoreTwo = scoreTwo + 100;
        document.getElementById(player).innerHTML = profiles[1].nickname + " " + ":" + " " + scoreTwo + " " + "puntos";
    }
}

function matchesInfo(){ // Información de las partidas jugadas
    matches = matches + 1;
    document.getElementById("matches").innerHTML = "Partidas jugadas:" + " " + matches;
    if(scoreOne > scoreTwo){
        matchesOne = matchesOne + 1;
        document.getElementById("matchesOne").innerHTML = "Partidas ganadas por" + " " + profiles[0].nickname + ":" + " " + matchesOne;
    } else if(scoreTwo > scoreOne){
        matchesTwo = matchesTwo + 1;
        document.getElementById("matchesTwo").innerHTML = "Partidas ganadas por" + " " + profiles[1].nickname + ":" + " " + matchesTwo;
    } else{
        ties = ties + 1;
        document.getElementById("ties").innerHTML = "Partidas empatadas:" + " " + ties;
    }
}

function soundControl(){ // Sonido para el juego 
    if(soundState == true){ // si el sonido esta activado
        soundState = false; 
        rightChoice.muted = true; // todos los sonidos con .muted = true se apagan
        flipCard.muted = true;
        playerOneWins.muted = true;
        playerTwoWins.muted = true;
        document.getElementById("soundControl").innerHTML = "Activar sonido";
    } else{
        rightChoice.muted = false; // muted se desactiva
        flipCard.muted = false;
        playerOneWins.muted = false;
        playerTwoWins.muted = false;
        document.getElementById("soundControl").innerHTML = "Desactivar sonido";
    }
}

function getNames(){ // Consigo los nombres de los jugadores del localStorage para usarlos en el Memotest
    var names = localStorage.getItem("profiles");
    profiles = JSON.parse(names);
}

/*
function getMemoAppScore(){
    var appMemoScore = localStorage.getItem("score");
    memoScore = JSON.parse(appMemoScore);
}
*/

function saveScores(){ // Guardo el puntaje del jugador 1 y 2 en el localStorage 
    localStorage.setItem("scoreOne", JSON.stringify(scoreOne));
    localStorage.setItem("scoreTwo", JSON.stringify(scoreTwo));
}

function loadScores(){ // Cargo el puntaje del jugador 1 y 2 
    var firstScore = localStorage.getItem("scoreOne");
    firstGlobalScore = JSON.parse(firstScore);
    var secondScore = localStorage.getItem("scoreTwo");  
    secondGlobalScore = JSON.parse(secondScore);
}




////////////////////////////// PRUEBAS ANTERIORES ///////////////////////////////

/*
function bonus(idKeep){
    if(selected == 17 && tableSize == 5){
        pairs = pairs + 1;

    }
}
*/

/*
function createTable(){
    generateMatrix();
    tiles();
    document.getElementById("container").innerHTML = "";
    for(i=0;i<tableSize;i++){
        document.getElementById("container").innerHTML += "<div style='width:1000px;' id='row"+i+"'></tr>";
        for(j=0;j<tableSize;j++){
            document.getElementById("row"+i).innerHTML += "<div><img src='img/frame.svg' id="+i+j+" onclick='game(\""+i+j+"\","+[i]+","+[j]+")'></div>";
        }
    }
}

function createTable(){
    generateMatrix();
    tiles();
    document.getElementById("container").innerHTML = "";
    for(i=0;i<tableSize;i++){
        document.getElementById("container").innerHTML += "<div id='row"+i+"'></tr>";
        for(j=0;j<tableSize;j++){
            document.getElementById("row"+i).innerHTML += "<div class='flip-card'><div class='flip-card-inner'><div class='flip-card-front'><img id="+i+j+" onclick='game(\""+i+j+"\","+[i]+","+[j]+")'></div><div class='flip-card-back'></div></div>";
        }
    }
}

var div = document.createElement("div");
        div.setAttribute("id", "info");
        document.getElementById("morePoints").appendChild(div);
        var p = document.createElement("p")
        p.setAttribute("id", "fifth");
        div.appendChild(p);
        document.getElementById("fifth").innerHTML = "¡Encontra la bandera de Estados Unidos para sumar 100 puntos extra!"




///// CODIGO ANTERIOR //////

/*

// Declaración de variables 

var player = 1; // jugador
var matrix = []; // tamaño del tablero
var positions = []; // guardo las posiciones de la matriz en un objeto
var selected = []; // guardo los valores de las matriz para compararlos y buscar la imagen que corresponda
var idKeep = []; // guardo los id de las imagenes
var tableSize = 0; // tamaño de la tabla
var pairs = 0; // contador de pares
var scoreOne = 0; // puntaje del jugador 1
var scoreTwo = 0; // puntaje del jugador 2
var keepPlaying = true; // estado del juego 
var theme = 0; 
var namePlayerOne;
var namePlayerTwo;

function startGame(){
    playerName();
    createTable();
}

function changeTheme(){
    theme = document.getElementById("theme").value;
    if(theme == "blueSpace"){
        document.getElementsByTagName("body").classList.add("space");
    } else if(theme == "aurora"){
        document.getElementsByTagName("body").classList.add("aurora");
    }
}

function changePlayer(){  // función que cambia de jugador
    if(player == 1){
        player = 2;
        document.getElementById("1").classList.remove("player");
        document.getElementById("2").classList.add("player");
        document.getElementById("1").classList.remove("player");
    } else if(player == 2){
        player = 1;
        document.getElementById("1").classList.add("player");
        document.getElementById("2").classList.remove("player");
    }
}

function createTable(){ // función que crea la tabla
    generateMatrix(); // ejecuta la función que genera la matriz 
    tiles(); // ejecuta la función que asigna valores de a pares a las posiciones de la matriz
    document.getElementById("container").innerHTML = "";
    for(i=0;i<tableSize;i++){
        document.getElementById("container").innerHTML += "<div class='align' id='row"+i+"'></div>";
        for(j=0;j<tableSize;j++){
            document.getElementById("row"+i).innerHTML += "<div class='size'><img src='img/frame.svg' id="+i+j+" onclick='game(\""+i+j+"\","+[i]+","+[j]+")'></div>";
        }
    }
}

function generateMatrix(){ // función que genera la matriz según el valor del select
    tableSize = parseInt(document.getElementById("pick").value); // toma el valor
    matrix = []; // vacia el array de la matriz
    positions = []; // vacia el array el array de posiciones
    for(i=0;i<tableSize;i++){
        matrix.push([]);
        for(j=0;j<tableSize;j++){
            matrix[i].push(0);
            positions.push({"row":i, "col":j});
        }
    }
    shuffler(positions); // se mezclan el array de posiciones
}

function tiles(){ // función que asigna valores de a pares
    if(tableSize % 2 == 0){ // si el tamaño de la tabla es par
        for(i=0;i<Math.floor((tableSize*tableSize)/2);i++){
            matrix[positions[i].row][positions[i].col] = flags[i].value;
            matrix[positions[i+1].row][positions[i+1].col] = flags[i].value;
            positions.splice(0,1); // remueve la posicion i actual para que no se sobrescriba en el próximo ciclo del for
        }
    } else if(tableSize % 2 !== 0){ // si el tamaño de la tabla es impar
        for(i=0;i<Math.floor((tableSize*tableSize)/2);i++){
            matrix[positions[i].row][positions[i].col] = flags[i].value;
            matrix[positions[i+1].row][positions[i+1].col] = flags[i].value;
            positions.splice(0,1);
        }
        for(i=0;i<matrix.length;i++){ // busca uno de los 0 que se repite tres veces y lo cambia por el valor 17 
            if(matrix[i].indexOf(0) !== -1){
                var x = matrix[i].indexOf(0);
                matrix[i][x] = flags[17].value;
                break
            }
        }
    }
}

function game(id,pos1,pos2){

    if(keepPlaying == true){ 
        selected.push(matrix[pos1][pos2]); // guardo la posición de la matriz en la que se hizo click en el array selected
        idKeep.push(id); // guardo el id del elemento en el que se hizo click
        flip(idKeep); // función que muestra la bandera. Se pasa el array idKeep como parametro.
        if(selected.length === 2){ // cuando el array que guarda las posiciones tenga dos posiciones dentro 
            keepPlaying = false; // no se puede hacer click en el resto de las fichas
            if(selected[0] === selected[1]){ // si los valores de las posiciones de la matriz dentro del array coinciden 
                selected = []; // vaciar el array para poder elegir otras dos posiciones
                idKeep = []; // vaciar el array para obtener nuevos ids
                pairs = pairs + 1; // sumar uno al contador de pares que controla el estado del juego
                score(player); // ejecutar la función score, pasandole como parametro el jugador, de manera que le otorgue los puntos al jugador actual. 
                keepPlaying = true; // se puede volver a hacer click en las demas fichas
            } else{
                changePlayer(); // cambia el turno 
                setTimeout(back, 1000, idKeep); // ejecuta la función que vuelve a poner las fichas boca abajo con un retraso de un segundo para poder ver las fichas que se dieron vuelta.
                selected = []; // se vacia selected para seguir jugando 
                idKeep = []; // se vacia idKeep para seguir jugando 
            }
            if(pairs == (tableSize*tableSize)/2){ // si el valor de pairs es igual a la cantidad de pares que hay que encontrar 
                theEnd(); // se ejecuta la función de fin del juego, informa si un jugador gano o si hubo empate.
            }
            
        }
    }
}

function flip(idKeep){ // funcion que da vuelta la ficha
    if(selected.length === 1){ // si selected tiene un valor dentro 
        document.getElementById(idKeep[0]).setAttribute("src", flags[selected[0]].country); // agregar imagen 
        document.getElementById(idKeep[0]).classList.add("noMoreClicks"); // deshabilitar el click en esa ficha
        if(selected == 17 && tableSize == 5){
            if(player == 1){
                scoreOne = scoreOne + 100;
                document.getElementById(player).innerHTML = "Jugador" + " " + player + " " + ":" + " " + scoreOne + " " + "puntos";
            } else if(player == 2){
                scoreTwo = scoreTwo + 100;
                document.getElementById(player).innerHTML = "Jugador" + " " + player + " " + ":" + " " + scoreTwo + " " + "puntos";
            }
        }
    } else{ 
        document.getElementById(idKeep[1]).setAttribute("src", flags[selected[1]].country); // agregar segunda imagen
        document.getElementById(idKeep[1]).classList.add("noMoreClicks"); // deshabilitar el click en esa imagen
    }
}

function back(idKeep){ // función que vuelve a poner las fichas boca abajo
    document.getElementById(idKeep[0]).setAttribute("src", "img/frame.svg"); // coloca la imagen de ficha boca abajo a la primera imagen seleccionada
    document.getElementById(idKeep[1]).setAttribute("src", "img/frame.svg"); // lo mismo pero con la segunda
    document.getElementById(idKeep[0]).classList.remove("noMoreClicks"); // deshabilita el click en la primera imagen
    document.getElementById(idKeep[1]).classList.remove("noMoreClicks"); // lo mismo con la segunda
    keepPlaying = true; // se puede volver a hacer click en el resto de las imágenes. Sino, luego de ejecutar back, keepPlaying se mantiene en false y no se puede seguir jugando. 
}

function score(player){ // función que otorga puntajes según el tamaño de la tabla
    if(player == 1){
        if(tableSize == 4){
            scoreOne = scoreOne + 10;
            document.getElementById(player).innerHTML = namePlayerOne + " " + ":" + " " + scoreOne + " " + "puntos";
        } else if(tableSize == 5){
            scoreOne = scoreOne + 50;
            document.getElementById(player).innerHTML = namePlayerOne + " " + ":" + " " + scoreOne + " " + "puntos"; 
        } else if(tableSize == 6){
            scoreOne = scoreOne + 100;
            document.getElementById(player).innerHTML = namePlayerOne + " " + ":" + " " + scoreOne + " " + "puntos";
        }
    } else if(player == 2){
        if(tableSize == 4){
            scoreTwo = scoreTwo + 10;
            document.getElementById(player).innerHTML = namePlayerTwo + " " + ":" + " " + scoreTwo + " " + "puntos";
        } else if(tableSize == 5){
            scoreTwo = scoreTwo + 50;
            document.getElementById(player).innerHTML = namePlayerTwo + " " + ":" + " " + scoreTwo + " " + "puntos";
        } else if(tableSize == 6){
            scoreTwo = scoreTwo + 100;
            document.getElementById(player).innerHTML = namePlayerTwo + " " + ":" + " " + scoreTwo + " " + "puntos";
        }
    }
}

function theEnd(){ // función que anuncia si alguien ganó o si hubo empate.
    if(scoreOne > scoreTwo){
        alert("¡" + namePlayerOne + " " + "ganó!");
        document.getElementById("1").classList.add("winner");
    } else if(scoreOne < scoreTwo){
        alert("¡" + namePlayerTwo + " " + "ganó!");
        document.getElementById("2").classList.add("winner");
    } else{
        alert("empate")
    }
}

function shuffler (array) { // función que mezcla el array de posiciones

	var currentIndex = array.length;
	var temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;

};

function reset(){ // función que reinicia el juego y puntajes
    if(scoreOne > scoreTwo){
        document.getElementById("1").classList.remove("winner");
    } else if(scoreOne < scoreTwo){ 
        document.getElementById("2").classList.remove("winner");
    }
    createTable();
    pairs = 0;
    scoreOne = 0;
    scoreTwo = 0;
    selected = [];
    idKeep = [];
    document.getElementById("1").innerHTML = namePlayerOne;
    document.getElementById("2").innerHTML = namePlayerTwo; 
}

function playerName(){
    namePlayerOne = prompt("Ingrese el nombre para el Jugador 1");
    namePlayerTwo = prompt("Ingrese el nombre para el Jugador 2");
    document.getElementById("1").innerHTML = namePlayerOne;
    document.getElementById("2").innerHTML = namePlayerTwo;
    scoreOne = 0;
    scoreTwo = 0;
    reset();
}

*/