'use strict'

import {garageWrapCar} from './index.js'


// Открыть гараж

export const openGarage = function(modal){
  modal.style.visibility = 'inherit';
  modal.style.opacity = '1';
  console.log('Открыл');
}

// Закрыть гараж

export const closeGarage = function(modal){
  modal.style.visibility = 'hidden';
  modal.style.opacity = '0';
  console.log('Закрыл');
}


// Добавить машину в гараж 

export const addCarInGarage = function(car, modal = garageWrapCar){
  let item = car.cloneNode();
  modal.appendChild(item);
  console.log('Добавил');
}