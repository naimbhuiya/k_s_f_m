var select =document.querySelector('#oo')
var btn = document.querySelector('#pp')
var rakib2 = document.querySelector('#rakib2')
var rakib = document.querySelector('#rakib')
var qtenBtn = document.querySelector('#qtenBtn')
var number = document.querySelector('#number')
var number1 = document.querySelector('#number').value





//var value = select.value
btn.addEventListener('click', function (){
    if (document.querySelector('#oo').value === 'select'){
       select.style.display='inline'
       btn.style.display='inline'
       rakib2.style.display= 'none'
       rakib.style.display='block'
    }else{
        select.style.display='none'
        btn.style.display='none'
        rakib.style.display='none'
        rakib2.style.display= 'block'

        qtenBtn.style.display= 'block'
        number.style.display= 'block'
    }
})







//// var 
var ib = document.querySelector('#ib')
var hu = document.querySelector('#hu')
var ismail =  document.getElementById("ismail")


var  Name = document.getElementById('ismail')
var calss = document.getElementById('class')
var roll = document.getElementById('roll')
var id = document.getElementById('id')
var point= document.getElementById('point')
var img = document.getElementById('img')
var hh= document.getElementById('hh')

qtenBtn.addEventListener('click', function (){
   if ( parseInt(document.querySelector('#number').value) === 1000){
    img.style.display='none'
    hh.style.display='block'
    ismail.innerHTML = "Name: MD Ibrahim ";
    calss.innerHTML = "Class: 10";
    roll.innerHTML = "Roll: 31 ";
    id.innerHTML = "Id: 1122";
    point.innerHTML = "Letest Exam point: 80";

     //ib.style.display='block'
     //hu.style.display='none'
    // ismail.innerHTML='12'
     
 }else if ( parseInt(document.querySelector('#number').value) === 1001){
    img.style.display='none'
    hh.style.display='block'
    ismail.innerHTML = "Name: Md Shihab";
    calss.innerHTML = "Class: 10";
    roll.innerHTML = "Roll: 32 ";
    id.innerHTML = "Id: 1001";
    point.innerHTML = "Letest Exam point: 100";

     //ib.style.display='block'
     //hu.style.display='none'
    // ismail.innerHTML='12'
     
 }
 else if ( parseInt(document.querySelector('#number').value) === 1002){
    img.style.display='none'
    hh.style.display='block'
    ismail.innerHTML = "Name: Md Nahid";
    calss.innerHTML = "Class: 10";
    roll.innerHTML = "Roll: 33 ";
    id.innerHTML = "Id: 1002";
    point.innerHTML = "Letest Exam point: 110";

     //ib.style.display='block'
     //hu.style.display='none'
    // ismail.innerHTML='12'
     
 }
 else if ( parseInt(document.querySelector('#number').value) === 1003){
    img.style.display='none'
    hh.style.display='block'
    ismail.innerHTML = "Name: MD Shahed";
    calss.innerHTML = "Class: 10";
    roll.innerHTML = "Roll: 34 ";
    id.innerHTML = "Id: 1003";
    point.innerHTML = "Letest Exam point: 120";

     //ib.style.display='block'
     //hu.style.display='none'
    // ismail.innerHTML='12'
     
 }
 else if ( parseInt(document.querySelector('#number').value) === 1004){
    img.style.display='none'
    hh.style.display='block'
    ismail.innerHTML = "Name: Yeasin Arafat";
    calss.innerHTML = "Class: 10";
    roll.innerHTML = "Roll: 35 ";
    id.innerHTML = "Id: 1004";
    point.innerHTML = "Letest Exam point: 130";

     //ib.style.display='block'
     //hu.style.display='none'
    // ismail.innerHTML='12'
     
 }
 else if ( parseInt(document.querySelector('#number').value) === 1005){
    img.style.display='none'
    hh.style.display='block'
    ismail.innerHTML = "Name: Istiak Ahmed";
    calss.innerHTML = "Class: 10";
    roll.innerHTML = "Roll: 36 ";
    id.innerHTML = "Id: 1005";
    point.innerHTML = "Letest Exam point: 140";

     //ib.style.display='block'
     //hu.style.display='none'
    // ismail.innerHTML='12'
     
 }
 else if ( parseInt(document.querySelector('#number').value) === 1006){
    img.style.display='none'
    hh.style.display='block'
    ismail.innerHTML = "Name: mahmudul Hasan";
    calss.innerHTML = "Class: 10";
    roll.innerHTML = "Roll: 37 ";
    id.innerHTML = "Id: 1006";
    point.innerHTML = "Letest Exam point: 150";

     //ib.style.display='block'
     //hu.style.display='none'
    // ismail.innerHTML='12'
     
 }
 else if ( parseInt(document.querySelector('#number').value) === 1007){
    img.style.display='none'
    hh.style.display='block'
    ismail.innerHTML = "Name: Ismail Hossen";
    calss.innerHTML = "Class: 10";
    roll.innerHTML = "Roll: 38 ";
    id.innerHTML = "Id: 1007";
    point.innerHTML = "Letest Exam point: 160";

     //ib.style.display='block'
     //hu.style.display='none'
    // ismail.innerHTML='12'
     
 }
 else if ( parseInt(document.querySelector('#number').value) === 1008){
    img.style.display='none'
    hh.style.display='block'
    ismail.innerHTML = "Name: All - rafi";
    calss.innerHTML = "Class: 10";
    roll.innerHTML = "Roll: 39 ";
    id.innerHTML = "Id: 1008";
    point.innerHTML = "Letest Exam point: 170";

     //ib.style.display='block'
     //hu.style.display='none'
    // ismail.innerHTML='12'
     
 }
 else if ( parseInt(document.querySelector('#number').value) === 1009){
    img.style.display='none'
    hh.style.display='block'
    ismail.innerHTML = "Name: All - foysall";
    calss.innerHTML = "Class: 10";
    roll.innerHTML = "Roll: 40 ";
    id.innerHTML = "Id: 1009";
    point.innerHTML = "Letest Exam point: 120";

     //ib.style.display='block'
     //hu.style.display='none'
    // ismail.innerHTML='12'
     
 }
 else if ( parseInt(document.querySelector('#number').value) === 1010){
    img.style.display='none'
    hh.style.display='block'
    ismail.innerHTML = "Name: Ratul Hossen";
    calss.innerHTML = "Class: 10";
    roll.innerHTML = "Roll: 41 ";
    id.innerHTML = "Id: 1010";
    point.innerHTML = "Letest Exam point: 130";

     //ib.style.display='block'
     //hu.style.display='none'
    // ismail.innerHTML='12'
     
 }
 

 else{
    ismail.innerHTML = "I Dont know ";
 }
})