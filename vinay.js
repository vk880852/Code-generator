// alert("hello my doston");
// let age=30;
// console.log(age);
// console.error("this is a error");
// console.warn("this is a warning");
// console.log(typeof age);
// let s='Radhe Krishna';
// let p='Ram';
// let p1=(`i am son and bhakti of ${s} and ${p} and my parents`);
// console.log(p1.split(' '));
// const number=[1,2,3,4,5]
// console.log(number);
// console.log(Array.isArray([1,2,3,4,5]));
// console.log(p1.indexOf('am'));
// const person=
// {
//     firstname:'Ram Ram',
//     age:30,
//     quality:'Jai Hind',
//     hobbies:['Problem Solving','Jai Shree Ram'],
//     address:{
//         street:'Jai Shree Ram,Ram, Jai Sita Ma',
//         streetnu:'Radhey Krishan',
//     }
// }
// console.log(person);
// person.email='vk880852@gmail.com';
// console.log(person);
// //we can use it in array
// const todo=[
//     {
//         id:1,
//         s:'Jai Shree Ram',
//         s:'Radhey Krishna'
//     },
//     {
//         id:2,
//         s1:'Jai Shree Ram',
//         s:'Radhey Krishna',
//         p:'Mata Pita Ki Jai'
//     } ,
//     {
//         id:3,
//         s1:'Jai Shree Ram',
//         s:'Radhey Krishna',
//         p:'Mata Pita Ki Jai'
//     }
// ]
// console.log(todo[1].s1);
// const todo1=JSON.stringify(todo);
// console.log(todo1);
// for(let i=0;i<10;i++)
// {
//     console.log(i+5);
// }
// todo.forEach(function(todo)
// {
//     console.log(todo.p);
// });
// function guess()
// {
//     const random=Math.floor(Math.random*100)+1;
//     let number=parseInt(prompt('Guess a number between 1 to zero'));
//     while(number!=random)
//     {
       
//         number=parseInt(prompt('Guess a number between 1 to zero'));
//         if(number>random)
//         {
//           console.log('number is greater');
//         }
//         else if(number<random)
//         {
//            console.log('number is less than');
//         }
//     }
//     if(number==randome)
//     {
//         console.log("you find the number");
//     }
    
// }

// guess();
// const changecolor=()=>
// {
//     document.body.firstElementChild.style.backgroundColor="blue";
// }
// const color3=()=>
// {
//     let x2=Math.floor(Math.random()*16777215);
//     let s2="#"+x2.toString(16);
//     document.body.style.background=s2;
// }
// color3();
// document.getElementById('btn1').addEventListener('click',color3);
// function currentTime() {
//     let date = new Date(); 
//     let hh = date.getHours();
//     let mm = date.getMinutes();
//     let ss = date.getSeconds();
//     let session = "AM";
  
//     if(hh === 0){
//         hh = 12;
//     }
//     if(hh > 12){
//         hh = hh - 12;
//         session = "PM";
//      }
  
//      hh = (hh < 10) ? "0" + hh : hh;
//      mm = (mm < 10) ? "0" + mm : mm;
//      ss = (ss < 10) ? "0" + ss : ss;
      
//      let time = hh + ":" + mm + ":" + ss + " " + session;
  
//     document.getElementById("clock").innerText = time; 
//     let t = setTimeout(function(){ currentTime() }, 1000);
//   }
  
//   currentTime();
// let promise=new Promise((resolve, reject) => {
//     console.log('Promise is pending')
//     resolve(56);
// })
// let promise1=new Promise((resolve,reject)=>{
//     console.log('Promise is pending');
//     setTimeout(() => {
//         reject(new Error('I am error'));
//     }, 5000);
// })
// promise.then(value =>{
//     console.log(value);
// })
// promise1.catch(error=>{
//     console.log("i am rejected");
// }
let inputslider=document.querySelector('.slider');
const lengthdisplay=document.querySelector(".data-lengthNumber");
const passwordDisplay=document.querySelector("[data-passwordDisplay]");
const copyBtn=document.querySelector("[data-copy]");
const copyMsg=document.querySelector("[data-copyMsg");
const uppercase=document.querySelector("#upperbox");
const lowercase=document.querySelector("#lowerbox");
const number=document.querySelector("#number");
const syble=document.querySelector("#sn");
const indicator=document.querySelector("[data-indicator]");
const generate=document.querySelector(".generateButton");
const allcheck=document.querySelectorAll("input[type=checkbox]");
lengthdisplay.textContent=inputslider.value;
inputslider.addEventListener('click',()=>{
    lengthdisplay.textContent=inputslider.value; 
});
generate.addEventListener('click',()=>
{
 passwordDisplay.value=codegenerator();
});
let lc="abcdefghijklmnopqrstuvwxyz";
let bc="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let sc="~!@#$%^&*";
let numbers="0123456789";
function codegenerator()
{
    let genpass="";
    let allchar="";
    if(lowercase.checked)
    {
        allchar +=lc;
    }
     if(uppercase.checked)
    {
        allchar +=bc;
    }
    if(syble.checked)
    {
        allchar +=sc;
    }
    if(number.checked)
    {
        allchar +=numbers;
    }
    let i=0;
    while(i<inputslider.value)
    {
    genpass +=allchar.charAt(Math.floor(Math.random()*allchar.length));
    i++;
    }
   // if(allchar=""||allchar.length==0)return genpass;
    console.log(allchar);
    return genpass;
}
copyBtn.addEventListener('click',()=>
{
    navigator.clipboard.writeText(passwordDisplay.value);
});

