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

};
