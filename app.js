var month= prompt('Введите месяц вашего рождения');
var day = prompt('Введите день вашего рождения ');
if (month === 'март' && day >=21 && day <=31 || month === 'апрель' && day <= 20 && day <=31){
    console.log('Овен')
}else if (month === 'апрель' && day >=21 && day <=31 || month === 'май' && day <= 21 && day <=31){
    console.log('Телец')
}else if (month === 'май' && day >=22 && day <=31 || month === 'июнь' && day <= 21 && day <=30){
    console.log('Близнецы')
}else if (month === 'июнь' && day >=22 && day <=30 || month === 'июль' && day <= 22 && day <=31){
    console.log('Рак')
}else if (month === 'июль' && day >=23 && day <=31 || month === 'август' && day <= 23 && day <=31){
    console.log('Лев')
}else if (month === 'август' && day >=24 && day <=31 || month === 'сентябрь' && day <= 22 && day <=30){
    console.log('Дева')
}else if (month === 'сентябрь' && day >=23 && day <=30 || month === 'октябрь' && day <= 23 && day <=31){
    console.log('Весы')
}else if (month === 'октябрь' && day >=24 && day <=31 || month === 'ноябрь' && day <= 22 && day <=30){
    console.log('Скорпион')
}else if (month === 'ноябрь' && day >=23 && day <=30 || month === 'декабрь' && day <= 21 && day <=31){
    console.log('Стрелец')
}else if (month === 'декабрь' && day >=22 && day <=31 || month === 'январь' && day <= 20 && day <=31){
    console.log('Козерог')
}else if (month === 'январь' && day >=21 && day <=31 || month === 'февраль' && day <= 18 && day <=28){
    console.log('Водолей')
}else if (month === 'февраль' && day >=19 && day <=28 || month === 'март' && day <= 20 && day <=31){
    console.log('Водолей')
}else{
    console.log ('Произошла ошибка!')
}