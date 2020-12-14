/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/buyCar.js":
/*!***********************!*\
  !*** ./src/buyCar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "carArray": () => /* binding */ carArray,
/* harmony export */   "buyCarCar": () => /* binding */ buyCarCar
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _garage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./garage.js */ "./src/garage.js");




let carArray = [
  {name: 'ЗАЗ 965 "Запорожец"', price: 405, speed: 1.2, picture: 1},
  {name: 'ВАЗ-11113 "Lada Oka"', price: 410, speed: 1.22, picture: 2} 
];

// Массив с машинами(чтобы удалять border)
let carArrayBorder = [];

// Обёртка
  let buyCarWrap = document.createElement('div');
  buyCarWrap.classList.add('buyCarWrap');
  // Машины
  let buyCar = document.createElement('div');
  buyCar.classList.add('buyCar');
  // Текст
  let buyText = document.createElement('span');
  // Купить Кнопка
  let btnBuy = document.createElement('button');
  btnBuy.classList.add('btnBuy');
  btnBuy.textContent = 'Купить';
  buyText.textContent = 'Купить машину';
  buyCarWrap.appendChild(buyText);
  buyCarWrap.appendChild(buyCar);
  document.body.appendChild(buyCarWrap);

console.log(carArray[0])

function buyCarCar([carName, carPrice, carSpeed, carPicture]){
  console.log(carName);
  let buyCarItem = document.createElement('div');
    buyCarItem.classList.add('buyCarItem');
    buyCarItem.style.background = `transparent url('./image/car/${carPicture}.png') center / cover no-repeat`;
    // Название машины
    let buyCarItemText = document.createElement('span');
    buyCarItemText.textContent = carName;
    // Цена машины
    let buyCarItemPrice = document.createElement('span');
    buyCarItemPrice.textContent = `Стоимость ${carPrice}`;
    // Скорость машины
    let buyCarItemSpeed = document.createElement('span');
    buyCarItemSpeed.textContent = carSpeed;
    // Добавляем все значения к машинe
    let buyCarItemTextWrap = document.createElement('div');
    buyCarItemTextWrap.appendChild(buyCarItemText);
    buyCarItemTextWrap.appendChild(buyCarItemPrice);
    buyCarItemTextWrap.appendChild(buyCarItemSpeed);
    buyCarItem.appendChild(buyCarItemTextWrap);
    // Добавляем машину в окно
    buyCar.appendChild(buyCarItem);

    carArrayBorder.push(buyCarItem);
    //Клик по машине
    buyCarItem.addEventListener('click', function checkItem(e){
      //Убираем обводку с отстальных машин
      carArrayBorder.forEach(item => {
        item.style.border = 'none';
      })
      console.log(_index_js__WEBPACK_IMPORTED_MODULE_0__.car)
      // Добавляем обводку к выбранной машине
        let shopCar = e.target;
        shopCar.style.border = '2px solid green';
      // Добавляем обработчик на кнопку "Купить"
        btnBuy.addEventListener('click', function(){
          // По кнопке купить машина игрока меняется на ту, что выбрал
          _index_js__WEBPACK_IMPORTED_MODULE_0__.car.style.background = shopCar.style.background;
          buyCarWrap.style.display = 'none';
          // Добавляем машину в гараж
          _garage_js__WEBPACK_IMPORTED_MODULE_1__.addCarInGarage(_index_js__WEBPACK_IMPORTED_MODULE_0__.car);
      });
      // Добавляем кнопку
      buyCar.appendChild(btnBuy);
    })

} 



/***/ }),

/***/ "./src/garage.js":
/*!***********************!*\
  !*** ./src/garage.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "openGarage": () => /* binding */ openGarage,
/* harmony export */   "closeGarage": () => /* binding */ closeGarage,
/* harmony export */   "addCarInGarage": () => /* binding */ addCarInGarage
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");


;


// Открыть гараж

const openGarage = function(modal){
  modal.style.visibility = 'inherit';
  modal.style.opacity = '1';
  console.log('Открыл');
}

// Закрыть гараж

const closeGarage = function(modal){
  modal.style.visibility = 'hidden';
  modal.style.opacity = '0';
  console.log('Закрыл');
}


// Добавить машину в гараж 

const addCarInGarage = function(car, modal = _index_js__WEBPACK_IMPORTED_MODULE_0__.garageWrapCar){
  let item = car.cloneNode();
  modal.appendChild(item);
  console.log('Добавил');
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "score": () => /* binding */ score,
/* harmony export */   "start": () => /* binding */ start,
/* harmony export */   "gameArea": () => /* binding */ gameArea,
/* harmony export */   "car": () => /* binding */ car,
/* harmony export */   "rec": () => /* binding */ rec,
/* harmony export */   "complexity": () => /* binding */ complexity,
/* harmony export */   "bgArea": () => /* binding */ bgArea,
/* harmony export */   "compRange": () => /* binding */ compRange,
/* harmony export */   "garageBtn": () => /* binding */ garageBtn,
/* harmony export */   "btnGarageClose": () => /* binding */ btnGarageClose,
/* harmony export */   "garageWrap": () => /* binding */ garageWrap,
/* harmony export */   "garageWrapCar": () => /* binding */ garageWrapCar,
/* harmony export */   "enterGame": () => /* binding */ enterGame
/* harmony export */ });
/* harmony import */ var _garage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./garage.js */ "./src/garage.js");
/* harmony import */ var _speakWithBoss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./speakWithBoss */ "./src/speakWithBoss.js");
/* harmony import */ var _buyCar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buyCar */ "./src/buyCar.js");

; // Гараж
 //диалог с Боссом
 // Покупка машины (массив со всеми машинами)


let load = document.querySelector('.load');
  window.addEventListener('load', () => {
    load.classList.add('hidden');
  })


 const score = document.querySelector('.score'), // очки
  start = document.querySelector('.start'), // кнопка старта
  gameArea = document.querySelector('.gameArea'), // игровое поле
  car = document.createElement('div'), //авто игрока 
  rec = document.querySelector('.record'), //авто противников 
  complexity = document.querySelector('.complexity'), //поле выбора сложности
  bgArea = document.querySelector('.backgroundArea'), //фон с домиками
  compRange = document.querySelector('#complexityRange'), //Range выбора сложности 
  garageBtn = document.querySelector('.btnGarage'), //Кнопка "Открыть гараж"
  btnGarageClose = document.querySelector('.btnGarageClose'), //Кнопка "Закрыть гараж"
  garageWrap = document.querySelector('.garage'), //Гараж (модалка)
  garageWrapCar = document.querySelector('.garage__wrap'); //Гараж (обёртка для машин)

// ID функции - прорисовщика
  let myReq, secondMyReq;
// Массив с рекордами
  let record = [];

  // Открытие / Закрытие гаража
  garageBtn.addEventListener('click', () => _garage_js__WEBPACK_IMPORTED_MODULE_0__.openGarage(garageWrap));
  btnGarageClose.addEventListener('click', () => _garage_js__WEBPACK_IMPORTED_MODULE_0__.closeGarage(garageWrap));

 
// Фоновая песня (Пока что просто объект Audio)
let audio = new Audio();

car.classList.add('car');

// Начало по нажатии на Enter 
function enterGame(e) {
  if (e.code === 'Enter') {
    startGame();
  }
}

document.addEventListener('keydown', startRun);
document.addEventListener('keyup', stopRun);

const keys = {
  ArrowUp: false,
  ArrowDown: false,
  ArrowRight: false,
  ArrowLeft: false
};

const setting = {
  start: false,
  score: 0,
  speed: 0,
  traffic: 3
};

// Разговор с боссом

  _speakWithBoss__WEBPACK_IMPORTED_MODULE_1__.firstSpeakWithAngry();



_buyCar__WEBPACK_IMPORTED_MODULE_2__.buyCarCar(Object.values(_buyCar__WEBPACK_IMPORTED_MODULE_2__.carArray[0]));
_buyCar__WEBPACK_IMPORTED_MODULE_2__.buyCarCar(Object.values(_buyCar__WEBPACK_IMPORTED_MODULE_2__.carArray[1]));


// Фоновая музыка


// function playSound() {
//   audio.src = './audio/1.mp3'; // Указываем путь к звуку "клика"
//   audio.autoplay = true; // Автоматически запускаем
// }

function stopSound() {
  audio.pause();
  audio.currentTime = 0.0;
}

function startGame() {

  // playSound()
  // Скрываем сложность и "Нажатие на старт"
  complexity.classList.add('hide');
  start.classList.add('hide');
  // Убираем нажатие на Enter 
  document.removeEventListener('keydown', enterGame);
  // Скорость = выбранная сложность
  setting.speed = +compRange.value;

  setting.start = true;
  // Очищаем игровое поле перед стартом игры
  gameArea.innerHTML = '';
  bgArea.innerHTML = '';

  car.style.left = 125 + 'px';
  car.style.top = 80 + '%';

  // Полосы(имитация дороги)
  for (let i = 0; i < 10; i++) {
    const line = document.createElement('div');
    line.classList.add('line');
    // Позиции каждой черты(не путать с движением. Это просто расположение)
    line.style.top = i * 80 + 'px';
    // .y понадобится для движения дороги
    line.y = i * 82;
    gameArea.appendChild(line);
  }

  // Фон
  for (let i = 0; i < 5; i++) {
    const house = document.createElement('div');
    house.classList.add('house');
    house.style.backgroundImage = 'url("./image/home.webp")';
    // Позиции каждой черты(не путать с движением. Это просто расположение)
    house.style.top = (i * 82) * -1 + 'px';
    let ans = Math.random() * (bgArea.offsetWidth - 100);
    if (ans > 900 || ans < 400) {
      house.style.left = ans + 'px';
    }
    // .y понадобится для движения дороги
    house.y = i * 120;
    bgArea.appendChild(house);
  }


  // Движение машин
  for (let i = 1; i < 4; i++) {
    const enemy = document.createElement('div');
    enemy.classList.add('enemy');
    enemy.style.top = (i * 100) + 'px';
    // Больше значение трафика - дольше друг от друга машины
    enemy.y = -1 * 100 * setting.traffic * i + 1;
    console.log(enemy.y)
    enemy.style.top = enemy.y + 'px';
    // По оси Х рандомное расположение 
    enemy.style.left = Math.random() * (gameArea.offsetWidth - 50) + 'px';
    gameArea.appendChild(enemy);
  }
  // Сброс очков 
  setting.score = 0;
  // Добавление авто
  gameArea.appendChild(car);
  // Фиксирование позиции авто 
  setting.x = car.offsetLeft;
  setting.y = car.offsetTop;
  playGame();
}

function playGame() {
  if (setting.start) {
    
    setting.score += setting.speed;
    score.textContent = setting.score;
    moveRoad();
    moveEnemy();
    moveBg();
    if (keys.ArrowLeft && setting.x > 0) {
      setting.x -= setting.speed;
    }
    if (keys.ArrowRight && setting.x < (gameArea.offsetWidth - car.offsetWidth)) {
      setting.x += setting.speed;
    }
    if (keys.ArrowUp && setting.y > 0) {
      setting.y -= setting.speed;
    }
    if (keys.ArrowDown && setting.y < (gameArea.offsetHeight - car.offsetHeight)) {
      setting.y += setting.speed;
    }
    car.style.left = setting.x + 'px';
    car.style.top = setting.y + 'px';
    // Функция повторяет прорисовку самой себя
    myReq = requestAnimationFrame(playGame);
  }
  if(setting.score > 1998 && setting.score < 2005){
    stopGame();
    _speakWithBoss__WEBPACK_IMPORTED_MODULE_1__.firstSpeakWithAngry();
    setting.score +=15;
  }
}





// Если нажата кнопка - её значение в массиве становится true 
// и срабатывает обработчик по движению в опр. сторону
function startRun(e) {
  e.preventDefault();
  keys[e.key] = true;
}

function stopRun(e) {
  keys[e.key] = false;
}




function moveRoad() {
  // Получаем все линии по тегу line
  let lines = document.querySelectorAll('.line');
  for (let key of lines) {
    // Каждой линии прибавляем скорость движения и пробрасываем в стили через .у
    key.y += setting.speed;
    key.style.top = key.y + 'px';
    // Если отступ линии сверзу больше, чем игровое поле - линия уходит наверх
    if (parseInt(key.style.top) > (gameArea.offsetHeight)) {
      key.y = -82;
    }
  }
}
// Движение фона 
 function moveBg() {
  // Получаем все линии по тегу house
  let houses = document.querySelectorAll('.house');
  for (let key of houses) {
    // Каждой линии прибавляем скорость движения и пробрасываем в стили через .у
    key.y += setting.speed;
    key.style.top = key.y + 'px';
    // Если отступ линии сверзу больше, чем игровое поле - линия уходит наверх
    if (parseInt(key.style.top) > (gameArea.offsetHeight)) {
      key.y = -120;
      // Положение по X  - полная ширина минус ширина элемента
      let ans = Math.random() * (bgArea.offsetWidth - 100);
      if (ans > 900 || ans < 400) {
        key.style.left = ans + 'px';
      }
    }
  }
}

function moveEnemy() {
  let enemys = document.querySelectorAll('.enemy');
  // Получение позиции авто и противников
  for (let key of enemys) {
    // Получаем позицию авто игрока и противников 
    let carRect = car.getBoundingClientRect();
    let enemyRect = key.getBoundingClientRect();
    // Если координаты перескаются - событие окончания игры
    if (carRect.top < enemyRect.bottom && carRect.right > enemyRect.left &&
      carRect.left < enemyRect.right && carRect.bottom > enemyRect.top) {
      setting.start = false;
      start.classList.remove('hide');
      complexity.classList.remove('hide');
      // Останавливаем песню
      stopSound();
      // Добавляем рекорд в массив и выводим в div
      record.push(setting.score);
      rec.innerHTML = 'Рекорд = ' + Math.max(...record);
      // Возвращаем нажатие на Enter
      document.addEventListener('keydown', enterGame);
    }
    // Прибавляем каждой машине скорость и пробрасываем в стили с помощью .y
    key.y += setting.speed;
    key.style.top = key.y + 'px';
    // Если мащина ушла вниз - пробрасываем наверх с изменением позиции по X 
    if (key.y > document.documentElement.clientHeight) {
      key.y = -100 * setting.traffic;
      key.style.left = Math.random() * (gameArea.offsetWidth - 50) + 'px';
      let im = Math.round(Math.random() * 3) + 1;
      key.style.background = `url('./image/enemy/${im}.webp') center / cover no-repeat`;
    }
  }
}

// Остановка движения

function stopGame(e = 'Space') {
  if (e.code === 'Space' || e == 'Space'){
    // Отменяем анимацию
    window.cancelAnimationFrame(myReq);
    // Убираем паузу
    document.removeEventListener('keydown', stopGame);
    // Добавляем продолжение игры
    document.addEventListener('keydown', continueGame);
  }
}


// Продолжение движения

function continueGame(e = 'Space') {
  if (e.code === 'Space' || e == 'Space'){
    // Добавляем старт игры
    myReq = window.requestAnimationFrame(playGame);
    // Добавляем паузу
    document.addEventListener('keydown', stopGame);
    // Убираем продолжение (потому что ты только что продолжил, йобана) 
    document.removeEventListener('keydown', continueGame);
    document.removeEventListener('keydown', enterGame);
  }
}

document.addEventListener('keydown', stopGame);


/***/ }),

/***/ "./src/speakWithBoss.js":
/*!******************************!*\
  !*** ./src/speakWithBoss.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "firstSpeakWithAngry": () => /* binding */ firstSpeakWithAngry
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");


// Массив с фразами антагониста
let numSpeak = 0;

const speakAngryBoss = [
  ['Эй, придурок. Мне сказали, ты хочешь бросить вызов моим парням? Думаешь, мы дадим шанс какому-то выскочке? Для начала набери 2 000 очков чтобы показать себя'],
  ['Неплохо, придурок, но для нас ты всё равно лох']
];


// Создание элемента босса и диалогового окна
const enemyBoss = document.createElement('div');
enemyBoss.classList.add('enemyBoss');
// Окно
const dialogArea = document.createElement('div');
dialogArea.classList.add('dialogArea');
// Кнопка "Поехали"
const btnReady = document.createElement('button');


// Плавное появление букв. Получает фразу, празделяет на массив с буквами
function ghostText(text){
  let i = 0.02;
  let arr = text.split('');
    arr.map((key) => {
      let span = document.createElement('span');
      span.textContent = key;
      span.style.animation = `1s ghost ${i}s forwards`;
      i += 0.02;
      dialogArea.appendChild(span);
})
}




  // Стартовый диалог со злодеем 
const firstSpeakWithAngry = function(dialogWrap = dialogArea, boss = enemyBoss, bgAreaSec = _index__WEBPACK_IMPORTED_MODULE_0__.bgArea, btnReadySec = btnReady){
   // В фон вставляем окно с диалогом (где текст)
   bgAreaSec.appendChild(dialogWrap);
   bgAreaSec.appendChild(enemyBoss);
  
  // Показываем картинку босса 
    boss.style.display = 'block';
  // Показываем текст
    dialogWrap.style.display = 'block';
   
    // Достаём фразу из массива с фразами босса
    let speak = speakAngryBoss[numSpeak].toString();
    
    // Функция появления букв
    ghostText(speak);
      // После 1 сек. добавляем кнопку "Начать"
      dialogWrap.appendChild(btnReadySec);
      btnReadySec.textContent = 'Начать';
      // И обработчик клика по ней
      btnReadySec.addEventListener('click', () => {
        // Очищаем диалог
        dialogWrap.innerHTML = ' ';
        // Скрываем фон и босса
        dialogWrap.style.display = 'none';
        boss.style.display = 'none';
        // Нажатие на Enter
        if(numSpeak >= 1){
          console.log(numSpeak)
          document.addEventListener('keydown', _index__WEBPACK_IMPORTED_MODULE_0__.continueGame);
        }
        else{
          document.addEventListener('keydown', _index__WEBPACK_IMPORTED_MODULE_0__.enterGame);
        }
        // Увеличиваем фразу в массиве
      numSpeak++;
        
      })
      
}


// (dialogWrap = dialogArea, boss = enemyBoss, bgAreaSec = bgArea) => {
//     console.log(dialogWrap)
//     dialogWrap.classList.add('dialogArea');
//     boss.style.display = 'block';
//     dialogWrap.style.display = 'block';
//     bgAreaSec.appendChild(dialogArea);
//     bgAreaSec.appendChild(enemyBoss);
//     // Плавное появление букв
//     let speak = speakAngryBoss[numSpeak].toString();
//     let arr = speak.split('');

//     // Скорость появления букв
//     let i = 0.02;
//     arr.map((key) => {
//       let span = document.createElement('span');
//       span.textContent = key;
//       span.style.animation = `1s ghost ${i}s forwards`;
//       i += 0.02;
//       dialogArea.appendChild(span);
//   })
// }

// export const addBtnSpeakBoss = () => {
//   console.log('Работаю')
//   numSpeak++;
//   setTimeout(() => {
//     // После 1 сек. добавляем кнопку
//     dialogArea.appendChild(btnReady);
//     btnReady.textContent = 'Начать';
//     // И обработчик клика по ней
//     btnReady.addEventListener('click', () => {
//       // Очищаем диалог
//       dialogArea.innerHTML = ' ';
//       // Очищаем фон
//       dialogArea.style.display = 'none';
//       enemyBoss.style.display = 'none';
//       // Нажатие на Enter
//       document.addEventListener('keydown', enterGame);
//     })
//   }, 1000)
// }



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/index.js");
/******/ })()
;
//# sourceMappingURL=bundle.js.map