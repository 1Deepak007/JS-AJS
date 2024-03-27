//===================> Named export
export function add(a, b) {
    return a + b;
}

export const PI = 3.14159;              // Exporting a variable


//===================> Default export 
function prcntg(s1,s2,s3,s4,s5){
    return("You scored : "+  (s1+s2+s3+s4+s5)/500*100  +"%");
}

function total(num1, num2){
    return(`Sum of ${num1} and ${num2} is : ` + (num1 + num2));
}

// # Note : We can't use multiple export default.
// export default prcntg;       //<--- for default exp single fxn
export default {prcntg,total};  //<--- for default exp multiple fxn




//-------------------------------------------------------------------

// NOTE : can't export multiple export default like below. Gives error (in console)
// export default function percentage(s1,s2,s3,s4,s5){
//     console.log("You scored : "+  [(s1+s2+s3+s4+s5)/500]*100  +"%");
// }
// export default function sum(num1, num2){
//     console.log(`Sum of ${num1} and ${num2} is : ` + (num1 + num2));
// }
