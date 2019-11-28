var matrix = [[0,0,0], [0,0,0], [0,0,0]];
var player = 0;
var winOne = 0;
var winTwo = 0;
var tie = 0;
var endGame = true;

function buildTable(){ // construye la tabla
    getNames();
    playerName();
    document.getElementById("table").innerHTML = " ";
    for(let i=0;i<3;i++){
        document.getElementById("table").innerHTML += "<tr id='row"+i+"'></tr>";
        for(let j=0;j<3;j++){
           document.getElementById("row"+i).innerHTML += "<td id="+(i+1)+(j+1)+" onclick='game("+(i+1)+(j+1)+","+[i]+","+[j]+")'></td>";
        }
    }
}

function changePlayer(){ // cambia de jugador
    if(player == 0){
        player = 1;
    } else if(player == 1){
        player = 0;
    }
}

function game(id,pos1,pos2){ // se pasa como parametro el id para saber donde colocar la ficha y la posición de la matriz para saber donde hacer click y cambiar el valor según el jugador. 
    if(endGame==true){
        if(matrix[pos1][pos2] == 0){
            if(player == 0){
                matrix[pos1][pos2] = 1;
                document.getElementById("turn").innerHTML = "Turno del jugador 2";
                document.getElementById(id).innerHTML = "X";
                changePlayer();
            } 
            else if(player == 1){
                matrix[pos1][pos2] = -1;
                document.getElementById("turn").innerHTML = "Turno del jugador 1";
                document.getElementById(id).innerHTML = "O";
                changePlayer();
            }
        check();
        }
    }
}

function check(){ // valida la combinación ganadora
    
    if(matrix[0][0] + matrix[0][1] + matrix[0][2] == 3 || matrix[1][0] + matrix[1][1] + matrix[1][2] == 3 || matrix[2][0] + matrix[2][1] + matrix[2][2] == 3 || matrix[0][0] + matrix[1][0] + matrix[2][0] == 3 || matrix[0][1] + matrix[1][1] + matrix[2][1] == 3 || matrix[0][2] + matrix[1][2] + matrix[2][2] == 3 || matrix[0][0] + matrix[1][1] + matrix[2][2] == 3 || matrix[0][2] + matrix[1][1] + matrix[2][0] == 3){
        document.getElementById("state").innerHTML = profiles[0].nickname + " " + "ha ganado.";
        document.getElementById("state").style.display = "flex";
        winOne = winOne + 10;
        document.getElementById("playerOne").innerHTML = profiles[0].nickname + winOne;
        endGame = false;
        saveTatetiScore();
    } else if(matrix[0][0] + matrix[0][1] + matrix[0][2] == -3 || matrix[1][0] + matrix[1][1] + matrix[1][2] == -3 || matrix[2][0] + matrix[2][1] + matrix[2][2] == -3 || matrix[0][0] + matrix[1][0] + matrix[2][0] == -3 || matrix[0][1] + matrix[1][1] + matrix[2][1] == -3 || matrix[0][2] + matrix[1][2] + matrix[2][2] == -3 || matrix[0][0] + matrix[1][1] + matrix[2][2] == -3 || matrix[0][2] + matrix[1][1] + matrix[2][0] == -3){
        document.getElementById("state").innerHTML = profiles[1].nickname + " " + "ha ganado.";
        document.getElementById("state").style.display = "flex";
        winTwo = winTwo + 10;
        document.getElementById("playerTwo").innerHTML = profiles[1].nickname + winTwo;
        endGame = false;
        saveTatetiScore();
    } else if(matrix[0][0] && matrix[0][1] && matrix[0][2] && matrix[1][0] && matrix[1][1] && matrix[1][2] && matrix[2][0] && matrix[2][1] && matrix[2][2] !== 0){
        document.getElementById("state").innerHTML = "Empate.";
        document.getElementById("state").style.display = "flex";
        tie = tie + 1;
        document.getElementById("tie").innerHTML = "Empates:" + tie;
        endGame = false;
    }
}

function reset(){ // reinicia el juego
    matrix = [[0,0,0],[0,0,0],[0,0,0]]; 
    player = 0;
    endGame = true;
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
           document.getElementById((i+1)+""+(j+1)).innerHTML = " ";
           document.getElementById("state").style.display = "none";
        }
    }
}

function playerName(){ // Función que pide los nombres a los jugadores
    document.getElementById("playerOne").innerHTML = profiles[0].nickname;
    document.getElementById("playerTwo").innerHTML = profiles[1].nickname;
}

function getNames(){
    var names = localStorage.getItem("profiles");
    profiles = JSON.parse(names);
}

function saveTatetiScore(){
    localStorage.setItem("scoreOneTateti", JSON.stringify(winOne));
    localStorage.setItem("scoreTwoTaTeTi", JSON.stringify(winTwo));
}

function loadScores(){
    var tatetiOne = localStorage.getItem("scoreOneTaTeTi");
    scoreTatetiOne = JSON.parse(tatetiOne);
    var tatetiTwo = localStorage.getItem("scoreTwoTaTeTi");  
    scoreTatetiTwo = JSON.parse(tatetiTwo);
}

loadScore();