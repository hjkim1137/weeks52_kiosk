let plus = document.querySelector('.plusBtn');
let minus = document.querySelector('.minusBtn');
let number = document.querySelector('.number');
let reset = document.querySelector('.resetBtn');
let orderBtn = document.querySelector('.orderBtn');
let menu = document.querySelector('.menu');
let initialPrice = document.getElementById('price');

// fetch menu
async function fetchMenu() {
  try {
    const res = await fetch('http://localhost:9999/menu');
    let data = await res.json();
    // promise 뒤에 await 꼭 해줘야 함!!! 안그러면 pending 상태 promise 객체 반환되어 정확한 결과 얻기 어려움
    console.log('data', data);
    return data;
  } catch (err) {
    console.log('err', err);
  }
}

// choose menu
// fetchMenu API 호출은 여기서 함
async function addtoList() {
  let menuList = await fetchMenu();
  for (let i in menuList) {
    let singleMenu = menuList[i]; // 메뉴 정보 모음
    console.log('menu', singleMenu);
  }
}

// order process
// 변화하는 상태값에 대한 정의
let count = Number(number.textContent);
let price = Number(initialPrice.textContent);
// 7,500원이라고 써두면 안됨(문자, 숫자 섞임 -> NaN 오류 발생)

function plusNum() {
  count = count + 1;
  number.textContent = count;
  calculate();
}
function minusNum() {
  if (count > 1) {
    // 1이상으로 해둬야 -1 해도 최소수량 1을 유지함
    count = count - 1;
    number.textContent = count;
    calculate();
  }
}
function resetNum() {
  if (window.confirm('주문을 초기화 하시겠습니까?')) {
    number.textContent = 1;
    initialPrice.textContent = price;
  } else return;
}
// 주문하기
function order() {
  if (window.confirm('담은 내용으로 주문하시겠습니까?')) {
    location.href = './success.html';
  } else return;
}

function calculate() {
  let totalPrice = count * price;
  // 계산 영역이니까 totalPrice 변수는 전역이 아닌, 이 함수 안에서 선언해야 함
  console.log('totalprice', totalPrice);
  initialPrice.textContent = totalPrice;
}

// eventListener
plus.addEventListener('click', plusNum);
minus.addEventListener('click', minusNum);
reset.addEventListener('click', resetNum);
orderBtn.addEventListener('click', order);
menu.addEventListener('click', addtoList);