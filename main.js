function hallo (man){
    console.log(' hallo welt aus Berlin  ' +man );
}

hallo ('danke das sie da sind');
hallo ('genieße die zeit ');
hallo('fragen sie uns wenn sie fragen haben');



//wir können mehrer unter (hallo) schreiben aber wir müssen  zwischen der klamma was schreiben(), damit was verbindet wird. dasist die aufgabe des function.  aslo wir schreiben es nur einmal ... z.b


function age (age){
    let result = age * 365;
    return result;
}
let s =  age(36); 
console.log(s);

console.log('-----------------------------------')


function prod(price,taxes, ads){
    let product=price +taxes+ads;
    let result=product;
    return result;
}
let b= (prod(100,2.3, 2 )/ 2);
console.log(b)

console.log('-----------------------------------')

function age (age){
    let result = age * 365;
    return result;
}
let small =  age(36); 


function calcHhuor(age )
{
    let result = age * 24;
    return result;
}
 let a= calcHhuor(small)
 console.log(a);


 console.log('----------------hoisting-------------------')




 function hallo (){
    return 100;
 }
 console.log (hallo() ); // das ist das  Erste möglichklei
// all function die mit function anfangen heißen die deklärischen und den rest heißen die explärschen 

 let imad = function()
 {
    return 80;
 }
  console.log(imad()) ;