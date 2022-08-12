const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
// 1
const galleriEl = document.querySelector('ul');

const elemetn = image
.map(function({url, alt}) {
  return `<li><img src = ${url} alt = ${alt} width = '350'></li>`;
})

.join("");

galleriEl.insertAdjacentHTML('afterbegin', elemetn);

 // 2
// const galleryEl = document.querySelector('ul');

// const element = image.map(imag => {
//   const galleryLiEl = document.createElement('li');
//   galleryLiEl.classList.add('img-item');

//   const galleryImgEl = document.createElement('img');
//   galleryImgEl.src = imag.url;
//   galleryImgEl.alt = imag.alt;

//   galleryLiEl.appendChild(galleryImgEl);
//   return galleryLiEl;
// });

// galleryEl.append(...element);

console.log(galleryEl);
galleryEl.style.cssText = 
`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
`;