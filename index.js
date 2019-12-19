
function main(){
var a = document.getElementById("name").value;
if(a==""){
	alert("Please Enter Your Name");
	location.reload();
}
else{
	div2(a);
}
}

function div2(a){
	var c= a;
    document.getElementById("user").innerHTML=c;


}
function select(a){
	var e=document.getElementById(a).value;
	alert(e);
}