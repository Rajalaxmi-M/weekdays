
		
var i=2;
$("#but").click(function(){
	
	
var a=document.getElementById("but");
var b = document.createElement("input");
b.setAttribute("type", "text" );
b.setAttribute("placeholder", "Add new Items" );  
b.setAttribute("id", "text"+i++ );
b.setAttribute("required", "1" );

var inp = document.getElementById("input");
	inp.appendChild(b);
	var a=i-2;
	
	console.log(b);
	$("#text"+a).before("<input type='checkbox' id='check'  />");
	$('input[type="checkbox"]').click(function(current){
		this.remove();
	 var d = document.getElementById('input'); 
	var h=document.getElementById("check")
	var tbx = document.getElementById('text'+a); 
	
	d.removeChild(tbx);
	
	 	//document.getElementById('check').hide();  
	 

	});
 


  
	});
	
	
