
//Deinir valores para las selecciones
var PIEDRA=1;
var PAPEL=2;
var TIJERA=3;

var interval ;

//Iniciar el efecto de seleccion de computador
window.onload = function() {
     
    interval= setInterval(generarFiguraAleatoria, 400);
    document.getElementById("btnReset").classList.add("resultOff");
    document.getElementById("btnReset").classList.remove("resultOn");
};

//Eevnto de seleccion del usuario
function play(choiceUser){

    var choiceComputer;
    clearInterval(interval);

    var imgComputer = document.getElementById("imgComputer");

    var computerChoice = Math.random();

        if (computerChoice < 0.34) {
             imgComputer.src="img/piedra.jpg";
             choiceComputer=1;
        } else if(computerChoice <= 0.67) {
             imgComputer.src="img/papel.jpg";
             choiceComputer=2;
        } else {
             imgComputer.src="img/tijera.jpg";
             choiceComputer=3;
        } 

var resultado=compare(choiceUser,choiceComputer);

document.getElementById("result").innerHTML=""+resultado;

document.getElementById("btnReset").classList.add("resultOn");
document.getElementById("btnReset").classList.remove("resultOff");

}

//Generar figura aleatoria
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

//Funcion que valida la eleccion del usuario y el computador 
function compare(choice1,choice2){
    
    //Comparar que los resultado no sean iguales 
    if(choice1===choice2){
        return "Empate !!";   
    }else if (choice1==PIEDRA){ //Validaciones en caso de que el usuario seleccione roca
        
        if(choice2===TIJERA){
            return "Ganaste !";   
        }else{
            return "Perdiste !";   
        }
            
    }else if (choice1==PAPEL){//Validaciones en caso de que el usuario seleccione papel
        
        if(choice2===PIEDRA){
            return "Ganaste !!";   
        }else{
            return "Perdiste";   
        }
   
    }else if(choice1==TIJERA){//Validaciones en caso de que el usuario seleccione tijeras
        
        if(choice2===PIEDRA){
            return "Perdiste !";   
        }else{
            return "Ganaste";   
        }
        
    }
}

//Funcion para jugar de nuevo
function reset(){
    interval= setInterval(generarFiguraAleatoria, 400);
    document.getElementById("result").innerHTML="";
    
    document.getElementById("btnReset").classList.add("resultOff");
    document.getElementById("btnReset").classList.remove("resultOn");

}