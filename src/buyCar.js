import * as main from './index.js'
import * as garage from './garage.js'


export let carArray = [
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

export function buyCarCar([carName, carPrice, carSpeed, carPicture]){
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
      console.log(main.car)
      // Добавляем обводку к выбранной машине
        let shopCar = e.target;
        shopCar.style.border = '2px solid green';
      // Добавляем обработчик на кнопку "Купить"
        btnBuy.addEventListener('click', function(){
          // По кнопке купить машина игрока меняется на ту, что выбрал
          main.car.style.background = shopCar.style.background;
          buyCarWrap.style.display = 'none';
          // Добавляем машину в гараж
          garage.addCarInGarage(main.car);
      });
      // Добавляем кнопку
      buyCar.appendChild(btnBuy);
    })

} 

