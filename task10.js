// Сделайте 3 промиса, в каждом из которых расположена функция setTimeout со случайно задержкой
// от 1 до 5 секунд. Пусть каждый промис своим результатом возвращает эту задержку. С помощью
// Promise.all получите массив результатов, найдите его сумму, выведите на экран.
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getTimeout() {
  return new Promise((res, rej) => {
    let random = getRandom(1, 5);
    setTimeout(() => {
      console.log(random);
      res(random);
    }, random * 1000);
  });
}

let promise1 = getTimeout();
let promise2 = getTimeout();
let promise3 = getTimeout();

Promise.all([promise1, promise2, promise3]).then((data) => {
  let sum = data.reduce((acc, next) => {
    return acc + next;
  });
  console.log(sum);
  return sum;
});

// Сделайте 3 промиса, в каждом из которых расположена функция setTimeout со случайно задержкой
// от 1 до 5 секунд. Пусть первый промис возвращает число 1, второй - число 2, третий - число 3.
// С помощью Promise.race дождитесь загрузки первого сработавшего промиса и выведите результат
// его работы на экран.
function getTimeout(i) {
  return new Promise((res, rej) => {
    let random = getRandom(1, 5);
    setTimeout(() => {
      console.log("number: " + i + ", timeout:" + random);
      res(i);
    }, random * 1000);
  });
}
let promise1 = getTimeout(1);
let promise2 = getTimeout(2);
let promise3 = getTimeout(3);

Promise.race([promise1, promise2, promise3]).then(function (value) {
  console.log("race " + value);
});

// Сделайте функцию getNum, которая возвращает промис, который с задержкой в 3 секунды выведет
// случайное число от 1 до 5. Создайте async функцию, которая с помощью await будет дожидаться
// результата getNum, затем возводить его в квадрат и выводить на экран.
function getNum() {
  return new Promise((res, rej) => {
    let random = getRandom(1, 5);
    setTimeout(() => {
      console.log(random);
      res(random);
    }, 3000);
  });
}

async function getRandomNumSqrt() {
  let result = await getNum();
  console.log(result * result);
  return result * result;
}

getRandomNumSqrt();

// Сделайте функцию getNum1, которая возвращает промис, который с задержкой в 3 секунды выведет
// случайное число от 1 до 5. Сделайте также функцию getNum2, которая возвращает промис, который
// с задержкой в 5 секунд выведет случайное число от 6 до 10. Создайте async функцию, которая с
// помощью await будет дожидаться результата getNum1, затем будет дожидаться результата getNum2,
// а затем найдет сумму полученных чисел и выведет на экран.
function getNum1() {
  return new Promise((res, rej) => {
    let random = getRandom(1, 5);
    setTimeout(() => {
      console.log(random);
      res(random);
    }, 3000);
  });
}
function getNum2() {
  return new Promise((res, rej) => {
    let random = getRandom(6, 10);
    setTimeout(() => {
      console.log(random);
      res(random);
    }, 5000);
  });
}
async function getSum() {
  let result1 = await getNum1();
  let result2 = await getNum2();
  console.log(result1 + result2);
  return result1 + result2;
}

getSum();
