const display = document.getElementById('display');
const buttons = document.getElementById('buttons');
const clearBtn = document.getElementById('clear');
const backBtn = document.getElementById('backspace');
const minusBtn = document.getElementById('minus');
const divideBtn = document.getElementById('divide');
const multiplyBtn = document.getElementById('multiply');
const plusBtn = document.getElementById('plus');
const rootBtn = document.getElementById('root');
const squareBtn = document.getElementById('square');
const equalBtn = document.getElementById('equal');

let lastOperation = '';
let memory = 0;

buttons.addEventListener('click', (e) => {
    if(display.textContent.length > 15){
        return;
    };
    let data = e.target.dataset.input;
    if(data){
        if(data === '.'){
            if(!display.textContent.includes('.')){
                display.textContent += data
            }
        }else{
            display.textContent += data
            if(!display.textContent.includes('.')){
                display.textContent = Number(display.textContent)
            }
        }
    }
});
clearBtn.addEventListener('click', () => {
    display.textContent = 0;
    lastOperation = '';
    memory = 0
});
backBtn.addEventListener('click', () => {
    if(display.textContent.length === 1){
        display.textContent = 0
    }else{
        display.textContent = display.textContent.slice(0, display.textContent.length -1)
    }
});
minusBtn.addEventListener('click', () => {
    lastOperation = 'minus';
    memory = Number(display.textContent);
    display.textContent = 0
});
plusBtn.addEventListener('click', () => {
    lastOperation = 'plus';
    memory = Number(display.textContent);
    display.textContent = 0
});
divideBtn.addEventListener('click', () => {
    lastOperation = 'divide';
    memory = Number(display.textContent);
    display.textContent = 0
});
multiplyBtn.addEventListener('click', () => {
    lastOperation = 'multiply';
    memory = Number(display.textContent);
    display.textContent = 0;
});
squareBtn.addEventListener('click', () => {
    display.textContent **= 2;
    lastOperation = '';
    memory =0
});
rootBtn.addEventListener('click', () => {
    display.textContent = Math.sqrt(display.textContent)
});
equalBtn.addEventListener('click', () => {
    if(lastOperation !== ''){
        let num = Number(display.textContent)
        if(lastOperation === 'plus'){
            display.textContent = memory + num
        }else if(lastOperation === 'minus'){
            display.textContent = memory - num
        }else if(lastOperation === 'divide'){
            display.textContent = memory / num
        }else{
            display.textContent = memory * num
        }
    }lastOperation = ''
})
