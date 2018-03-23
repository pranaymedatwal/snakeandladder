
		var id1=0;
		var id2=0;
		var player=1;

$(document).ready(function(){
	$("button").click(function(){
		var	x=((Math.floor(Math.random() * 6) + 1));
		
			if(player==1){
			  document.getElementById("turn").innerHTML="player1";
				document.getElementById("dice").innerHTML=x;
				var z=id1;
			  id1=id1+x;
			  player=2;
			  if(x==6&&id1<100){
				player=1;
			   }

			   id1=check(id1);
			   if(id1<100){
			   document.getElementById(id1).style.backgroundColor="red";
			   document.getElementById(z).style.backgroundColor="transparent";
			   }
			   if(id1>100){
				
			   id1=id1-x;
			   document.getElementById(id1).style.backgroundColor="red";
			   	}

			}
			else
			if(player==2){
				document.getElementById("turn").innerHTML="player2";
				var y=((Math.floor(Math.random() * 6) + 1));
				document.getElementById("dice").innerHTML=y;
				var z=id2;
				id2=id2+y;
				player=1;
				 if(y==6&&id2<100){
					player=2;
				 }
				id2=check(id2);
				document.getElementById(id2).style.backgroundColor="green";
				document.getElementById(z).style.backgroundColor="transparent";
				 if(id2>100){
			    id2=id2-y;	
			   	document.getElementById(id2).style.backgroundColor="green";
				}
				}
   });
});
function check(id)
{ var id;
	if(id==100){
  	on();
  }
  if(id==19){
  	id=76;
  	alert("yeah");
  	return id;
  }
  else
  	if(id==86){
  		id=47;
  		alert("oops sorry");
  		return id;
  	}
  	else
  		if(id==99){
  			id=24;
  			alert("oops sorry");
  			return id;
  		}
  else
  	if(id==36){
  		id=4;
  		alert("oops sorry");
  		return id;
  			

  	}
  	else
  		if(id==9){
  			id=69;
  			alert("yeah");
  			return id;
  			
  		}
  {
  	return id;
  }
}
function on() {
    document.getElementById("overlay").style.display = "block";
}