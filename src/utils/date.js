export function getDaysInMonth(month, year) {
    let date = new Date(year, month, 1);
    let days = [];
    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return days;
}

export function createCalendarByMonth(date){
    const month = date.getMonth();
    const year = date.getFullYear();
    const currentMonthCalendar = getDaysInMonth(month, year);

    const firstDayByMonth = currentMonthCalendar[0];
    const lastDayByMonth = currentMonthCalendar[currentMonthCalendar.length - 1];

    const previousMonth = getPreviousMonthCalendar(month, year);
    const previousMonthCalendar = getDaysInMonth(previousMonth.month, previousMonth.year).reverse().splice(0,firstDayByMonth.getDay()).reverse();

    const nextMonth = getNextMonthCalendar(month, year);
    const nextMonthCalendar = getDaysInMonth(nextMonth.month, nextMonth.year).splice(0, 6 - lastDayByMonth.getDay());

    return [
        ...previousMonthCalendar,
        ...currentMonthCalendar,
        ...nextMonthCalendar
    ]
}

function getPreviousMonthCalendar(month, year){
    const date = new Date(year, month - 1, 1);

    return {
        year:date.getFullYear(),
        month: date.getMonth() 
    }
}


function getNextMonthCalendar(month, year){
    const date = new Date(year, month + 1, 1);

    return { 
        year:date.getFullYear(),
        month: date.getMonth() 
    }
}

export function getNameMonth(date){
    const months = [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro'
    ];

    return months[date.getMonth()];
}

export function getDaysOfTheWeek(){
    return [
        'Domingo',
        'Segunda',
        'Terça',
        'Quarta',
        'Quinta',
        'Sexta',
        'Sábado'
    ]
}