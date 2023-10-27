const number = document.querySelector('.number');

function getNumber(min, max) {
  let random = Math.floor(Math.random() * (max - min + 1) + min);
  console.log('random', random);
  return (number.textContent = random);
}
getNumber(100, 999);

// 최소값, 최대값 범위 정하기
// 0 <= x <1
// 0*(999-100+1) <= x <1*(999-100+1)
// 0 <= x < 900
// 0+100 <= x < 1000
// 100 <= x < 1000

let toHome = document.querySelector('.toHome');
toHome.addEventListener('click', toHomepage);

function toHomepage() {
  location.href = './index.html';
}
