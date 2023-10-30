const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.content');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    // getAttribute
    const tabNumber = tab.getAttribute('data-tab'); // 1,2,3,4

    // 1. 특정 탭 클릭 이후 모든 탭의 class(selected,show) 제거
    tabs.forEach((t) => t.classList.remove('selected'));
    contents.forEach((c) => c.classList.remove('show'));

    // 2. 선택한 특정 탭만 class명 추가(selected, show) => 즉 attribute 다시 지웠다 추가하는 것
    tab.classList.add('selected');
    // 예) attribute명이 data-content =1 인 요소의 클래스에 'show'추가
    document
      .querySelector(`[data-content="${tabNumber}"]`)
      .classList.add('show');
  });
});
