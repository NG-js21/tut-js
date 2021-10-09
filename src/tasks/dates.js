const datesTask = {
    //вывести на консоль текущую дату в формате DD.MM.YYYY hh:mm:ss
    printCurrentDateAndTime() {
    let date = new Date(),
    string = date.toLocaleString('ru', { day: "2-digit", month: "2-digit", year: "numeric" }) + " " + date.toLocaleString('ru', { hour: "2-digit", minute: "2-digit", second: "2-digit" })

    return string
    },

    //на вход ф-ция получается объект Date. Вывести на консоль сколько времени прошло от даты в прошлом до сейчас
    //длительность надо вывести в формате '1 years 2 months 3 days 4 hours 5 minutes 6 seconds ago'.
    //если какая=то часть равна 0 то её не нужно выводить
    fromNow(d) {
    //вычисляем текущую дату
    let today = new Date();

    //составляющие начальной даты
    let
        startY = date.getFullYear(), //год
        startM = date.getMonth(),    //месяц
        startD = date.getDate(),     //день
        startH = date.getHours(),    //часы
        startMin = date.getMinutes(),//минуты
        startS = date.getSeconds();  //секунды

    //составляющие конечной даты
    let
        endY = today.getFullYear(),    //год
        endM = today.getMonth(),       //месяц
        endD = today.getDate(),        //день
        endH = today.getHours(),        //часы
        endMin = today.getMinutes(),    //минуты
        endS = today.getSeconds();      //секунды


    //проверка еа високосный год
    let flag = endY % 4 == 0 && (endY % 100 != 0 || endY % 400 == 0);

    //массив дней в каждом месяце
    let daysOfMonth = [31, (flag ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    //вычисляем разницу в годах, учитывая текущий месяц (если текущий месяц меньше месяца прошедшей даты, то вычитаем 1, так как год неполный)
    let countYears = endY - startY - (endM < startM ? 1 : 0);
    let stringYears = countYears > 0 ? `${countYears} year${countYears > 1 ? "s" : ""} ` : "";

    //вычисляем разницу в месяцах, учитывая количество дней 
    let countMonths = (11 - startM + endM + (endD > startD || endM == startM ? 1 : 0)) % 12;
    let stringMonths = countMonths > 0 ? `${countMonths} month${countMonths > 1 ? "s" : ""} ` : "";

    //вычисляем разницу дней, учитывая високосный ли год и количество дней в месяце
    let countDays = startD <= endD ? endD - startD : daysOfMonth[endM - 1] + endD - startD - (startH < endH ? 0 : 1);
    let stringDays = countDays > 0 ? `${countDays} day${countDays > 1 ? "s" : ""} ` : "";

    //вычисляем разницу часов
    let countHours = endH >= startH ? endH - startH : 24 - (startH - endH);
    let stringHours = countHours > 0 ? `${countHours} hour${countHours > 1 ? "s" : ""} ` : "";


    //вычисляем разницу минут
    let countMins = endMin > startMin ? endMin - startMin : 60 - (startMin - endMin);
    let stringMins = countMins > 0 ? `${countMins} minute${countMins > 1 ? "s" : ""} ` : "";

    //вычисляем разницу секунд
    let countSec = endS > startS ? endS - startS : 60 - (startS - endS);
    let stringSec = countSec > 0 ? `${countSec} second${countSec > 1 ? "s" : ""} ` : "";

    //let string = `${countYears} year${countYears > 1 ? "s" : ""} ${countMonths} month${countMonths > 1 ? "s" : ""} ${countDays} day${countDays > 1 ? "s" : ""} ${countHours} hour${countHours > 1 ? "s" : ""} ${countMins} minutes 6 seconds ago`
    let string = stringYears + stringMonths + stringDays + stringHours + stringMins + stringSec;
    return string;
    }
};
