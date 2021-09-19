
//-----------------------------------------
// switch
//-----------------------------------------

// 기본

let targetId = 'btnDelete'

switch (targetId) {
    case 'btnUpdate':
        console.log('Update')
        break
    case 'btnDelete':
        console.log('Delete') // 여기 
        break
    case 'btnNew':
        console.log('New')
        break
}
 
// 동일 case 중첩

// change the month and year
let month = 2,
    year = 2020;

let day = 0;
switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        day = 31;
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        day = 30;
        break;
    case 2:
        // leap year
        if (((year % 4 == 0) &&
            !(year % 100 == 0))
            || (year % 400 == 0))
            day = 29;
        else
            day = 28;
        break;
    default:
        throw Error('Invalid month');
}

console.log(`The month ${month} in ${year} has ${day} days`);
// The month 2 in 2020 has 29 days


