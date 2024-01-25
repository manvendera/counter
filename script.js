const incrementBtn = document.querySelector('.increment');
const decrementBtn = document.querySelector('.decrement');
const resetBtn = document.querySelector('.resetvalue');
const displayValue = document.querySelector('.valuebox')

decrementBtn.addEventListener('click',() =>{
    const value = Number(displayValue.innerText);
    if (value > 0) {
        displayValue.innerText = value - 1;
    } else {
        alert('Negative value is not allowed')
    }
})

incrementBtn.addEventListener('click', ()=>{
    const value = Number(displayValue.innerText);
    if (value >= 100) {
        alert('100+ value is not allowed') 
    } else {
       
       displayValue.innerText = value+1;
    }
})
resetBtn.addEventListener('click',()=>{
displayValue.innerText=0;
})