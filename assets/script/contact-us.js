'use strict';

function onEvent(event, selector, callback){
    return selector.addEventListener(event, callback);
}

//Get HTML element by id
function getElement(selector, parent = document){
    return parent.getElementById(selector);
}

//Select HTML element by selector
function select(selector, parent = document){
    return parent.querySelector(selector);
}

