
$("#PositionsBox").hide();

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}


var acc = document.getElementsByClassName("dropbtn");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");
        var navpanel = this.nextElementSibling;
        if (navpanel.style.display === "block") {
            navpanel.style.display = "none";
        } else {
            navpanel.style.display = "block";
        }
    }
}

var DisplaycurrentPos = document.getElementById("currentPositions"); 


DisplaycurrentPos.onchange = function(){ 
	if($("#currentPositions").hasClass("show-Positions")){ 
		$("#PositionsBox").hide();
		$("#currentPositions").removeClass("show-Positions"); 
		$("#currentPositions").addClass("hide-Positions");
		
	}
	else{	
		$("#PositionsBox").show();
		$("#currentPositions").removeClass("hide-Positions");
		$("#currentPositions").addClass("show-Positions"); 
	}	
} 




	