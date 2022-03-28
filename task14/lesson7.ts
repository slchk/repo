// поменять массив в обратном порядке - [1,2,3,4,5,6] [6,5,4,3,2,1]
const arr1: number[] = [1, 2, 3, 4, 5, 6]
function reverseNumbers(arr11: number[]): number[] {
  return arr11.reverse()
}
console.log(reverseNumbers(arr1))

// найти максимальное значение числа в массиве ([3,67,15...]
const arr: number[] = [3, 67, 15]
function getMax(arrParam: number[]): number {
  let max: number = arr[0]
  for (let i = 0; i < arrParam.length; i++) {
    if (max < arrParam[i]) {
      max = arrParam[i]
    }
  }
  return max
}
console.log(getMax(arr))

//записать в массив ряд фибаначи начиная с N члена с длинной массива M
const number: number = 3
const lengthq: number = 5
const array: number[] = []
createArray(array, number, lengthq)
console.log(array)

function fib(n: number): number {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2)
}

function createArray(array: number[], n: number, m: number) {
  let nextN: number = fib(n)
  for (let i = 0; i < m; i++) {
    array.push(nextN)
    nextN = fib(n + 1)
    n++
  }
}

// 4) даны 2 4-хзначных числа с неповторяющимися цифрами, надо определить
// сколько цифр в этих числах совпадают по значению и позиции и сколько только по значению (3487 и 3794 ---> 1 и 2 )

function qualAndCount(firstNumber: string, secondNumber: string) {
  let qual: number = 0
  let count: number = 0
  for (let i = 0; i < firstNumber.length; i++) {
    if (firstNumber[i] === secondNumber[i]) {
      count++
    }
    for (let j = 0; j < secondNumber.length; j++) {
      if (firstNumber[i] === secondNumber[j]) {
        qual++
      }
    }
  }
  console.log(qual, count)
}

qualAndCount('3487', '3794')

// 5) сортировка массива по возрастанию/убыванию
let arr5: number[] = [1, 7, 3, 8, 5, 9]
function sortArr(arr5: number[]): number[] {
  return arr5.sort()
}
console.log(sortArr(arr5))

let arr51: number[] = [1, 7, 3, 8, 5, 9]
function sortArr1(arr51: number[]): number[] {
  return arr51.sort((a, b) => b - a)
}
console.log(sortArr1(arr51))

// 6) удалить из массива все повторяющиеся элементы
let arr6: number[] = [2, 3, 2, 5, 6, 2]
let uniqueArray = arr6.filter(function (item, pos) {
  return arr6.indexOf(item) == pos
})
console.log(uniqueArray)
