// ======================================
// RETURN JAVASCRIPT - SOME EXAMPLES
// The return statement ends function
// execution AND specifies the value to
// be returned by that function
// ======================================

function multiply(x,y) {
    console.log(x*y);
}
let total = multiply(4,4);
// undefined

function add(x,y) {
    return x + y;
}
let sum = add(8,5);
// 13

function add_(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return false;
    }
    return x + y;
}



