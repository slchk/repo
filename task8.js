// Замыканием сделайте функцию, которая считает и выводит количество своих вызовов.
function getCalls() {
  let count = 1;
  return function() {
    console.log(count);
    count++;
  }
}
let number = getCalls();
number();
number();

// 2. Сделайте функцию, каждый вызов который будет генерировать случайные числа от 1 до 100, 
// но так, чтобы они не повторялись, пока не будут перебраны все числа из этого промежутка. 
// Решите задачу через замыкания - в замыкании должен хранится массив чисел, которые уже были сгенерированы функцией.

function getArray() {
  let array = [];
  return function getRandom(){
    let random = Math.floor(Math.random() * (100 - 1 + 1) + 1);
    if(!array.includes(random)) {
      array.push(random);
    }
    if(array.length < 100){
      getRandom();
    }
  return array;
  }
}

let number2 = getArray();
console.log(number2())

// 3. Дан массив с числами [1, -2, 3, 0, 4, -5, 6, -11]. Оставьте в нем только положительные числа. Затем извлеките квадратный корень и этих чисел
let array3 = [1, -2, 3, 0, 4, -5, 6, -11];
function func(elem){
  return elem > 0
};
let arrTemp = array3.filter(func);
let result = arrTemp.map(function(elem) {
	return Math.sqrt(elem);
});
console.log(result); 

// 4. Дан массив с числами. Выведите последовательно его элементы используя рекурсию и не используя цикл.
let array4 = [1, 2, 78, 3, 56, 144]
function elements(arr){
  console.log(arr[0]);
  arr.shift();
  if(arr.length > 0) {
    elements(arr);  
  }
}
elements(array4);
// 5. Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее). Использовать рекурсию.
function summ(number) {
  let sum = number.toString().split('').reduce((acc, next) => {
    return +acc + +next;
  });
  if(sum > 9) {
    console.log(sum);
    summ(sum);
  }
  return sum;
}
summ(4678);