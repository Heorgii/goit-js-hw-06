const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const liEl1 = document.createElement('li');
const liEl2 = document.createElement('li');
const liEl3= document.createElement('li');
const liEl4 = document.createElement('li');
const liEl5 = document.createElement('li');
const liEl6 = document.createElement('li');

liEl1.textContent = 'Potatoes';
liEl2.textContent = 'Mushrooms';
liEl3.textContent = 'Garlic';
liEl4.textContent = 'Tomatos';
liEl5.textContent = 'Herbs';
liEl6.textContent = 'Condiments';

liEl1.classList.add('item');
liEl2.classList.add('item');
liEl3.classList.add('item');
liEl4.classList.add('item');
liEl5.classList.add('item');
liEl6.classList.add('item');

const ulEl = document.querySelector('ul');

ulEl.appendChild(liEl1);
ulEl.appendChild(liEl2);
ulEl.appendChild(liEl3);
ulEl.appendChild(liEl4);
ulEl.appendChild(liEl5);
ulEl.appendChild(liEl6);

document.body.append(ulEl);




