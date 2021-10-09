const stringTasks = {
   /**
    * вернуть строку, где все слова из исходной строки будут начинаться с заглавных букв
    */
   capitalizeWords(srcStr) {
      
      comment2
   },

   /**
    *
    * на вход подается строка со словами разделенными пробелами
    * вернуть строку в camelCase
    * 'just a string' => 'justAString'
    */
   toCamelCase(srcStr) { },

   /**
    * на вход подается строка в camelCase
    * вернуть строку в snake_case
    * 'camelCaseString' => 'camel_case_string'
    */
   camelToSnake(srcStr) { },

   /**
      * 
      * вернуть строку, в которой все слова будут начинаться с большой буквы
      * считать что на вход подается строка, в которой все слова разделены одним пробелом
      * capitalize('this string will be capitalized') => 'This String Will Be Capitalized'
      */
   capitalizeWords: function (str) {

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
   printInFrame: function (srcString, ch) {

   },

   /**
    * вернуть строку, в которой все символы будут идти в обратном порядке
    * reverseString('abc') => 'cba';
    */
   reverseString(str) {

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
   reverseNumber: function (n) {

   },
   /**
    * нужно посчитать кол-во каждого символа в строке
    * считать 'a' и 'A' разными символами
    * вывести результат в любом удобном виде
    */
   charCount: function (str) {

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

   },
};
