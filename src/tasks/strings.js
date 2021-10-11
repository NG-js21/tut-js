const stringTasks = {
   /**
    * вернуть строку, где все слова из исходной строки будут начинаться с заглавных букв
    */
   capitalizeWords(srcStr) {
      //набор переменных
      let symbol,                    //текущий символ
         symbolPrec,                 //предыдущий символ
         capitalizedString = "";     //строка с верхним регистром

      //перебор всех символов
      for (let i = 0; i < srcStr.length; i++) {
         symbol = srcStr[i];
         symbolPrec = i == 0 ? "." : srcStr[i - 1];  //в случае первого символа предыдущий установим на любой символ, но не букву

         //определяем, является ли предыдущий символ небуквой, а текущий буквой
         if (symbolPrec.toLowerCase() === symbolPrec.toUpperCase() && symbol.toLowerCase() !== symbol.toUpperCase()) {
            //поднимаем регистр
            symbol = symbol.toUpperCase();
         }
         //формируем строку
         capitalizedString += symbol;
      }

      return capitalizedString;
   },

   /**
    *
    * на вход подается строка со словами разделенными пробелами
    * вернуть строку в camelCase
    * 'just a string' => 'justAString'
    */
   toCamelCase(srcStr) {
      //набор переменных
      let symbol,                     //текущий символ
         capitalizedString = "";     //строка с верхним регистром

      //перебор всех символов
      for (let i = 0; i < srcStr.length; i++) {
         symbol = srcStr[i];

         //определяем, является ли символ пробелом
         if (symbol == " ") {
            i++;                                          //переходим нп следующий символ
            capitalizedString += srcStr[i].toUpperCase(); //поднимаем регистр и добавляем в формируемую строку
         }

         else { capitalizedString += srcStr[i] };
      }

      return capitalizedString;
   },

   /**
    * на вход подается строка в camelCase
    * вернуть строку в snake_case
    * 'camelCaseString' => 'camel_case_string'
    */
   camelToSnake(srcStr) {
      //набор переменных
      let symbol,                     //текущий символ
         camelCase = "";     //строка с верхним регистром

      //перебор всех символов
      for (let i = 0; i < srcStr.length; i++) {
         symbol = srcStr[i];

         if (srcStr[i].toUpperCase() == symbol) {
            symbol = "_" + srcStr[i].toLowerCase();
         }


         camelCase += symbol;
      }

      return camelCase;
   },

   /*на входе строка @srcString, в которой слова разделены пробелами, и ch - символ, из которого будем "рисовать" рамку
     вывести строку на консоль, так что-бы каждое слово было в новой строке а весь вывод был в текстовой псевдорамке
     например
     printInFrame('This string will be printed in frame', '*');
     ***********
     * This    *
     * string  *
     * will    *
     * be      *
     * printed *
     * in      *
     * frame   *
     * *********
      */
   printInFrame(srcString, ch) {
      //разбивка строки на слова
      let arrayWords = srcString.split(" ");

      //создание массива, содержащего значение длины каждого слова
      let lengthsList = [];
      for (let i = 0; i < arrayWords.length; i++) {
         lengthsList.push(arrayWords[i].length);
      }

      //упорядочивание значений
      let listOrdered = lengthsList.sort((a, b) => a - b);

      //самое длинное слово
      let maxLength = listOrdered[lengthsList.length - 1];

      //"упаковка" каждого слова в рамку
      let inFrame = arrayWords.reduce((accumulator, element) => {
         let string = ch + " " + element.padEnd(maxLength, ' ') + " " + ch;
         accumulator.push(string);
         return accumulator
      }, []);

      //формирование верхнего и ниженого края рамки
      let frametop = new Array(maxLength + 4).fill(ch).join("");

      return frametop + "\n" + inFrame.join("\n") + "\n" + frametop;
   },

   /**
    * вернуть строку, в которой все символы будут идти в обратном порядке
    * reverseString('abc') => 'cba';
    */
   reverseString(str) {
      return str.split("").reverse().join("");
   },

   /**
    * вернуть число, в котором цифры будут идти в обратном порядке
    * обратить внимание и правильно обработать случай когда число со знаком -
    */
   /*
   reverseNumber(2) => 2
   reverseNumber(12345) => 54321
   reverseNumber(543210) => 12345
   reverseNumber(1020) => 201
   reverseNumber(-345) => -543
    */
   reverseNumber(n) {
      let reversedString = "";                    //формируемая строка
      let arrayFromString = String(n).split("");  //массив с цифрами числа

      //проверка на отрицательное число
      if (arrayFromString[0] == "-") {
         reversedString = "-" + arrayFromString.slice(1).reverse().join("");
      }
      else { reversedString = arrayFromString.reverse().join("") }

      return +reversedString;
   },
   /**
    * нужно посчитать кол-во каждого символа в строке
    * считать 'a' и 'A' разными символами
    * вывести результат в любом удобном виде
    */
   charCount: function (str) {
      //объект: ключи - символы, их значения - количество каждого символа
      let list = {};

      //перебираем все символы
      for (let i = 0; i < str.length; i++) {
         //если такой симовл уже имеется в объекте, то увеличиваем его значение на 1
         if (list.hasOwnProperty(str[i])) {
            list[str[i]] = list[str[i]] + 1;
         }
         //если такой символ встречается впревые, то добавляем его значение в ключи
         else { list[str[i]] = 1 }
      }
      return Object.entries(list).join("\n");
   },

   /**
    * 
    * проверить являются ли строки анаграмами и вернуть true если да, иначе - вернуть false
    * пробелы игнорировать
    * примеры
    * areAnagrams('anagram', 'nag a ram') => true;
    * areAnagrams('Eleven plus two', 'Twelve plus one'); => true;
    * areAnagrams('O, Draconian devil', 'Leonardo da Vinci') => true;
    */
   areAnagrams: function (str1, str2) {
      //создаем массивы букв, без пробелов, для каждого string
      let arr1 = [],
         arr2 = [];
      for (let i = 0; i < str1.length; i++) {
         if (str1[i].toLowerCase() != str1[i].toUpperCase()) {
            arr1.push(str1[i].toLowerCase())
         }
      }
      for (let i = 0; i < str2.length; i++) {
         if (str2[i].toLowerCase() != str2[i].toUpperCase()) {
            arr2.push(str2[i].toLowerCase())
         }
      }

      //сверяем длины массивов, если они разные, то это уже не анаграмма
      if (arr1.length != arr2.length) { return false }

      //перебираем все буквы с 1-го массива и проверяем, есть ли они есть во втором
      do {
         let index = arr2.indexOf(arr1[0]);

         //если такой буквы нет, то возвращаем отрицательное значение
         if (index == -1) { return false }
         //если буква найдена, то удаляем ее с обоих массивов
         else {
            arr1.splice(0, 1);
            arr2.splice(index, 1);
         }

      } while (arr1.length != 0)

      return true
   },
   /**
    * 
    * проверить, является ли строка палиндромом
    * палиндром - это такая строка, которая одинаково читается в обе стороны
    * примеры:
    * isPalindrome('a') => true;
    * isPalindrome('abc') => false;
    * isPalindrome('aabbaa') => true;
    */
   isPalindrome: function (str) {
      let str1 = str.toLowerCase();
      let str2 = str1.split("").reverse().join("");
      return str1 == str2;
   },
};
