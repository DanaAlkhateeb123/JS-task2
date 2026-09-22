// function reverse(x){
//     let reversed_arr=[];
//    for (let i of x)
//    {
//      reversed_arr.unshift(i);
//    }
// return reversed_arr.join("");
// }
// let num = prompt("plz enter a number more than one digit");
// document.write(reverse(num));//1



// for(let i=0; i<=15;i++){
//     if(i%2==0){
//         console.log(i +" is even ");
//     }
//      if(i%2!=0){
//         console.log(i +" is odd ");
//     } }//2


// let number = prompt("Please enter a number more than one digit");
// number = number.split("");
// for (let i = 0; i < number.length - 1; i++) {

//     if (number[i] % 2 == 0) {
//         number.splice(i + 1, 0, "-");
//         i++;
//     }
// }
// document.write(number.join(""));//3


function Agechecker(age)
{
if ( age >= 18)
{
    document.write("The user is Adult");
}
else
{
    document.write("The user is Minor");
}
}
let age = prompt("Please enter your age");
Agechecker(age);
