'use strict'

window.addEventListener('DOMContentLoaded', () => {

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
  compRange = document.querySelector('#complexityRange'); //Range выбора сложности 

  // ID функции - прорисовщика
  let myReq, secondMyReq;
// Массив с рекордами
  let record = [];

 // Создание элемента босса и диалогового окна
 const enemyBoss = document.createElement('div');
 const dialogArea = document.createElement('div');
 bgArea.appendChild(dialogArea);
 const btnReady = document.createElement('button');

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

// Массив с фразами антагониста
let numSpeak = 0;
let firstSpeakWithAngry;

const speakAngryBoss = [
  ['Эй, придурок. Мне сказали, ты хочешь бросить вызов моим парням? Думаешь, мы дадим шанс какому-то выскочке? Для начала набери 20 000 очков чтобы показать себя'],
  ['Неплохо, придурок, но для нас ты всё равно лох']
]



  // Стартовый диалог со злодеем 
  let speakWitchAngry = new Promise(function(resolve, reject){
    firstSpeakWithAngry = function() {
    dialogArea.classList.add('dialogArea');
    enemyBoss.classList.add('enemyBoss');
    enemyBoss.style.display = 'block';
    dialogArea.style.display = 'block';
    bgArea.appendChild(dialogArea);
    bgArea.appendChild(enemyBoss);
    // Плавное появление букв
    let speak = speakAngryBoss[numSpeak].toString();
    let arr = speak.split('');
    console.log(numSpeak)
    // Скорость появления букв
    let i = 0.02;
    arr.map((key) => {
      let span = document.createElement('span');
      span.textContent = key;
      span.style.animation = `1s ghost ${i}s forwards`;
      i += 0.02;
      resolve(dialogArea.appendChild(span));
  })
}
firstSpeakWithAngry()

})

// Когда диалог с боссом закончился 

speakWitchAngry.then(() => {
  numSpeak++;
  setTimeout(() => {
    // После 5 сек. добавляем кнопку
    dialogArea.appendChild(btnReady);
    btnReady.textContent = 'Начать';
    // И обработчик клика по ней
    btnReady.addEventListener('click', () => {
      // Очищаем диалог
      dialogArea.innerHTML = ' ';
      // Очищаем фон
      dialogArea.style.display = 'none';
      enemyBoss.style.display = 'none';
      // Нажатие на Enter
      document.addEventListener('keydown', enterGame);
    })
  }, 1000)
});

// Покупка машины
function buyCar(){
  // Обёртка
  let buyCarWrap = document.createElement('div');
  buyCarWrap.classList.add('buyCarWrap')
  // Машины
  let buyCar = document.createElement('div');
  buyCar.classList.add('buyCar');
  // Текст
  let buyText = document.createElement('span');
  // Купить Кнопка
  let btnBuy = document.createElement('button');
  btnBuy.classList.add('btnBuy');
  btnBuy.textContent = 'Купить';
  // Массив с машинами(чтобы удалять border)
  let carArray = [];
  // Каждая машина
  for(let i = 1; i < 3; i++){

    let buyCarItem = document.createElement('div');
    buyCarItem.classList.add('buyCarItem');
    buyCarItem.style.background = `transparent url('./image/car/${i}.png') center / cover no-repeat`;
    buyCar.appendChild(buyCarItem);
    carArray.push(buyCarItem);
    //Клик по машине
    buyCarItem.addEventListener('click', function checkItem(e){
      //Убираем обводку с отстальных машин
      carArray.forEach(item => {
        item.style.border = 'none';
      })
      // Добавляем обводку к выбранной машине
        let shopCar = e.target;
        shopCar.style.border = '2px solid green';
      // Добавляем обработчик на кнопку "Купить"
        btnBuy.addEventListener('click', function(){
          // По кнопке купить машина игрока меняется на ту, что выбрал
          car.style.background = shopCar.style.background;
          buyCarWrap.style.display = 'none';
      });
      // Добавляем кнопку
      buyCar.appendChild(btnBuy);

    })
  }
  buyText.textContent = 'Купить машину';
  buyCarWrap.appendChild(buyText);
  buyCarWrap.appendChild(buyCar);
  document.body.appendChild(buyCarWrap);
}
// Вызов функции покупки машины
buyCar();

// Фоновая музыка


function playSound() {
  audio.src = './audio/1.mp3'; // Указываем путь к звуку "клика"
  audio.autoplay = true; // Автоматически запускаем
}

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
  if(setting.score > 19999 && setting.score < 20005){
    stopGame();
    firstSpeakWithAngry();
    speakWitchAngry.then(() => {
      numSpeak++;
      setTimeout(() => {
        // После 5 сек. добавляем кнопку
        dialogArea.appendChild(btnReady);
        btnReady.textContent = 'Ехать дальше';
        // И обработчик клика по ней
        btnReady.addEventListener('click', () => {
          // Очищаем диалог
          dialogArea.innerHTML = ' ';
          // Очищаем фон
          dialogArea.style.display = 'none';
          enemyBoss.style.display = 'none';
          // Нажатие на Enter
          continueGame();
        })
      }, 1000)
    });
    setting.score +=5;
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


})