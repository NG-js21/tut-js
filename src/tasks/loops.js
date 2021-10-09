const loopsTasks = {
  /**
   * 
   * @param {} n - целое число
   * нужно посчитать и вернуть сумму всех чисел начиная с 1 и до n
   */
  sumFromOneToN: function (n) {
  let sum = (n * (n + 1)) / 2; //формула суммы последовательных целых
  return sum
  },

  /**
   * вывести не консоль строку посимвольно всеми доступными циклами. for, for of, while, do .. while
   */
  printString(str) { 
  //for (let i = 0; i < str.length; i++) {
  //    console.log(str[i]);
  //}

  //for (let letter of str) {
  //    console.log(letter);
  //}

  //let k = 0;
  //while (k < str.length) {
  //    console.log(str[k]);
  //    k++

  let n = 0;
  do {
      console.log(str[n]); n++
    } while (n < str.length)
},

  /**
   * на вход ф-ция получет 2 числа n, maxAttempts
   * n - максимальное число, maxAttemps - максимальное кол-во попыток угадывания
   * ф-ция генерирует псевдослучайное счисло между 1 и n
   * далее у пользователя есть maxAttemps попыток это число угадать
   * ф-ция должна запрашивать у пользователя число, через prompt
   * если пользователь угадал число - вернуть true, если все попытки использованы и число не угадано - false
   * использовать цикл do ... while
   */
  
  function guessNumber(n, maxAttempts) {
    //формируем случайное число
    let randomNum = parseInt(Math.random() * n + 1);

    //устанавливаем cчетчик
    let counter = 0;

    //переменная для числа, введенного пользователем
    let userNum = null;

    do {
        //запрашиваем данные у пользователя
        userNum = prompt(`Введите целое положительное число n – в пределах от 1 до ${n}`, 3);
        if (userNum === null) { throw 'Действие отменено' } else { userNum = +userNum }
        if (isNaN(userNum)) { console.error('Некорректное число.\nПовторите ввод.'); continue }
        else if (!Number.isInteger(userNum)) { console.error('Число "n" не должно быть дробным.\nПовторите ввод.'); continue }
        else if (userNum < 1 || userNum > n) { console.error(`Число "n" должно быть в диапазоне от 1 до ${n}.\nПовторите ввод.`); continue }

        //проверяем полученное число
        if (userNum == randomNum) { return true; break }
        else { counter++ }

    } while (counter < maxAttempts)

    return false
},

};
