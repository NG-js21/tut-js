const objectsTask = {
    //на вход всегда приходит просто объект в котором ключи и значения - строки
    //вернуть новый объект, что-бы в нём ключи и значения были поменяны местами
    //swapKeysWithValues({a: 'aa', b: 'bb'}) => { aa: 'a', bb: 'b' };
    swapKeysWithValues(obj) {
        let inverted = new Object();

        for (let key in obj) {
            inverted[obj[key]] = key;
        }

        return inverted
    },


    /**
 * на вход подается объект
 * функция должна сделать и вернуть тн глубокую копию этого объекта
 * вся логика должна быть написана самостоятельно, так же нужно учесть что некоторые свойства копируемого объекта могут быть массивами
 */

    deepCopy(obj) {
        let copy = {};
        for (let key in obj) {
            if (typeof obj[key] === 'object' && obj[key] !== null) {
                if (Array.isArray(obj[key])) {
                    copy[key] = obj[key].slice();
                }
                else { copy[key] = deepCopy(obj[key]); }

                continue
            }

            copy[key] = obj[key];
        }
        return copy;
    }
}

