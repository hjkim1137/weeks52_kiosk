const eatIn = document.querySelector('.eat-in');
const takeOut = document.querySelector('.take-out');

eatIn.addEventListener('click', moveToOrder);
takeOut.addEventListener('click', moveToOrder);

function moveToOrder() {
  console.log('페이지 이동');
  location.href = './order.html';
}
