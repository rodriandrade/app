/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var image;

var profiles = [
    {
        name: "",
        nickname: "",
        photo: "",
    },
    {
        name: "",
        nickname: "",
        photo: "",
    }
];

var score = [
    {
        globalScore: "",
        tatetiScore: "",
        memotestScore: "",
        snakeScore: ""
    },
    {
        globalScore: "",
        tatetiScore: "",
        memotestScore: "",
        snakeScore: ""
    }
];

var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        console.log('Received Event: ' + id);

        if(localStorage.length !== 0){
            showProfiles();
            getMemoScore();
            getTaTeTiScore();
            buildProfile();
            buildScores();
            showGames();
            hideForm();
        } else{
            profile();
        }

        let b = document.getElementById("buttonOne");
        b.removeAttribute("disabled");
        //b.onclick = takePicture("pictureOne");
        b.setAttribute("onclick", "takePicture('pictureOne')");
        b.disabled = false;

        let b2 = document.getElementById("buttonTwo");
        //b2.onclick = takePicture("pictureTwo");
        b2.setAttribute("onclick", "takePicture('pictureTwo')");
        b2.disabled = false;
    }
};

var nextStep = true;
var firstTateti;
var secondTateti;

function takePicture(id){ // Utilizar plugin de camara
   
     navigator.camera.getPicture(onSuccess, onFail, { 
         quality: 25,
         destinationType: Camera.DestinationType.DATA_URL,
         correctOrientation: true
     });
     
     function onSuccess(imageData){
         image = document.getElementById(id);
         image.src = "data:image/jpeg;base64," + imageData;
     }
     
     function onFail(message){
         alert('Failed because: ' + message);
     }
}

function profile(){ // Tomo los datos del formulario y los añado al objeto de perfiles
                    // Condiciones 
 
        var nameOne = document.getElementById("nameOne").value;
        if(nameOne == ""){
            nextStep = false;
        } else{
            profiles[0].name = nameOne;
        }
     
        var nicknameOne = document.getElementById("nicknameOne").value;
        if(nicknameOne == ""){
            nextStep = false;
        } else{
            profiles[0].nickname = nicknameOne;
        }

        var photoOne = document.getElementById("pictureOne").src;
        if(photoOne == ""){
            nextStep = false;
        } else{
            profiles[0].photo = photoOne;
        }

        var nameTwo = document.getElementById("nameTwo").value;
        if(nameTwo == ""){
            nextStep = false;
        } else{
            profiles[1].name = nameTwo;  
        }

        var nicknameTwo = document.getElementById("nicknameTwo").value;
        if(nicknameTwo == ""){
            nextStep = false;
        } else{
            profiles[1].nickname = nicknameTwo;
        }

        var photoTwo = document.getElementById("pictureTwo").src;
        if(photoTwo == ""){
            nextStep = false;
        } else {
            profiles[1].photo = photoTwo;
            nextStep = true;
        }

        if(nextStep == true){
            saveProfiles();
            buildProfile();
            buildScores();
            hideForm();
            showGames();
        }
}

function hideForm(){
    document.getElementById("form").style.display = "none";
}

function showGames(){
    document.getElementById("gamesContainer").style.display = "flex";
}

function buildProfile(){ // Muestro los perfiles de los jugadores en el inicio
    var photoPlayerOne = document.createElement("img");
    document.getElementById("playerOne").appendChild(photoPlayerOne);
    photoPlayerOne.setAttribute("src", profiles[0].photo);
    photoPlayerOne.setAttribute("alt", "photoOne");
    
    var namePlayerOne = document.createElement("p");
    document.getElementById("playerOne").appendChild(namePlayerOne);
    namePlayerOne.innerHTML = "Nombre del jugador:" + " " + profiles[0].name;

    var nicknamePlayerOne = document.createElement("p");
    document.getElementById("playerOne").appendChild(nicknamePlayerOne);
    nicknamePlayerOne.innerHTML = "Nickname:" + " " + profiles[0].nickname;

    var editOne = document.createElement("button");
    document.getElementById("playerOne").appendChild(editOne);
    editOne.innerHTML = "Editar perfil";

    var photoPlayerTwo = document.createElement("img");
    document.getElementById("playerTwo").appendChild(photoPlayerTwo);
    photoPlayerTwo.setAttribute("src", profiles[1].photo);
    photoPlayerTwo.setAttribute("alt", "photoTwo");

    var namePlayerTwo = document.createElement("p");
    document.getElementById("playerTwo").appendChild(namePlayerTwo);
    namePlayerTwo.innerHTML = "Nombre del jugador:" + " " + profiles[1].name;

    var nicknamePlayerTwo = document.createElement("p");
    document.getElementById("playerTwo").appendChild(nicknamePlayerTwo);
    nicknamePlayerTwo.innerHTML = "Nickname:" + " " + profiles[1].nickname;

    var editTwo = document.createElement("button");
    document.getElementById("playerTwo").appendChild(editTwo);
    editTwo.innerHTML = "Editar perfil";
    editTwo.set
}

function buildScores(){  // Obtengo los puntajes del jugador 1 y 2 en el Memotest y TaTeTi y los muestro en pantalla. También muestro los puntos en total entre los dos juegos para ambos  jugadores. 

    score[0].memotestScore = firstMemoScore;
    score[0].tatetiScore = firstTateti;
    score[0].globalScore = score[0].memotestScore + score[0].tatetiScore;
    var globalScoreOne = document.createElement("p");
    var memotestScoreOne = document.createElement("p");
    var tatetiScoreOne = document.createElement("p");
    document.getElementById("scoreOne").appendChild(globalScoreOne);
    document.getElementById("memotestOne").appendChild(memotestScoreOne);
    document.getElementById("tatetiOne").appendChild(tatetiScoreOne);
    globalScoreOne.innerHTML = "Puntaje global de" + " " + profiles[0].nickname + ":" + "" + score[0].globalScore;
    memotestScoreOne.innerHTML = "Puntaje Memotest de" + " " + profiles[0].nickname + ":" + "" + score[0].memotestScore;
    tatetiScoreOne.innerHTML = "Puntaje TaTeTI de" + " " + profiles[0].nickname + ":" + "" + score[0].tatetiScore;

    score[1].memotestScore = secondMemoScore;
    score[1].tatetiScore = secondTateti;
    score[1].globalScore = score[1].memotestScore + score[1].tatetiScore;
    var globalScoreTwo = document.createElement("p");
    var memotestScoreTwo = document.createElement("p");
    var tatetiScoreTwo = document.createElement("p");
    document.getElementById("scoreTwo").appendChild(globalScoreTwo);
    document.getElementById("memotestTwo").appendChild(memotestScoreTwo);
    document.getElementById("tatetiTwo").appendChild(tatetiScoreTwo);
    globalScoreTwo.innerHTML = "Puntaje global de" + " " + profiles[1].nickname + ":" + "" + score[1].globalScore;
    memotestScoreTwo.innerHTML = "Puntaje Memotest de" + " " + profiles[1].nickname + ":" + "" + score[1].memotestScore;
    tatetiScoreTwo.innerHTML = "Puntaje TaTeTi de" + " " + profiles[1].nickname + ":" + "" + score[1].tatetiScore;
    
}

function saveProfiles(){ // Guardo los perfiles
    localStorage.setItem("profiles", JSON.stringify(profiles));
}

function showProfiles(){ // Muestro los perfiles
    var bothProfiles = localStorage.getItem("profiles");
    profiles = JSON.parse(bothProfiles);
}

function getMemoScore(){ // Consigue los puntajes del jugador 1 y 2 en el Memotest
    var memoScore = localStorage.getItem("scoreOne");
    firstMemoScore = JSON.parse(memoScore);
    var memoScore = localStorage.getItem("scoreTwo");
    secondMemoScore = JSON.parse(memoScore);
}

function getTaTeTiScore(){ // Consigue los puntajes del jugador 1 y 2 en el TaTeTi
    var tatetiOne = localStorage.getItem("scoreOneTateti");
    firstTateti = JSON.parse(tatetiOne);
    var tatetiTwo = localStorage.getItem("scoreTwoTaTeTi");
    secondTateti = JSON.parse(tatetiTwo);
}

function resetScore(){ // Reiniciar puntaje
    score[0].globalScore = 0;
    score[0].memotestScore = 0;
    score[0].tatetiScore = 0;
    score[1].globalScore = 0;
    score[1].memotestScore = 0;
    score[1].tatetiScore = 0;

    document.querySelector("#scoreOne", "p").innerHTML = "Puntaje global de" + " " + profiles[0].nickname + ":" + "" + score[0].globalScore;
    document.querySelector("#memotestOne", "p").innerHTML = "Puntaje Memotest de" + " " + profiles[0].nickname + ":" + "" + score[0].memotestScore;
    document.querySelector("#tatetiOne", "p").innerHTML = "Puntaje Tateti de" + " " + profiles[0].nickname + ":" + "" + score[0].tatetiScore;
    document.querySelector("#scoreTwo", "p").innerHTML = "Puntaje global de" + " " + profiles[1].nickname + ":" + "" + score[1].globalScore;
    document.querySelector("#memotestTwo", "p").innerHTML = "Puntaje Memotest de" + " " + profiles[1].nickname + ":" + "" + score[1].memotestScore;
    document.querySelector("#tatetiTwo", "p").innerHTML = "Puntaje Tateti de" + " " + profiles[1].nickname + ":" + "" + score[1].tatetiScore;
}

app.initialize();