
//-----------------------------------------
// any
//-----------------------------------------

// third-party API로부터 json 값이 온다면
const json = `{"latitude": 10.11, "longtitude": 12.12}`

// JSON에서 위치정보를 찾아낸다. 
const currentLocation = JSON.parse(json)
console.log(currentLocation) // { latitude: 10.11, longtitude: 12.12 }
console.log(currentLocation.x) // undefined

// 타입이 잘못되도 어떤 에러도 발생하지도 않는다. 
// 자바스크립트 프로젝트를 타입스크립트 프로젝트로 마이그레이션 할 때 사용할 수 있다. 

