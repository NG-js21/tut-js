const basicsTask = {
    /**
     * на вход ф-ция получает 3 числа, нужно вернуть сумму этих чисел
     */
    sum(a, b, c) {
        return a + b + c;
    },
    /**
     * аргументами могут быть не только числа
     * нужно вернуть сумму только чисел
     * 
     */
    safeSum(a, b, c) {
        let sum = 0;

        for (let i = 0; i < arguments.length; i++) {
            if (typeof (arguments[i]) == "number") { sum += arguments[i] }
        }
        return sum
    },

    /**
     * на входе есть 3 числа
     * нужно найти максимальное
     */
    max(a, b, c) {
        let maxNum = arguments[0];
        for (let i = 1; i < arguments.length; i++) {
            maxNum = maxNum > arguments[i] ? maxNum : arguments[i];
        }
        return maxNum;
    },
    /**
     * 
     * на входе есть 3 числа
     * нужно найти минимальное
     */
    min(a, b, c) {
        let minNum = a;
        for (let i = 0; i < arguments.length; i++) {
            minNum < arguments[i] ? minNum = minNum : minNum = arguments[i];
        }
        return minNum;
    },
    //если n целое число то вернуть true, иначе false
    isIntegerNumber(n) {
        return n - Math.floor(n) === 0;
    },
    //ф-ция должна уметь округлить число n до l знаков после запятой, 1 <= l <= 10
    //roundNumber(0.66666666, 2) => 0.67
    //roundNumber(1, 1) => 1.0
    roundNumber(n, l) {
        let string = String(n);
        let symbolIndex = string.indexOf(".");

        return +string.slice(0, symbolIndex + 1 + l);
    },
    //на входе массив чисел
    //ф-ция должна вернуть массив процентовб т.е. сколько процентов занимает каждое число от общей суммы
    //percentage([1, 1]) => [0.5, 0.5]
    //percentage([1, 2, 3]) => [0.17, 0.33, 0.6]
    percentage(numbers) {
        let sum = numbers.reduce((acc, num) => acc + num, 0)

        return numbers.map(num => (num / sum).toPrecision(2))
    },
};
console.log(basicsTask.sum(1, 2, 3));