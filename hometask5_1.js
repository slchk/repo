function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; 
  }
  
  let player1Result = 0;
  let player2Result = 0;
  for (let i = 0; i < 3; i++) {
    let player1 = getRandomInt(1, 6);
    let player2 = getRandomInt(1, 6);
    let num = i + 1;
    console.log('Игрок 1 (бросок ' + num + '): ' + player1);
    console.log('Игрок 2 (бросок ' + num + '): ' + player2);
    player1Result += player1;
    player2Result += player2;
  }
  
  console.log('Игрок 1 (Результат): ' + player1Result);
  console.log('Игрок 2 (Результат): ' + player2Result);
  
  if (player1Result > player2Result) {
    console.log('Игрок 1 выиграл!');
  } else if (player1Result < player2Result) {
    console.log('Игрок 2 выиграл!');
  } else if (player1Result === player2Result) {
    console.log('Ничья!');
  }  