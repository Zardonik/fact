for( var i = 1;i < 100; i++ ){
 if(i%3==0 && i%2!==0){
 document.write("   " + i);
 } 
}

var firstNumber = Number(prompt("input num: "));
var j = 1;
for(var i=1; i <= firstNumber; i++){
	j *= i;
}

document.write(" ~~~~~>"+j);