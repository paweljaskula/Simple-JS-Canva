function Write()
{
	var pjImie = "Paweł",
		pjNazwisko = " Jaskuła",
		pjNrIndex = " 44185";
	document.getElementById("przywitanie").innerHTML = pjImie + pjNazwisko + pjNrIndex;
}
function WriteText()
		{
			var pjtekst = document.getElementById("name").value;
			document.getElementById("napis").innerHTML = "Witaj "+pjtekst;
				
		}
function Hide(){
			var x = document.getElementById("napis");
			if (x.style.display == "block") {
				x.style.display = "none";
			} else
				{x.style.display = "block";}
		}
function setup2d(){
				var canvas = document.getElementById("myCanvas");
				if(canvas.getContext){
					var context = canvas.getContext("2d");
					context.fillStyle = "rgb(200,0,0)";
					context.fillRect(50,100,55,55);
					context.fillRect(215,100,55,55);
					context.fillRect(380,100,55,55);
					context.fillStyle = "rgb(0,0,200)";
					context.fillRect(380,155,55,55);
					context.fillRect(160,100,55,55);
					context.fillStyle = "rgb(0,200,0)";
					context.fillRect(105,100,55,55);
					context.font = "italic 30px 'Arial'";
					context.fillText("4", 65, 140);
					context.fillText("4", 230, 140);
					context.fillText("4", 395, 140);
					context.font = "italic 15px 'Arial'";
					context.fillText("2", 83, 120);
					context.fillText("1", 248, 120);
					context.fillText("0", 413, 120);

					context.save();
					
					}
					else{
						alert("Your browser does not support WebGL.")
					}
				}
function zmiana()
{
	var numer = Math.floor(Math.random()*4);
	var v1 = document.getElementById('t0').innerHTML;
	var v2 = document.getElementById('t1').innerHTML;
	var v3 = document.getElementById('t2').innerHTML;
	var v4 = document.getElementById('t3').innerHTML;
	switch (numer){
		case 0:
			document.getElementById('t4').innerHTML = v4;
			document.getElementById('t5').innerHTML = v2;
			document.getElementById('t6').innerHTML = v1;
			document.getElementById('t7').innerHTML = v3;
			break;
		case 1:
			document.getElementById('t4').innerHTML = v2;
			document.getElementById('t5').innerHTML = v3;
			document.getElementById('t6').innerHTML = v1;
			document.getElementById('t7').innerHTML = v4;
			break;
		case 2:
			document.getElementById('t4').innerHTML = v3;
			document.getElementById('t5').innerHTML = v1;
			document.getElementById('t6').innerHTML = v4;
			document.getElementById('t7').innerHTML = v2;
			break;
		case 3:
			document.getElementById('t4').innerHTML = v3;
			document.getElementById('t5').innerHTML = v4;
			document.getElementById('t6').innerHTML = v1;
			document.getElementById('t7').innerHTML = v2;
			break;
		
	}
	
}
function losowanie(){
	for (var i = 0 ; i < 4; i++) {
		var numer = Math.floor(Math.random()*10);
		document.getElementById('t'+i).innerHTML = numer;
	}
}




