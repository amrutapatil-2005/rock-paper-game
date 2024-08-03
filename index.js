// console.log("Hello world");
// const k=40;
// console.log(40);
// if(k>=40)
// {
//   console.log("good");
// }
// else{
//   console.log("bad");
// }
// let name="amruta";
// let ppo="Amruta";
// console.log(name !=ppo);
// let ans="sonali";
// console.log(ans);
// let amruta ={
//   name:'amruta',
//   CGPA:8.81,
//   marks:100,
//   village:'turchi',
//   ispass:true,
//   ppo:15
// }
// console.log(amruta.ppo);
// for(let i in amruta)
// {
//   console.log(i);
// }
// console.log(amruta);
// let age=40;
// if(age>18)
// {
//   console.log("eligible for voting");
// }
// else{
//   console.log(" not eligible for voting");
// }
// console.log(11**2);
// let a=70;
// console.log(a++);
// console.log(++a);
// console.log(a--);
// console.log(--a);
// let b=a*=34;
// console.log(b||100);
// let mode="black";
// if(mode=="black")
// {
//   mode="white";
//   console.log(mode);
// }
// else{
//   console.log("black");
// }
// let d = 89;
// let t=d>18 ? "adult":"senior";
// console.log(t);
// alert("hello");
// // let g=prompt("enter number");
// // console.log(g);
// // if(g%5==0)
// // {
// //   console.log( g ,"divisible");
// // }
// // else{
// //   console.log( g ,"not \ndivisible");
// // }
// for(let i=0;i<5;i++)
// {
//   console.log(i);
// }
// let arr=[1,2,3,4,5];
// for(let val in arr)
// {
//   console.log(val);
// }
// console.log("congratulations!");
// let str="rajvardhan";
// console.log(str[90]);
// console.log(`amruta`);
// let s2="amruta";
// console.log(s2.toUpperCase());
// console.log(s2.toLowerCase());
// let s3= "        aster";
// console.log(s3.trim());
// let s4=s3.concat(s2);
// console.log(s4);
// console.log(s3.charAt(9));
// let s5="amruta";
// console.log(s4);
// let res1 = "hello";
// console.log(res1.replace("he","y"));
//  let s8 = prompt("enter name");
// console.log("@"+s8+s8.length);
// let arr5=[1,2,3,4,5]
// for(let i=0;i<arr5.length;i++)
// {
//   console.log(i);
// }
// let a1=[85,97,44,37,76,60];
// let sum=0;
// for(let i=0;i<arr.length;i++)
// {
//   sum+=a1[i];





  

// }
// let avg=sum;
// console.log(avg);
// function hello () {
//   console.log("hello");
// }
// hello();
// const hello11 =(msg) =>{
//   console.log(msg);

// }
// hello11("I wiil get 15LPA");

//  const count =(s) =>
//   {
//     let cnt=0;
//   for(let i=0;i<s.length;i++)
//   {
//     if(s[i]=='a' || s[i]=='e'|| s[i]=='i'|| s[i]=='o'|| s[i]=='u')
//       cnt++;
//   }
// return cnt;
//  }
//  let kp=count("amruta");
//  console.log(kp);
//  let nums=[1,2,3,4,5];
//  let arr1=nums.filter((val)=>{
//   return val%22==0;
//  });
//  console.log(arr1);

// let h=document.getElementsByClassName("heading");
// console.log(h);
// let b=document.getElementById("js");
// console.log(b);
// let tc=document.getElementsByTagName("p");
// console.log(tc);
// let ele=document.querySelector("#js");
// console.log(ele);
// let pt=document.querySelector("p");
// console.log(pt);
// let kt=document.querySelector("body").lastElementChild;
// console.log(kt);
// let bt=document.querySelector("div");
// console.log(bt);

// let div=document.querySelector("div");

// console.log(div);
// let id=div.getAttribute("id");
// console.log(id);
// let td=document.querySelector("p");
// console.log(td.setAttribute("class","amruta"));
// td.style.backgroundColor="red";



// let newbtn=document.createElement("button");
// newbtn.innerText="submit me!";
// console.log(newbtn);
// let div=document.querySelector(".box");
// div.append(newbtn);
// let btn=document.createElement("button");
// btn.innerText="Submit Me!";
// console.log(btn);
// btn.style.backgroundColor="red";
// btn.style.color="white";
// let bd=document.querySelector("body");
// bd.append(btn);
// let p=document.querySelector("p");
// p.style.backgroundColor="yellow";
// let pt=document.querySelector("p");
// pt.append(p);

// btn1.onclick = (e)=>{// event object
//   console.log(e.clientY,e.clientX);

// }
// btn1.addEventListener("click",(e)=>{
//   console.log("hello");
//   console.log(e);

// })
// btn1.removeEventListener("click",(e)=>{
//   console.log("removed");
// });

// let div=document.querySelector(".div");
// console.log(div);
// div.onmouseover((e)=>{
//   console.log("you are inside button");
// })
// let mode="white";
// btn1.addEventListener("click",()=>{
//   if(mode=="white")
//   {
//      mode="dark";
//      let body=document.querySelector("body");
//      body.style.backgroundColor="black";
//      body.style.color="white";
    
//   }
//   else{
//     mode="white";
//     console.log(mode);
//     let body=document.querySelector("body");
//      body.style.backgroundColor="white";
//      body.style.color="black";

//   }
  
// })
let user=0;
let comp=0;
let choice=document.querySelectorAll(".choice");
const mess=document.querySelector(".message");
const gencompchoice = ()=>{
  let option=["rock","paper","scissor"];
  const rd= Math.floor(Math.random()*3)
  return option[rd];

}
const draw =()=>{
  console.log("game was draw");
}
const show =(userwin,userchoice,compchoice)=>{
  if(userwin)
  {
    console.log("you win!");
    mess.innerText="You Win!";
    mess.style.backgroundColor="green";
    mess.color="white";
  }
  else{
    console.log("you loose!");
    mess.innerText="You Loose!";
    mess.style.backgroundColor="red";
  
  

  }
}
const playgame = (userchoice) =>{
  console.log(userchoice);
  const compchoice=gencompchoice();
  console.log(compchoice);
  if(userchoice===compchoice)
  {
    draw();
    mess.innerText="Game is draw ${}!";
    mess.style.backgroundColor="yellow";
    

  }
  else {
    let user=true;
    if(userchoice==="rock" )
    {
      user=compchoice=== "paper" ? false: true;
    }
    else if(userchoice==="paper")
    {
      user=compchoice==="scissor" ?false:true;
    }
    else{
      user=compchoice==="rock"?false:true;
    }
    show(user);

  }


}
choice.forEach((choice)=>{
  choice.addEventListener ("click",()=>{
    let userchoice=choice.getAttribute("id");
    playgame(userchoice);

  });
  
  
  

});