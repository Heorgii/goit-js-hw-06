const categoriArray = document.querySelectorAll('li.item');
console.log('Number of categories: ', categoriArray.length);

categoriArray.forEach((item) =>{
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);
});