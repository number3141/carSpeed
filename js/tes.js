let Ten__dateStart = new Date(Date.UTC(2015, 10, 15, 4));

  let Ten__dateStartSecond = Math.round(Ten__dateStart / 1000);
  let Ten__dateStartMin = Math.round(Ten__dateStartSecond / 60);
  let Ten__dateStartHours = Math.round(Ten__dateStartMin / 60);
  let Ten__dateStartDay = Math.round(Ten__dateStartHours / 24);
  

  // let dayStartDay = dayStart.getDay();
  let Ten__dayBlock = document.querySelector('.Ten__dayBlock');
  let Ten__HoursBlock = document.querySelector('.Ten__hoursBlock');
  let Ten__MinutsBlock = document.querySelector('.Ten__minutsBlock');
  let Ten__secondsBlock = document.querySelector('.Ten__secondsBlock');
  

  setInterval(() => {
    // Сейчас сколько времени
    let Ten__dateNow = new Date();
    let Ten__dateNowSecond = Math.round(Ten__dateNow / 1000);
    let Ten__dateNowMin = Math.round(Ten__dateNowSecond / 60);
    let Ten__dateNowHours = Math.round(Ten__dateNowMin / 60);
    let Ten__dateNowDay = Math.round(Ten__dateNowHours / 24);
    // Сколько прошло
    let Ten__setDateDay = Ten__dateNowDay - Ten__dateStartDay;
    let Ten__setDateHours = Ten__dateNowHours - Ten__dateStartHours;
    let Ten__setDateMin = Ten__dateNowMin - Ten__dateStartMin; 
    let Ten__setDateSecond = Ten__dateNowSecond - Ten__dateStartSecond;
    // console.log(setDateDay, setDateHours, setDateMin, setDateSecond);

    Ten__arrNumNoReplace = [Ten__setDateDay, Ten__setDateHours, Ten__setDateMin, Ten__setDateSecond];

    Ten__arrNumAddReplace = drawDate(Ten__arrNumNoReplace);
    
    Ten__dayBlock.textContent = `${Ten__arrNumAddReplace[0]} дней`;
    Ten__HoursBlock.textContent = `${Ten__arrNumAddReplace[1]} часов`;
    Ten__MinutsBlock.textContent = `${Ten__arrNumAddReplace[2]} минут`;
    Ten__secondsBlock.textContent = `${Ten__arrNumAddReplace[3]} секунд`;
  }, 1000)