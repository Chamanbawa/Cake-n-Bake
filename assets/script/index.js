'use strict';

/*

JavaScript Basics
Cake & Bake

*/


function onEvent (event, selector, callback) {
    return selector.addEventListener(event,callback);
}
function  select(selector, parent = document){
    return parent.querySelector(selector);
    }


const modal = select('.section');
const morebtn = select('.more-btn');
const text = select('.text');
 
let n = 0;
const content = ['Good Luck!' ,'The perfect way to start your day', 'Home sweet bakery','Based in Winnipeg'];

function lets()  {
modal.classList.add('lessdelay');
}
function lets2(){
    morebtn.classList.add('is-visible');
}

window.addEventListener('load', () =>{

lets();
lets2();
});

onEvent('click', morebtn, function () {
    morebtn.innerText = (n === 2) ? 'Again?' : 'More'; 
 if ( n === 3) {
  text.innerHTML = content[ n = 0 ];
 return;
}

text.innerHTML = content[ ++n ];

});
