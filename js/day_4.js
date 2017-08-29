function plusNFactory(n){
	function plusN(number){
		return (number+n);
	}
	return plusN;
}

function greetFactory(language){
	function greet(msg){
		console.log(language + ": " + msg);
	}
	return greet;
}

var english = greetFactory("English");
english("Happy Independence Day");

var a = 3;

function something(){
	console.log(a);
	var a = 5;
	console.log(a);
}

console.log(a);

a.map(square);
a.map(sq);

function square(item){
	return item*item;
}

function sq(item){
	console.log(item*item);
}