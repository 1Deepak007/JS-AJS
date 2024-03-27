console.log("===========> Modules <============");

//======> Named import 
import { add, PI } from './libraryModule.js';
console.log(add(5, 3)); // 8
console.log(PI);        // 3.14159


//======>  default import single fxn
//import prcntg from './libraryModule.js';
// console.log(prcntg(90,90,90,90,90));


//======>  default import multiple fxns
import defimports from './libraryModule.js';          
console.log(defimports.total(10,90));
console.log(defimports.prcntg(90,90,90,90,91));
