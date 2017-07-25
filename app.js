
var interval ;

window.onload = function() {
     
    interval= setInterval(generarFiguraAleatoria, 400);

};


function generarFiguraAleatoria(){

    var imgComputer = document.getElementById("imgComputer");

    var computerChoice = Math.random();
    
        if (computerChoice < 0.34) {
            imgComputer.src="img/piedra.jpg";
        } else if(computerChoice <= 0.67) {
            imgComputer.src="img/papel.jpg";
        } else {
             imgComputer.src="img/tijera.jpg";
        } 
           
}


//Pedir eleccion del usuario
var userChoice = prompt("Do you choose rock, paper or scissors?");

//Calcular eleccion del computador
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} 
console.log("Computer: " + computerChoice);


//obtener el resultado del juego
var resultado=compare(userChoice,computerChoice);

alert("El ganador es "+resultado);

//Funcion que valida la eleccion del usuario y el computador 
function compare(choice1,choice2){
    
    //Comparar que los resultado no sean iguales 
    if(choice1===choice2){
        return "The result is a tie!";   
    }else if (choice1=="rock"){ //Validaciones en caso de que el usuario seleccione roca
        
        if(choice2==="scissors"){
            return "rock wins";   
        }else{
            return "paper wins";   
        }
            
    }else if (choice1=="paper"){//Validaciones en caso de que el usuario seleccione papel
        
        if(choice2==="rock"){
            return "paper wins";   
        }else{
            return "scissors wins";   
        }
   
    }else if(hoice1=="scissors"){//Validaciones en caso de que el usuario seleccione tijeras
        
        if(choice2==="rock"){
            return "rock wins";   
        }else{
            return "scissors wins";   
        }
        
    }
}