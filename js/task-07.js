const inpEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

inpEl.addEventListener('input', textChange);

function textChange(event){
    spanEl.style.fontSize = `${event.currentTarget.value}px`;
}
