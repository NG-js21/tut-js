const arraysTask = {
    /**
   * 
   * @param array - массив, где могут быть не только числа
   * нужно посчитать и вернуть сумму всех чисел
   */
    totalSum: function (array) {
        //задаем переменную для суммы
        let sum = 0;

        //перебираем все значения массива
        for (let i = 0; i < array.length; i++) {

            //проверка на тип
            if (typeof (array[i]) == "number") {
                sum += array[i];
            }
        }
        return sum
    },



    /**
     * на вход ф-ция получает 2 массива
     * нужно вернуть новый массив, в котором будут скомбинированы элементы из 2 массивов таким образом:
     * сначала будут идти первые элементы, потом вторые и тд, если в одном из массивов элементов больше не осталось то просто заполнять элементами из другого массива
     * пример: combine([1, 2, 3], ['a', 'b', 'c', 'd']) => [1, 'a', 2, 'b', 3, 'c', 'd']
     */
    combine: function (array1, array2) {
        const combined = [];    //скомбинированный массив

        //вычисляем количество итераций для перебора значений массива 
        let i = 0;
        for (i; i <= Math.min(array1.length, array2.length); i++) {
            //если под индексом имеется элемент, то добавляем его в комбинированный массив
            if (i < array1.length) {
                combined.push(array1[i]);
            }

            if (i < array2.length) {
                combined.push(array2[i])
            }
        }

        const arr = array1.length >= array2.length ? array1 : array2;

        for (let i = Math.min(array1.length, array2.length) + 1; i < arr.length; i++) {
            combined.push(arr[i]);
        }
        return combined;
    },


    //вернуть массив, состоящий из идущих подряд чисел, начиная со start, и до end включительно
    //range(0, 3) => [0, 1, 2, 3]
    range(start, end) {
        const array = [];      //новый массив
        let number = start;     //добавляемое число

        do {
            array.push(number); //добавляем число в массив
            number++            //увеличиваем число на единицу
        } while (number <= end)

        return array
    },


    //ф-ция должна вернуть последние n элементов массива
    //если n > array.length то вернуть копию массива
    lastN(array, n) {
        let k = 0;           //количество последних чисел в массиве
        let arrayModified;   //массив с последними числами, для вывода

        //проверяем соотношение указанного числа n и длины массива
        if (n <= array.length) {
            k = array.length - n
        }

        return arrayModified = array.slice(k);
    },

    //ф-ция должна вернуть новый массив, в котором будут все элементы исоходного массива, но без дубликатов
    //unique([1, 2, 3, 3]) => [1, 2, 3]
    unique(array) {
        return [...new Set(array)]; //оставляем только уникальные значения
    },


    /**
     * разбить исходный массив на несколько подмассивов длиной chunkSize
     * chunk([1, 2, 3, 4, 5], 3) => [[1, 2, 3], [4, 5]]
     */
    chunk: function (arr, chunkSize) {
        let l = Math.ceil(arr.length / chunkSize);  //количество итераций для разбиения массива
        let fragment;                               //фрагмент массива

        for (let i = 0; i < l; i++) {
            fragment = arr.slice(i, i + chunkSize); //формируем фрагмент (массив с указанным количеством элементов в нем)
            arr.splice(i, chunkSize, fragment);     //добавляем фрагмент в исходный массив
        }
        return arr
    },


    //вернуть новый массив из элементов, для которых ф-ция cb вернёт true
    //аналог родного array.filter
    filter(array, cb) {
        const arrayFiltered = [];                     //формируемый массив
        for (let i = 0; i < array.length; i++) {    //если значение функции cb является true, то добавляем элемент в формируемый массив
            if (cb(array[i]) == true) {
                arrayFiltered.push(array[i]);
            }
        }
        return arrayFiltered;
    },


    //эта ф-ция должна работать как array.forEach, но если cb возвращает false то обход цикла должен прикратиться
    breakableForEach(array, cb) {
        //перебираем элементы массива
        for (let i = 0; i < array.length; i++) {

            //при значении false прерываем цикл
            if (cb(array[i]) === false) {
                break;
            }
        }
    },


    //ф-ция должна вернуть true если в обеих массивах одинаковые элементы, иначе false
    //areArraysEqual([1, 2, 3], [2, 3, 1]) => true
    //areArraysEqual([1, 2, 2], [1, 2]) => false
    areArraysEqual(arr1, arr2) {
        //если массивы имеют разную длину, то они не могут являться одинаковыми
        if (arr1.length != arr2.length) {
            return false
        }

        else {
            let index2; //переменная для индекса элемента во втором массиве

            //перебираем элементы первого массива
            do {
                //находим индекс текущего элемента во втором массиве
                index2 = arr2.indexOf(arr1[0]);

                //если индекс не найден, то массивы не содержат одинаковые элементы
                if (index2 == -1) { return false }

                //иначе, удаляем найденные элементы из обоих массивов
                else { arr1.splice(0, 1); arr2.splice(index2, 1) }
            } while (arr1.length > 0)

            return true
        }
    }
};