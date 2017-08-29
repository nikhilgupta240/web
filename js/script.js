// http://cb.lk/ngr172
// var mt = document.getElementById('myText')
// mt.innerHTML = 'some other stuff after body'
// var obj = {k1: function(){
// 	console.log("K1 of object obj")
// }, 
// k2: true, 
// k3: 10}
// obj.k1()
// var ml = document.getElementById('myList')
// var listString = ''
// var startTime = (new Date()).getTime()
// for(var i=1; i<=1000; i++){
// 	var val = i;
// 	if(i%3==0 && i%5==0){
// 		val = 'fizzbuzz'
// 	}else if(i%3==0){
// 		val = 'fizz'
// 	}else if(i%5==0){
// 		val = 'buzz'
// 	}
// 	listString += '<li> ' + val + ' </li>'
// }
// ml.innerHTML = listString
// var endTime = (new Date()).getTime()
// console.log(endTime-startTime)

// // ES6

// class Person{

// 	constructor(name, age, height){
// 		this.name = name;
// 		this.age = age;
// 	}

// 	greet(){
// 		console.log(this.name);
// 	}

// 	printAll(){
// 		console.log(this.age);
// 	}
// }
// for(var i=0; i<1; i--){
// 	console.log("Hello" + i);
// 	for(var j=0; j<10000; j++){

// 	}
// }
// var 	p2 = new Person("Nikhil", 21);

function goBack(){
	window.history.back();
}

function goForward(){
	window.history.forward();
}

function openNewTab(){
	window.open();
}