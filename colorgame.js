var numsq=6;
var colors=genrancol(numsq);
var squares=document.querySelectorAll(".square");
var pickedcolor=pikcol();
var colordisplay=document.getElementById("colordisplay");
var mesg=document.getElementById("mesg");
var h1=document.querySelector("h1");
var resetbut=document.querySelector("#reset");
var mode=document.querySelectorAll(".mode")

 for(var i=0;i<mode.length;i++){
 	mode[i].addEventListener("click",function(){
 		mode[0].classList.remove("selected");
 	 	mode[1].classList.remove("selected");
		this.classList.add("selected");
		if(this.textContent==="Easy"){
			numsq=3;
		}
		else
		{
			numsq=6;
		}
		reset();
 		
 	});
 }

function reset(){
	colors=genrancol(numsq);
pickedcolor=pikcol();
colordisplay.textContent=pickedcolor;
mesg.textContent="";
resetbut.textContent="New Colours";

for(var i=0;i<squares.length;i++){
	if(colors[i]){
		squares[i].style.display="block";
squares[i].style.background=colors[i];
}
else{
	squares[i].style.display="none";
}
}
h1.style.background="steelblue";
}


resetbut.addEventListener("click",function()
{
reset();
});

colordisplay.textContent=pickedcolor;

for(var i=0; i<squares.length; i++){
	squares[i].style.background=colors[i];
	squares[i].addEventListener("click",function(){
	var clickedcolor= this.style.background;
		if(clickedcolor===pickedcolor){
			mesg.textContent="Correct";
			changecol(clickedcolor);
			h1.style.background=clickedcolor;
			resetbut.textContent="Play Again?";
		}
		else
		{
			this.style.background="#232323";
			mesg.textContent="Try Again";
		}
	});
}


function changecol(color){

	 for(var i=0;i<colors.length;i++)
	 {
	 	squares[i].style.background=color;
	 }
}

//Math.random()-gives any random value between 0-1
//Math.floor()-gives number without the decimal

function pikcol()
{
	var pik=Math.floor(Math.random() * colors.length);
	return colors[pik];
}

function genrancol(num){
	var arr =[]
	for(i=0;i<num;i++)
	{
		arr.push(randomcol())
	}
	return arr;
}

function randomcol(){
	var r =Math.floor(Math.random()*256);
	var g =Math.floor(Math.random()*256);
	var b =Math.floor(Math.random()*256);
	//rgb(22,23,33)
	return "rgb("+ r+ ", "+ g+ ", "+ b +")";
}