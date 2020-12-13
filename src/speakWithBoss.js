import { bgArea, dialogArea, enemyBoss, btnReady, enterGame } from './index'

// Массив с фразами антагониста
let numSpeak = 0;

const speakAngryBoss = [
  ['Эй, придурок. Мне сказали, ты хочешь бросить вызов моим парням? Думаешь, мы дадим шанс какому-то выскочке? Для начала набери 20 000 очков чтобы показать себя'],
  ['Неплохо, придурок, но для нас ты всё равно лох']
]




  // Стартовый диалог со злодеем 
export const firstSpeakWithAngry = function(dialogWrap = dialogArea, boss = enemyBoss, bgAreaSec = bgArea, btnReadySec = btnReady){
    dialogWrap.classList.add('dialogArea');
    boss.style.display = 'block';
    dialogWrap.style.display = 'block';
    bgAreaSec.appendChild(dialogArea);
    bgAreaSec.appendChild(enemyBoss);
    // Плавное появление букв
    let speak = speakAngryBoss[numSpeak].toString();
    let arr = speak.split('');

    // Скорость появления букв
    let i = 0.02;
    arr.map((key) => {
      let span = document.createElement('span');
      span.textContent = key;
      span.style.animation = `1s ghost ${i}s forwards`;
      i += 0.02;
      dialogArea.appendChild(span);
})

console.log('Работаю')
  numSpeak++;
  setTimeout(() => {
    // После 1 сек. добавляем кнопку
    dialogWrap.appendChild(btnReadySec);
    btnReadySec.textContent = 'Начать';
    // И обработчик клика по ней
    btnReadySec.addEventListener('click', () => {
      // Очищаем диалог
      dialogWrap.innerHTML = ' ';
      // Очищаем фон
      dialogWrap.style.display = 'none';
      boss.style.display = 'none';
      // Нажатие на Enter
      document.addEventListener('keydown', enterGame);
    })
  }, 1000)

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

