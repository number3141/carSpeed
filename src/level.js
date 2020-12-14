import {firstSpeakWithAngry} from './speakWithBoss';

export class Level{
  constructor(bgWeather, bgObject){
    this.bgWeather = bgWeather;
    this.bgObject = bgObject;
  }

  startLevel(){
    
  }

  speakWithAngry(dialogWrap = dialogArea, boss = enemyBoss, bgAreaSec = bgArea, btnReadySec = btnReady){
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
         // Увеличиваем фразу в массиве
         numSpeak++;
         // Нажатие на Enter
         document.addEventListener('keydown', enterGame);
  });
}
  
}