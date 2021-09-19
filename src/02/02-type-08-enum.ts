
//-----------------------------------------
// enum
//-----------------------------------------

enum Month {
    Jan,
    Feb, 
    Mar,
    Apr,
    May, 
    Jun, 
    Jul,
    Aug, 
    Sep, 
    Oct,
    Nov, 
    Dec
}

function isItSummer(month: Month) {
    let isSummer: boolean
    switch (month) {
        case Month.Jun:
        case Month.Jul:
        case Month.Aug:
            isSummer = true
            break
        default:
            isSummer = false 
            break
    }
    return isSummer
}

console.log(isItSummer(Month.Jun)) // true 
console.log(isItSummer(8)) // false : 8 is Aug

/*
{
  '0': 'Jan',
  '1': 'Feb',
  '2': 'Mar',
  '3': 'Apr',
  '4': 'May',
  '5': 'Jun',
  '6': 'Jul',
  '7': 'Aug',
  '8': 'Sep',
  '9': 'Oct',
  '10': 'Nov',
  '11': 'Dec',
  Jan: 0,
  Feb: 1,
  Mar: 2,
  Apr: 3,
  May: 4,
  Jun: 5,
  Jul: 6,
  Aug: 7,
  Sep: 8,
  Oct: 9,
  Nov: 10,
  Dec: 11
}
*/
console.log(Month)


// 숫자와 달 명칠 맞추기 

enum Month2 {
    Jan = 1,
    Feb, 
    Mar,
    Apr,
    May, 
    Jun, 
    Jul,
    Aug, 
    Sep, 
    Oct,
    Nov, 
    Dec
}

// approval status : 승인 상태 
enum ApprovalStatus {
    draft,
    submitted, 
    approved, 
    rejected 
}

// 사용 예
const request = {
    id: 1, 
    status: ApprovalStatus.approved,
    description: 'Please approve this request'
}

if (request.status === ApprovalStatus.approved) {
    // send an email
    console.log('Send email to the Applicat...')
}

