// поменять массив в обратном порядке - [1,2,3,4,5,6] [6,5,4,3,2,1]
let arr1 = [1,2,3,4,5,6]
function reverseNumbers(arr11) {
    return arr11.reverse();
} 
  console.log(reverseNumbers(arr1));


// найти максимальное значение числа в массиве ([3,67,15...]
let arr = [3,67,15];
let max = arr[0];
function getMax(arr) {
  for (let i = 0; i < arr.length; i++){
  if (max < arr[i]) {
  return max = arr[i];
  }
}}
console.log(getMax(arr));


//записать в массив ряд фибаначи начиная с N члена с длинной массива M
let number = 3;
let length = 5;
let array = [];
createArray(array, number, length);
console.log(array);

function fib(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

function createArray(array, n, m) {
  nextN = fib(n);
  for (i = 0; i < m; i++) {
  array.push(nextN);
  nextN = fib(n + 1);
  n++;
  }
}

// 4) даны 2 4-хзначных числа с неповторяющимися цифрами, надо определить 
// сколько цифр в этих числах совпадают по значению и позиции и сколько только по значению (3487 и 3794 ---> 1 и 2 )

function qualAndCount(firstNumber, secondNumber) {
  let qual = 0;
  let count = 0;
  for(let i = 0; i < firstNumber.length; i++) {
    if(firstNumber[i] === secondNumber[i]){
      count++;
    }
    for(let j = 0; j < secondNumber.length; j++) {
    if(firstNumber[i] === secondNumber[j]) {
      qual++;
    }
    }
  }
console.log(qual, count);
}

qualAndCount('3487', '3794')

// 5) сортировка массива по возрастанию/убыванию
let arr5 = [1,7,3,8,5,9]
function sortArr(arr5) {
return arr5.sort();
} 
console.log(sortArr(arr5));


let arr51 = [1,7,3,8,5,9]
function sortArr1(arr51)  {
  return arr51.sort((a, b) => b - a);
} 
console.log(sortArr1(arr51));


// 6) удалить из массива все повторяющиеся элементы
let arr6 = [2,3,2,5,6,2]
uniqueArray = arr6.filter(function(item, pos) {
  return arr6.indexOf(item) == pos;
})
console.log(uniqueArray);
