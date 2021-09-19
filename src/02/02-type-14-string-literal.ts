
//-----------------------------------------
// String Literal Types 
//-----------------------------------------
type CustomMouseEvent = 'click' | 'dblclick' | 'mouseup' | 'mousedown'
let mouseEvent: CustomMouseEvent
mouseEvent = 'click'; // valid
mouseEvent = 'dblclick'; // valid
mouseEvent = 'mouseup'; // valid
mouseEvent = 'mousedown'; // valid
// mouseEvent = 'mouseover'; // compiler error

let anotherEvent: CustomMouseEvent