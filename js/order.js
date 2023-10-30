let plus = document.querySelector('.plusBtn');
let minus = document.querySelector('.minusBtn');
let number = document.querySelector('.number');
let reset = document.querySelector('.resetBtn');
let orderBtn = document.querySelector('.orderBtn');
let initialPrice = document.getElementById('price');

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

// 탭 전환 기능
const tabs = document.querySelectorAll('.tab');
const containers = document.querySelectorAll('.group');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    // getAttribute
    const tabNumber = tab.getAttribute('data-tab'); // 1,2,3,4

    // 1. 특정 탭 클릭 이후 모든 탭의 class(selected,show) 제거
    tabs.forEach((t) => t.classList.remove('selected'));
    containers.forEach((c) => c.classList.remove('show'));

    // 2. 선택한 특정 탭만 class명 추가(selected, show) => 즉 attribute 다시 지웠다 추가하는 것
    tab.classList.add('selected');
    // 예) attribute명이 data-content =1 인 요소의 클래스에 'show'추가
    document
      .querySelector(`[data-content="${tabNumber}"]`)
      .classList.add('show');
  });
});

// eventListener
plus.addEventListener('click', plusNum);
minus.addEventListener('click', minusNum);
reset.addEventListener('click', resetNum);
orderBtn.addEventListener('click', order);
