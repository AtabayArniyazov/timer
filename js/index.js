// //Задача 1
// var numb = 1;

// while(numb < 101) {
// 	document.write(numb++ + "<br>");
// }
// ------------------------------------------------------
// //Задача 2
// function filter(arr) {
// 	for (var i = 0; i < arr.length; i++) {
// 		if (arr[i] > 0 && arr[i] < 10) {
// 			document.write(arr[i] + "<br>");
// 		}
// 	}
// }
// ------------------------------------------------------
// //Задача 3
// function summOfArr(arr) {
// 	var summ = 0;
// 	for (var i = 0; i < arr.length; i++) {
// 		summ = summ + arr[i];
// 	}
// 	document.write(summ);
// }
// ------------------------------------------------------
// //Вопрос 4: 
// знаю ли Я методы substr, slice, splice, Math.round, Math.ceil, pop, shift?
// Ответ: да, знаю
// ------------------------------------------------------
// //Задача 5
// var str = "123456789";

// for (var i = 0; i < str.length; i++) {
// 	document.write(str[i].repeat(i+1) + "<br>");
// }
// //либо можно ещё с помощью тэга "pre"
// ------------------------------------------------------
// //Вопрос 6
// Умею ли Я работать с DOM? Знаете ли Я методы getElementsByClassName, querySelectorAll?
// Я учил про то, как работать с DOM, но УВЕРЕННО сказать что умею, не могу (т.к. нужна оценка со стороны)
// Метод getElementsByClassName, getElementsByIdName знаю (тоже учил)
// А вот про querySelectorAll честно не знаю (((
// ------------------------------------------------------
// // 7


inputButton.onclick = function start() {
	window.timerId = window.setInterval(count, 500);
}

function stop(){
	window.clearInterval(window.timerId);
}

function count() {
	var numb = document.getElementById('numb');
	var number = parseInt(numb.innerHTML) - 1;
	numb.innerHTML = number;

	if (number === 0) {
		stop();
		var timeStop = document.getElementById('stop');
		timeStop.innerHTML = "Время вышло!";
	}
}