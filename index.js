// const taskNumber = document.querySelector(".number")
// const contain =document.querySelector(".container")
// // const button6=document.querySelector('.btn-6')
// button6.addEventListener("click",function(){
//     alert("bangladesh")
//     taskNumber.innerHTML--;
//     button6.disabled="true" 
//     button6.style.backgroundColor="gray"
//     const div =document.createElement('div');
//     div.innerHTML=`
//       <p class="congratulation">Congratulation ! have complete task </p>
//     `
//     contain.appendChild(div)
// })

function changeBgColor(){

document.body.style.backgroundColor =
'rgb(' + Math.round(Math.random()*255) +
','+ Math.round(Math.random()*255) +
','+ Math.round(Math.random()*255) +')';
}
  const contain =document.querySelector('.box');
const buttons =document.querySelectorAll('.clickBtn')
buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    alert('Board updated successfully')
    button.disabled=true;
    button.style.backgroundColor='gray';
    const tasks=document.querySelector('.number');
    tasks.innerHTML--;
 
   const div =document.createElement('div');
div.innerHTML =`
<p class='bg-gray-300 py-1 p-2 rounded'>Congratulation ! you have done task </p>
`
     contain.append(div) 


const growth = document.querySelector('.increment');
growth.innerHTML++;

  });

});
