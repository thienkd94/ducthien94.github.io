// Bài 1
function sayHello() {
document.write('Xin chào các bạn');
}
sayHello();

//Bài 2
function sayHello1(str) {
	document.write('Xin chào ' + str);
	//Cách 2
	// document.write(`Xin chào ${str}`);
}
sayHello1('cả lớp');

//Bài 3
function sayHello2(str) {
	document.write('Xin chào' + ' ' + '"' + str + '"');
	//Cách 2
	// document.write(`Xin chào "${str}"`);
}
sayHello2('bà con');


//Bài 4
function sum(x, y) {
	console.log(x + y);
}
sum(3,5);

//Bài 5
function square(z) {
  console.log(z * z);
}
square(8);

//Bài 6
function century(year) {
  // console.log(Math.round((Math.ceil(year/100) + Math.floor(year/100))/2)); -> sai
  //Đáp án
  	console.log(Math.floor(year / 100) + 1); // -> Đúng
}
century(2019);