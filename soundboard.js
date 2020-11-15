//kick
var kickButton = document.getElementById("kick");
kickButton.addEventListener('click', function(){
    var kick = new Audio("kick.wav");
    kick.play();
})
//snare
var snareButton = document.getElementById("snare");
snareButton.addEventListener('click', function(){
    var snare = new Audio("snare.wav");
    snare.play();
})
//tom
var tomButton = document.getElementById("tom");
tomButton.addEventListener('click', function(){
    var tom = new Audio("tom.wav");
    tom.play();
})
//hat
var hatButton = document.getElementById("hat");
hatButton.addEventListener('click', function(){
    var hat = new Audio("hat.wav");
    hat.play();
})
