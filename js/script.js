document.addEventListener('DOMContentLoaded', () => {
  // let scrollBody = document.querySelector('.scrollContainer');
  // let a = 1;
  // let deg = 245;

  // document.addEventListener('click', (e) => {
  //   let target = e.target;
  //   if(target.classList.contains('swapBtn')){
  //     let timer = setInterval(() => {
  //       a += 1; 
  //       deg += 0.6;
  //       scrollBody.style.transform = `translateY(-${a}vh)`;
  //       scrollBody.style.background = `linear-gradient(${deg}deg, rgba(40,0,46,1) 0%, rgba(129,0,52,1) 100%)`
  //       if(a % 100 == 0){
  //         clearInterval(timer);
  //       } 
  //     }, 10)
  //   }
  // })

  // Сколько мы знакомы

  let dateStart = new Date(Date.UTC(2021, 08, 16, 4));
  let dateStartSecond = Math.round(dateStart / 1000);
  let dateStartMin = Math.round(dateStartSecond / 60);
  let dateStartHours = Math.round(dateStartMin / 60);
  let dateStartDay = Math.round(dateStartHours / 24);
  

  // let dayStartDay = dayStart.getDay();
  let dayBlock = document.querySelector('.dayBlock');
  let HoursBlock = document.querySelector('.hoursBlock');
  let MinutsBlock = document.querySelector('.minutsBlock');
  let secondsBlock = document.querySelector('.secondsBlock');
  

  setInterval(() => {
    // Сейчас сколько времени
    let dateNow = new Date();
    let dateNowSecond = Math.round(dateNow / 1000);
    let dateNowMin = Math.round(dateNowSecond / 60);
    let dateNowHours = Math.round(dateNowMin / 60);
    let dateNowDay = Math.round(dateNowHours / 24);
    // Сколько прошло
    let setDateDay = dateNowDay - dateStartDay;
    let setDateHours = dateNowHours - dateStartHours;
    let setDateMin = dateNowMin - dateStartMin; 
    let setDateSecond = dateNowSecond - dateStartSecond;
    // console.log(setDateDay, setDateHours, setDateMin, setDateSecond);

    arrNumNoReplace = [setDateDay, setDateHours, setDateMin, setDateSecond];

    arrNumAddReplace = drawDate(arrNumNoReplace);
    
    dayBlock.textContent = `${arrNumAddReplace[0]} дней`;
    HoursBlock.textContent = `${arrNumAddReplace[1]} часов`;
    MinutsBlock.textContent = `${arrNumAddReplace[2]} минут`;
    secondsBlock.textContent = `${arrNumAddReplace[3]} секунд`;
  }, 1000)

  function drawDate(arrData){
    newAr = arrData.map(element => {
      return element.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    });
    return newAr
  }


})