// for (let i = 1; i < 20; i++) {
//     document.write(i + '<br>');
// }
 
const n = parseFloat(prompt('enter n element fibonacci'));

const answer = fib(n);
document.write(answer);

function fib(n) {
   if (n <=2) {
     return 1;
   }
   else {
       return fib(n - 1) + fib(n-2);
   }
}