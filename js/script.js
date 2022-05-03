document.addEventListener('DOMContentLoaded', () => {

  let load = document.querySelector('.load');
  window.addEventListener('load', () => {
    load.classList.add('hidden');
  })
  // Сколько мы знакомы для первой секции 

  let First__dateStart = new Date(Date.UTC(2015, 04, 10, 4));

  let First__dateStartSecond = Math.round(First__dateStart / 1000);
  let First__dateStartMin = Math.round(First__dateStartSecond / 60);
  let First__dateStartHours = Math.round(First__dateStartMin / 60);
  let First__dateStartDay = Math.round(First__dateStartHours / 24);
  

  // let dayStartDay = dayStart.getDay();
  let First__dayBlock = document.querySelector('.First__dayBlock');
  let First__HoursBlock = document.querySelector('.First__hoursBlock');
  let First__MinutsBlock = document.querySelector('.First__minutsBlock');
  let First__secondsBlock = document.querySelector('.First__secondsBlock');
  

  setInterval(() => {
    // Сейчас сколько времени
    let First__dateNow = new Date();
    let First__dateNowSecond = Math.round(First__dateNow / 1000);
    let First__dateNowMin = Math.round(First__dateNowSecond / 60);
    let First__dateNowHours = Math.round(First__dateNowMin / 60);
    let First__dateNowDay = Math.round(First__dateNowHours / 24);
    // Сколько прошло
    let First__setDateDay = First__dateNowDay - First__dateStartDay;
    let First__setDateHours = First__dateNowHours - First__dateStartHours;
    let First__setDateMin = First__dateNowMin - First__dateStartMin; 
    let First__setDateSecond = First__dateNowSecond - First__dateStartSecond;
    // console.log(setDateDay, setDateHours, setDateMin, setDateSecond);

    First__arrNumNoReplace = [First__setDateDay, First__setDateHours, First__setDateMin, First__setDateSecond];

    First__arrNumAddReplace = drawDate(First__arrNumNoReplace);
    
    First__dayBlock.textContent = `${First__arrNumAddReplace[0]} дней`;
    First__HoursBlock.textContent = `${First__arrNumAddReplace[1]} часов`;
    First__MinutsBlock.textContent = `${First__arrNumAddReplace[2]} минут`;
    First__secondsBlock.textContent = `${First__arrNumAddReplace[3]} секунд`;
  }, 1000)


  let Sec__dateStart = new Date(Date.UTC(2015, 05, 10, 4));

  let Sec__dateStartSecond = Math.round(Sec__dateStart / 1000);
  let Sec__dateStartMin = Math.round(Sec__dateStartSecond / 60);
  let Sec__dateStartHours = Math.round(Sec__dateStartMin / 60);
  let Sec__dateStartDay = Math.round(Sec__dateStartHours / 24);
  

  // let dayStartDay = dayStart.getDay();
  let Sec__dayBlock = document.querySelector('.Sec__dayBlock');
  let Sec__HoursBlock = document.querySelector('.Sec__hoursBlock');
  let Sec__MinutsBlock = document.querySelector('.Sec__minutsBlock');
  let Sec__secondsBlock = document.querySelector('.Sec__secondsBlock');
  

  setInterval(() => {
    // Сейчас сколько времени
    let Sec__dateNow = new Date();
    let Sec__dateNowSecond = Math.round(Sec__dateNow / 1000);
    let Sec__dateNowMin = Math.round(Sec__dateNowSecond / 60);
    let Sec__dateNowHours = Math.round(Sec__dateNowMin / 60);
    let Sec__dateNowDay = Math.round(Sec__dateNowHours / 24);
    // Сколько прошло
    let Sec__setDateDay = Sec__dateNowDay - Sec__dateStartDay;
    let Sec__setDateHours = Sec__dateNowHours - Sec__dateStartHours;
    let Sec__setDateMin = Sec__dateNowMin - Sec__dateStartMin; 
    let Sec__setDateSecond = Sec__dateNowSecond - Sec__dateStartSecond;
    // console.log(setDateDay, setDateHours, setDateMin, setDateSecond);

    Sec__arrNumNoReplace = [Sec__setDateDay, Sec__setDateHours, Sec__setDateMin, Sec__setDateSecond];

    Sec__arrNumAddReplace = drawDate(Sec__arrNumNoReplace);
    
    Sec__dayBlock.textContent = `${Sec__arrNumAddReplace[0]} дней`;
    Sec__HoursBlock.textContent = `${Sec__arrNumAddReplace[1]} часов`;
    Sec__MinutsBlock.textContent = `${Sec__arrNumAddReplace[2]} минут`;
    Sec__secondsBlock.textContent = `${Sec__arrNumAddReplace[3]} секунд`;
  }, 1000)



  let Third__dateStart = new Date(Date.UTC(2015, 06, 10, 4));

  let Third__dateStartSecond = Math.round(Third__dateStart / 1000);
  let Third__dateStartMin = Math.round(Third__dateStartSecond / 60);
  let Third__dateStartHours = Math.round(Third__dateStartMin / 60);
  let Third__dateStartDay = Math.round(Third__dateStartHours / 24);
  

  // let dayStartDay = dayStart.getDay();
  let Third__dayBlock = document.querySelector('.Third__dayBlock');
  let Third__HoursBlock = document.querySelector('.Third__hoursBlock');
  let Third__MinutsBlock = document.querySelector('.Third__minutsBlock');
  let Third__secondsBlock = document.querySelector('.Third__secondsBlock');
  

  setInterval(() => {
    // Сейчас сколько времени
    let Third__dateNow = new Date();
    let Third__dateNowSecond = Math.round(Third__dateNow / 1000);
    let Third__dateNowMin = Math.round(Third__dateNowSecond / 60);
    let Third__dateNowHours = Math.round(Third__dateNowMin / 60);
    let Third__dateNowDay = Math.round(Third__dateNowHours / 24);
    // Сколько прошло
    let Third__setDateDay = Third__dateNowDay - Third__dateStartDay;
    let Third__setDateHours = Third__dateNowHours - Third__dateStartHours;
    let Third__setDateMin = Third__dateNowMin - Third__dateStartMin; 
    let Third__setDateSecond = Third__dateNowSecond - Third__dateStartSecond;
    // console.log(setDateDay, setDateHours, setDateMin, setDateSecond);

    Third__arrNumNoReplace = [Third__setDateDay, Third__setDateHours, Third__setDateMin, Third__setDateSecond];

    Third__arrNumAddReplace = drawDate(Third__arrNumNoReplace);
    
    Third__dayBlock.textContent = `${Third__arrNumAddReplace[0]} дней`;
    Third__HoursBlock.textContent = `${Third__arrNumAddReplace[1]} часов`;
    Third__MinutsBlock.textContent = `${Third__arrNumAddReplace[2]} минут`;
    Third__secondsBlock.textContent = `${Third__arrNumAddReplace[3]} секунд`;
  }, 1000)


  let Four__dateStart = new Date(Date.UTC(2015, 08, 15, 4));

  let Four__dateStartSecond = Math.round(Four__dateStart / 1000);
  let Four__dateStartMin = Math.round(Four__dateStartSecond / 60);
  let Four__dateStartHours = Math.round(Four__dateStartMin / 60);
  let Four__dateStartDay = Math.round(Four__dateStartHours / 24);
  

  // let dayStartDay = dayStart.getDay();
  let Four__dayBlock = document.querySelector('.Four__dayBlock');
  let Four__HoursBlock = document.querySelector('.Four__hoursBlock');
  let Four__MinutsBlock = document.querySelector('.Four__minutsBlock');
  let Four__secondsBlock = document.querySelector('.Four__secondsBlock');
  

  setInterval(() => {
    // Сейчас сколько времени
    let Four__dateNow = new Date();
    let Four__dateNowSecond = Math.round(Four__dateNow / 1000);
    let Four__dateNowMin = Math.round(Four__dateNowSecond / 60);
    let Four__dateNowHours = Math.round(Four__dateNowMin / 60);
    let Four__dateNowDay = Math.round(Four__dateNowHours / 24);
    // Сколько прошло
    let Four__setDateDay = Four__dateNowDay - Four__dateStartDay;
    let Four__setDateHours = Four__dateNowHours - Four__dateStartHours;
    let Four__setDateMin = Four__dateNowMin - Four__dateStartMin; 
    let Four__setDateSecond = Four__dateNowSecond - Four__dateStartSecond;
    // console.log(setDateDay, setDateHours, setDateMin, setDateSecond);

    Four__arrNumNoReplace = [Four__setDateDay, Four__setDateHours, Four__setDateMin, Four__setDateSecond];

    Four__arrNumAddReplace = drawDate(Four__arrNumNoReplace);
    
    Four__dayBlock.textContent = `${Four__arrNumAddReplace[0]} дней`;
    Four__HoursBlock.textContent = `${Four__arrNumAddReplace[1]} часов`;
    Four__MinutsBlock.textContent = `${Four__arrNumAddReplace[2]} минут`;
    Four__secondsBlock.textContent = `${Four__arrNumAddReplace[3]} секунд`;
  }, 1000)

  let Five__dateStart = new Date(Date.UTC(2015, 11, 15, 4));

  let Five__dateStartSecond = Math.round(Five__dateStart / 1000);
  let Five__dateStartMin = Math.round(Five__dateStartSecond / 60);
  let Five__dateStartHours = Math.round(Five__dateStartMin / 60);
  let Five__dateStartDay = Math.round(Five__dateStartHours / 24);
  

  // let dayStartDay = dayStart.getDay();
  let Five__dayBlock = document.querySelector('.Five__dayBlock');
  let Five__HoursBlock = document.querySelector('.Five__hoursBlock');
  let Five__MinutsBlock = document.querySelector('.Five__minutsBlock');
  let Five__secondsBlock = document.querySelector('.Five__secondsBlock');
  

  setInterval(() => {
    // Сейчас сколько времени
    let Five__dateNow = new Date();
    let Five__dateNowSecond = Math.round(Five__dateNow / 1000);
    let Five__dateNowMin = Math.round(Five__dateNowSecond / 60);
    let Five__dateNowHours = Math.round(Five__dateNowMin / 60);
    let Five__dateNowDay = Math.round(Five__dateNowHours / 24);
    // Сколько прошло
    let Five__setDateDay = Five__dateNowDay - Five__dateStartDay;
    let Five__setDateHours = Five__dateNowHours - Five__dateStartHours;
    let Five__setDateMin = Five__dateNowMin - Five__dateStartMin; 
    let Five__setDateSecond = Five__dateNowSecond - Five__dateStartSecond;
    // console.log(setDateDay, setDateHours, setDateMin, setDateSecond);

    Five__arrNumNoReplace = [Five__setDateDay, Five__setDateHours, Five__setDateMin, Five__setDateSecond];

    Five__arrNumAddReplace = drawDate(Five__arrNumNoReplace);
    
    Five__dayBlock.textContent = `${Five__arrNumAddReplace[0]} дней`;
    Five__HoursBlock.textContent = `${Five__arrNumAddReplace[1]} часов`;
    Five__MinutsBlock.textContent = `${Five__arrNumAddReplace[2]} минут`;
    Five__secondsBlock.textContent = `${Five__arrNumAddReplace[3]} секунд`;
  }, 1000)

  let Six__dateStart = new Date(Date.UTC(2016, 04, 15, 4));

  let Six__dateStartSecond = Math.round(Six__dateStart / 1000);
  let Six__dateStartMin = Math.round(Six__dateStartSecond / 60);
  let Six__dateStartHours = Math.round(Six__dateStartMin / 60);
  let Six__dateStartDay = Math.round(Six__dateStartHours / 24);
  

  // let dayStartDay = dayStart.getDay();
  let Six__dayBlock = document.querySelector('.Six__dayBlock');
  let Six__HoursBlock = document.querySelector('.Six__hoursBlock');
  let Six__MinutsBlock = document.querySelector('.Six__minutsBlock');
  let Six__secondsBlock = document.querySelector('.Six__secondsBlock');
  

  setInterval(() => {
    // Сейчас сколько времени
    let Six__dateNow = new Date();
    let Six__dateNowSecond = Math.round(Six__dateNow / 1000);
    let Six__dateNowMin = Math.round(Six__dateNowSecond / 60);
    let Six__dateNowHours = Math.round(Six__dateNowMin / 60);
    let Six__dateNowDay = Math.round(Six__dateNowHours / 24);
    // Сколько прошло
    let Six__setDateDay = Six__dateNowDay - Six__dateStartDay;
    let Six__setDateHours = Six__dateNowHours - Six__dateStartHours;
    let Six__setDateMin = Six__dateNowMin - Six__dateStartMin; 
    let Six__setDateSecond = Six__dateNowSecond - Six__dateStartSecond;
    // console.log(setDateDay, setDateHours, setDateMin, setDateSecond);

    Six__arrNumNoReplace = [Six__setDateDay, Six__setDateHours, Six__setDateMin, Six__setDateSecond];

    Six__arrNumAddReplace = drawDate(Six__arrNumNoReplace);
    
    Six__dayBlock.textContent = `${Six__arrNumAddReplace[0]} дней`;
    Six__HoursBlock.textContent = `${Six__arrNumAddReplace[1]} часов`;
    Six__MinutsBlock.textContent = `${Six__arrNumAddReplace[2]} минут`;
    Six__secondsBlock.textContent = `${Six__arrNumAddReplace[3]} секунд`;
  }, 1000)


  let Sev__dateStart = new Date(Date.UTC(2016, 10, 15, 4));

  let Sev__dateStartSecond = Math.round(Sev__dateStart / 1000);
  let Sev__dateStartMin = Math.round(Sev__dateStartSecond / 60);
  let Sev__dateStartHours = Math.round(Sev__dateStartMin / 60);
  let Sev__dateStartDay = Math.round(Sev__dateStartHours / 24);
  

  // let dayStartDay = dayStart.getDay();
  let Sev__dayBlock = document.querySelector('.Sev__dayBlock');
  let Sev__HoursBlock = document.querySelector('.Sev__hoursBlock');
  let Sev__MinutsBlock = document.querySelector('.Sev__minutsBlock');
  let Sev__secondsBlock = document.querySelector('.Sev__secondsBlock');
  

  setInterval(() => {
    // Сейчас сколько времени
    let Sev__dateNow = new Date();
    let Sev__dateNowSecond = Math.round(Sev__dateNow / 1000);
    let Sev__dateNowMin = Math.round(Sev__dateNowSecond / 60);
    let Sev__dateNowHours = Math.round(Sev__dateNowMin / 60);
    let Sev__dateNowDay = Math.round(Sev__dateNowHours / 24);
    // Сколько прошло
    let Sev__setDateDay = Sev__dateNowDay - Sev__dateStartDay;
    let Sev__setDateHours = Sev__dateNowHours - Sev__dateStartHours;
    let Sev__setDateMin = Sev__dateNowMin - Sev__dateStartMin; 
    let Sev__setDateSecond = Sev__dateNowSecond - Sev__dateStartSecond;
    // console.log(setDateDay, setDateHours, setDateMin, setDateSecond);

    Sev__arrNumNoReplace = [Sev__setDateDay, Sev__setDateHours, Sev__setDateMin, Sev__setDateSecond];

    Sev__arrNumAddReplace = drawDate(Sev__arrNumNoReplace);
    
    Sev__dayBlock.textContent = `${Sev__arrNumAddReplace[0]} дней`;
    Sev__HoursBlock.textContent = `${Sev__arrNumAddReplace[1]} часов`;
    Sev__MinutsBlock.textContent = `${Sev__arrNumAddReplace[2]} минут`;
    Sev__secondsBlock.textContent = `${Sev__arrNumAddReplace[3]} секунд`;
  }, 1000)


  let Ei__dateStart = new Date(Date.UTC(2017, 1, 7, 4));

  let Ei__dateStartSecond = Math.round(Ei__dateStart / 1000);
  let Ei__dateStartMin = Math.round(Ei__dateStartSecond / 60);
  let Ei__dateStartHours = Math.round(Ei__dateStartMin / 60);
  let Ei__dateStartDay = Math.round(Ei__dateStartHours / 24);
  

  // let dayStartDay = dayStart.getDay();
  let Ei__dayBlock = document.querySelector('.Ei__dayBlock');
  let Ei__HoursBlock = document.querySelector('.Ei__hoursBlock');
  let Ei__MinutsBlock = document.querySelector('.Ei__minutsBlock');
  let Ei__secondsBlock = document.querySelector('.Ei__secondsBlock');
  

  setInterval(() => {
    // Сейчас сколько времени
    let Ei__dateNow = new Date();
    let Ei__dateNowSecond = Math.round(Ei__dateNow / 1000);
    let Ei__dateNowMin = Math.round(Ei__dateNowSecond / 60);
    let Ei__dateNowHours = Math.round(Ei__dateNowMin / 60);
    let Ei__dateNowDay = Math.round(Ei__dateNowHours / 24);
    // Сколько прошло
    let Ei__setDateDay = Ei__dateNowDay - Ei__dateStartDay;
    let Ei__setDateHours = Ei__dateNowHours - Ei__dateStartHours;
    let Ei__setDateMin = Ei__dateNowMin - Ei__dateStartMin; 
    let Ei__setDateSecond = Ei__dateNowSecond - Ei__dateStartSecond;
    // console.log(setDateDay, setDateHours, setDateMin, setDateSecond);

    Ei__arrNumNoReplace = [Ei__setDateDay, Ei__setDateHours, Ei__setDateMin, Ei__setDateSecond];

    Ei__arrNumAddReplace = drawDate(Ei__arrNumNoReplace);
    
    Ei__dayBlock.textContent = `${Ei__arrNumAddReplace[0]} дней`;
    Ei__HoursBlock.textContent = `${Ei__arrNumAddReplace[1]} часов`;
    Ei__MinutsBlock.textContent = `${Ei__arrNumAddReplace[2]} минут`;
    Ei__secondsBlock.textContent = `${Ei__arrNumAddReplace[3]} секунд`;
  }, 1000)


  let Ni__dateStart = new Date(Date.UTC(2021, 11, 15, 4));

  let Ni__dateStartSecond = Math.round(Ni__dateStart / 1000);
  let Ni__dateStartMin = Math.round(Ni__dateStartSecond / 60);
  let Ni__dateStartHours = Math.round(Ni__dateStartMin / 60);
  let Ni__dateStartDay = Math.round(Ni__dateStartHours / 24);
  

  // let dayStartDay = dayStart.getDay();
  let Ni__dayBlock = document.querySelector('.Ni__dayBlock');
  let Ni__HoursBlock = document.querySelector('.Ni__hoursBlock');
  let Ni__MinutsBlock = document.querySelector('.Ni__minutsBlock');
  let Ni__secondsBlock = document.querySelector('.Ni__secondsBlock');
  

  setInterval(() => {
    // Сейчас сколько времени
    let Ni__dateNow = new Date();
    let Ni__dateNowSecond = Math.round(Ni__dateNow / 1000);
    let Ni__dateNowMin = Math.round(Ni__dateNowSecond / 60);
    let Ni__dateNowHours = Math.round(Ni__dateNowMin / 60);
    let Ni__dateNowDay = Math.round(Ni__dateNowHours / 24);
    // Сколько прошло
    let Ni__setDateDay = Ni__dateNowDay - Ni__dateStartDay;
    let Ni__setDateHours = Ni__dateNowHours - Ni__dateStartHours;
    let Ni__setDateMin = Ni__dateNowMin - Ni__dateStartMin; 
    let Ni__setDateSecond = Ni__dateNowSecond - Ni__dateStartSecond;
    // console.log(setDateDay, setDateHours, setDateMin, setDateSecond);

    Ni__arrNumNoReplace = [Ni__setDateDay, Ni__setDateHours, Ni__setDateMin, Ni__setDateSecond];

    Ni__arrNumAddReplace = drawDate(Ni__arrNumNoReplace);
    
    Ni__dayBlock.textContent = `${Ni__arrNumAddReplace[0]} дней`;
    Ni__HoursBlock.textContent = `${Ni__arrNumAddReplace[1]} часов`;
    Ni__MinutsBlock.textContent = `${Ni__arrNumAddReplace[2]} минут`;
    Ni__secondsBlock.textContent = `${Ni__arrNumAddReplace[3]} секунд`;
  }, 1000)


  let Ten__dateStart = new Date(Date.UTC(2022, 0, 15, 4));

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

  function drawDate(arrData){
    newAr = arrData.map(element => {
      return element.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    });
    return newAr
  }


})