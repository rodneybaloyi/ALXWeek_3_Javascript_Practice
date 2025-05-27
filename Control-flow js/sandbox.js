// for loops

/*
for(let i = 0; i < 5 ; i++){
  console.log('in loop:', i)
}

console.log('loop finished')

*/


//const names = ['rodney', 'nyiko', 'eunice'];

//for(let x = 0; x < names.length; x++){
 // console.log(names[x]);
//}

//WHILE LOOPS

/* let x = 0;

while( x < 5){
  console.log('in loop: ', x);
  x++;
}
  */
 /* const names = ['rodney', 'nyiko', 'eunice'];
 let x = 0;
 while(x < names.length){
  console.log(names[x]);
  x++;
 }
*/

// if statements
//const age = 25;

//if(age > 20){
  //console.log('you are over 20 yeras old');
//}

/*
const ninjas = ['rodney ', 'nyiko ', 'eunice'];
if(ninjas.length > 2){
  console.log("thats a lot of ninjas")
}
*/

/*

//else if statement

const password = 'password@124';

if(password.length >= 12){
  console.log('that password is mighty strong');
}

else if(password.length >= 8 ){
  console.log('that password is long enough!');
} else { 
  console.log('password is not long enough');
}
  */


//logical operators -  OR || AND &&

/*const password = 'passwor@';

if(password.length >= 12 && password.includes('@')){
  console.log('that password is mighty strong');
}
else if(password.length >= 8 || password.includes('@')){
  console.log('that password is strong enough!');
} else { 
  console.log('password is not strong enough');
}
  */

/*
const password = 'pagrdgsh';

if(password.length >= 12 && password.includes('@')){
  console.log('that password is mighty strong');
}
else if(password.length >= 8 || password.includes('@') && password.length >=5){
  console.log('that password is strong enough!');
} else { 
  console.log('password is not strong enough');
}
  */

/*
//logical NOT (!)
console.log(!true);
console.log(!false);

let user = false;

if(!user){
  console.log('you must be loved');
}

*/
// break and continue


// switch statements

/*

const grade = 'D';
  switch(grade){
    case 'A':
      console.log('you got an A!');
      break;
    case 'B':
      console.log('you got an B!');
      break;
     case 'C':
      console.log('you got an C!');
      break;
     case 'D':
      console.log('you got an D!');
      break;
    case 'E':
      console.log('you got an E!');
      break;
    default:
      console.log('not a valid grade');

  }
      */

   let age = 30;

   if(true){
    let age = 40
    let name = 'rodney';
    console.log('inside the code block: ', age, name);
   } 

   console.log('outside: ', age)