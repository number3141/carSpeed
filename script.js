const score = document.querySelector('.score'), // очки
  start = document.querySelector('.start'), // кнопка старта
  gameArea = document.querySelector('.gameArea'), // игровое поде
  car = document.createElement('div'), //авто игрока 
  rec = document.querySelector('.record'), //авто противников 
  complexity = document.querySelector('.complexity'), //поле выбора сложности
  bgArea = document.querySelector('.backgroundArea'), //фон с домиками
  compRange = document.querySelector('#complexityRange'); //Range выбора сложности 
// Массив с рекордами
let record = [];

car.classList.add('car');
// Начало по нажатии на Enter 
function enterGame(e) {
  if (e.code === 'Enter') {
    startGame();
  }
}

// Нажание та Enter
document.addEventListener('keydown', enterGame);

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

function startGame() {
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

  // Полосы(имитация дороги)
  for (let i = 0; i < 9; i++) {
    const line = document.createElement('div');
    line.classList.add('line');
    // Позиции каждой черты(не путать с движением. Это просто расположение)
    line.style.top = i * 82 + 'px';
    // .y понадобится для движения дороги
    line.y = i * 82;
    gameArea.appendChild(line);
  }

     // Фон
  for (let i = 0; i < 5; i++) {
    const house = document.createElement('div');
    house.classList.add('house');
    house.style.backgroundImage = 'url("./image/home.png")';
    // Позиции каждой черты(не путать с движением. Это просто расположение)
    house.style.top =  (i * 82) * -1 + 'px';
    let ans = Math.random() * (bgArea.offsetWidth - 100);
      if(ans > 900 || ans < 400){
        house.style.left = ans + 'px';
      }
    // .y понадобится для движения дороги
    house.y = i * 120;

    
    bgArea.appendChild(house);
  }


  // Движение машин
  for (let i = 0; i < 3; i++) {
    const enemy = document.createElement('div');
    enemy.classList.add('enemy');
    enemy.style.top = (i * 100) + 'px';
    // Больше значение трафика - дольше друг от друга машины
    enemy.y = 100 * setting.traffic * i + 1;
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
  requestAnimationFrame(playGame);
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
    requestAnimationFrame(playGame);
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
// Движение дороги
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
      if(ans > 900 || ans < 400){
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
    if (carRect.top < enemyRect.bottom && carRect.right > enemyRect.left && carRect.left < enemyRect.right && carRect.bottom > enemyRect.top) {
      setting.start = false;
      start.classList.remove('hide');
      complexity.classList.remove('hide');
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
    }
  }
}
