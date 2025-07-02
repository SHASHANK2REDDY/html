const incrementbutton=document.getElementById("id1");
const decrementbutton=document.getElementById("id2");
const decrement5=document.getElementById("id3");
const increment5=document.getElementById("id5");
const buttons=document.getElementById("id");
const submits=document.getElementById("id4");
let count=0;
incrementbutton.addEventListener("click",function(){
	console.log("clicked");
	count=count+1;
	buttons.textContent=count;
})
decrementbutton.addEventListener("click",function(){
	if(count>=0)
	{
		
	    count=count-1;
	    buttons.textContent=count;
	}
	else{
		alert("negative values or not allowed");
	}
})
increment5.addEventListener("click",function(){
	count=count+5;
	buttons.textContent=count;
})
decrement5.addEventListener("click",function(){
	if(count>=5)
	{
		count=count-5;
	    buttons.textContent=count;
	}
	else{
		alert("decresing 5 is not possible");
	}
})
submits.addEventListener("click",function(){
    count=0;
	buttons.textContent=count;
})

