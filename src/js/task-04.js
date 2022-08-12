const counterValue = 0;

const btnEl = document.querySelector('div button');

btnEl.addEventListener('click', () => {
    const spanEl = document.querySelector('span');

    for (let i = 0; i >= counterValue; i += 1) {
        spanEl += 1;
    }
});
