
const collections = document.querySelectorAll('.books');
      blocks = document.querySelectorAll('.book');

collections[0].prepend(blocks[1]);
blocks[2].after(blocks[4]);
collections[0].append(blocks[2]);

const image = document.querySelector('body');
image.style.backgroundImage  =  'url(./image/you-dont-know-js.jpg)';


const titleH = document.querySelectorAll('div  h2 a ');
titleH[2].textContent = 'Книга 3. this и Прототипы Объектов';

const adv = document.querySelector('.adv');
adv.remove();

const elem = document.querySelectorAll('.books li');
elem[9].after(elem[12]); 
elem[12].after(elem[14]); 
elem[15].after(elem[8]); 

const elemClone = document.createElement('li');
const ne = document.querySelectorAll('div ul');
elemClone.textContent = 'Глава 8: За пределами ES6';
ne[5].append(elemClone);
elem[55].after(elemClone);

