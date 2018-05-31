function Factorial(X) {

   if (X == 0 || X == 1) return 1;

   else return (X * Factorial (X - 1));

}

function SummFact(X) {

var sum = 0;

   for(var i =1; i<X+1; i++) {

       sum+=Factorial(i);

   }

return sum;

}

function  initSumF(elem) {

   var elem=elem.parentNode.childNodes[0];

 

   if( +elem.value > 170){elem.value="error !";return}

 

 
   console.log(elem.value=SummFact(+elem.value));

}



var word = 'hello';
var n = 5;
for (var i=0; i < n; i++) {
	if(i < n) {
		console.log(word);
	} else {
		console.log('error');
	}
}
