var winner = false;
 
 // Single boundary turns red
window.onload = function() {
  document.getElementById("boundary1").onmouseover = function()
  {
      this.style.backgroundColor = "red";
  }
}

// All boundaries glow red on hover 

function Allboundaries() {
    var i;
    for (i = 0; i < document.querySelectorAll('.boundary').length; i++) {
        document.querySelectorAll('.boundary')[i].onmouseover = changeColor;
    }
};
function changeColor() {
    var i;
    winner = true;
    for (var i = 0; i < document.querySelectorAll('.boundary').length; i++) {
        document.querySelectorAll('.boundary')[i].style.backgroundColor = "red";
    }
}

// show alerts lost or win 
function Endmaze() {
    document.getElementById('end').onmousemove = end;
};

function end(){   
        if(winner) {
            window.alert("Sorry, you lost. :[");
        } else {
            window.alert("You win! :]");
        
}}

// for onload multiple function
window.onload = function() {
    Endmaze();
    Allboundaries();
    startClick();
};


  
//Restartable maze
function startClick() {
    document.getElementById('start').onclick = start;
};
// function start(){   
//     var i;
//         for (i = 0; i < document.querySelectorAll('.boundary').length; i++) {
//             document.querySelectorAll('.boundary')[i].onmouseover = RestartableMaze;
//         }
    
// };
// function RestartableMaze() {
//         var i;
//         winner = true;
//         for (var i = 0; i < document.querySelectorAll('.boundary').length; i++) {
//             document.querySelectorAll('.boundary')[i].style.backgroundColor = "#eeeeee";
//         }
//     }












// var alerted =false;// used to remove multiple alert
// var stclick=false;// stores value to check player clicked start or not
// var stime;// stores value when S is clicked
// var mousecur=false;// stores value of cursor traversing from inside or outside


// //start function invoked when S is clicked
// function start(){
// 	mousecur=true;
// 	stclick=true;
// 	stime=Date.now();
// 	ondiv=true;
// var x= document.getElementsByClassName("boundary");
// var i;
// for(i=0;i<x.length;i++){
// 	x[i].style.backgroundColor="#eeeeee";
// }
//     if(alerted==true) {
// 		window.alerted=false;
		
// }
// }


// // end function is invoked when E is clicked
// function end(){

// 	if(stclick && mousecur){
// 		var etime=Date.now();
// 		var tgap=etime-stime;
// 		var tgaps=tgap/parseFloat(1000);
// 		alert("Yeah!!, You completed in:"+ tgaps+"s");

// 	}
// 	else if(stclick)
// 		alert("No cheating, You moved cursor from outside maze")

// 		else

// 			alert("Please, Don't Cheat!!")

// }

// /*
// // Use this when color change required for first boundary only
// function changecolor(){
// 	document.getElementById("boundary1").style.backgroundColor="red";
// 	alert("you touched the boundary please try again!!!!");
// }
// */
// // changecolor function to change color of all boundary to red
// // function changecolor(){
// // stclick=false;

// // var x= document.getElementsByClassName("boundary");
// // var i;
// // for(i=0;i<x.length;i++){
// // 	x[i].style.backgroundColor="red";
	
// // }

// //     if (!window.alerted) {
// // window.alert("Sorry!! you lost :( ");
// // 	window.alerted=true;}
// // }


// function outofdiv(){
// 	mousecur=false;
// }