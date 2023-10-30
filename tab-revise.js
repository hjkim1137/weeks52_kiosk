const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.content');

tabs.forEach((tab) =>
  // 클릭한요소.addEventlistenr임! 그냥 이벤트리스너가 아니라
  tab.addEventListener('click', () => {
    const tabId = tab.getAttribute('data-tab'); //1 or 2 or 3 or 4

    // for문 한번 더 돌기
    // 클래스명 모두 제거
    tabs.forEach((t) => {
      t.classList.remove('selected');
      contents.forEach((c) => c.classList.remove('show'));
    });

    // 선택한 특정탭만 다시 클래스명 복원
    tab.classList.add('selected');
    document.querySelector(`[data-content="${tabId}"]`).classList.add('show');
  })
);
