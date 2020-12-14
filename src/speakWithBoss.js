import { bgArea, enterGame, continueGame } from './index'

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
export const firstSpeakWithAngry = function(dialogWrap = dialogArea, boss = enemyBoss, bgAreaSec = bgArea, btnReadySec = btnReady){
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
          document.addEventListener('keydown', continueGame);
        }
        else{
          document.addEventListener('keydown', enterGame);
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

