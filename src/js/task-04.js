let counterValue = 0;

const decr = document.querySelector('button[data-action="decrement"]');
const incr = document.querySelector('button[data-action="increment"]');
const val = document.querySelector('#value');

const countDecr = function(){
    counterValue -=1;
    val.textContent = counterValue;
}

const countIncr = function(){
    counterValue +=1;
    val.textContent = counterValue;
}

decr.addEventListener('click', countDecr);
incr.addEventListener('click', countIncr);

