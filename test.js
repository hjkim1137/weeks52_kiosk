/*클릭한 탭에 따라 div의 내용이 바뀌도록 함.*/

let tabSwitchers = document.querySelectorAll('[target-wrapper]');
//[target-wrapper] 배열로 작성해줘야함(총 4개)
// querySelectorAll 다음에 attribute명이 올 수 있는지?
console.log('tabSwitchers', tabSwitchers);
// NodeList(4) [li.tab-item.active, li.tab-item, li.tab-item, li.tab-item]

tabSwitchers.forEach((item) => {
  // getAttribute 속성 (attribute 이름은 custom으로 설정 가능함)
  item.addEventListener('click', (e) => {
    // 클릭함으로써 발생되는 것들 이므로 하위 요소들은 모두 current를 가리킴
    let currentWrapperId = item.getAttribute('target-wrapper');
    // "dynamic-table"
    // attribute가 target-wrapper인 node의 값= "first-dynamic-table"
    // 탭 컨테이너를 식별하는 데 사용
    let currentWrapperTargetId = item.getAttribute('target-tab');
    // 탭에서 coffee, tea, bakery, sandwitch
    // 탭 내용을 식별하는 데 사용
    let currentWrappersTarget = document.querySelector(
      `#${currentWrapperTargetId}`
      // 본문(선택된 탭 내용)을 나타내는 요소를 선택하고 저장
      // 본문에서 id가 coffee, tea, bakery, sandwitch 인 요소들의 내용
    );
    // console.log('currentWrappersTarget', currentWrappersTarget);
    // <div class="tab-content active" id="coffee">
    // <h2>아메리카노</h2>
    // </div>

    let allCurrentTabItem = document.querySelectorAll(
      `[target-wrapper='${currentWrapperId}']`
    );
    //현재 선택된 탭과 동일한 target-wrapper 속성을 가진
    // 모든 탭 아이템을 선택하여 allCurrentTabItem 변수에 저장합니다.
    // target-wrapper = first-dynamic-table
    console.log('allCurrentTabItem', allCurrentTabItem);
    // NodeList(4) [li.tab-item.active, li.tab-item, li.tab-item, li.tab-item]

    let allCurrentWrappersTarget = document.querySelectorAll(
      `#${currentWrapperId} .tab-content`
    );
    // id가 target-wrapper인 요소이면서 클래스명이 .tab-content인 요소 모두 선택
    console.log('allCurrentWrappersTarget', allCurrentWrappersTarget);
    // NodeList(4) [div#coffee.tab-content.active,
    // div#tea.tab-content, div#bakery.tab-content, div#sandwich.tab-content]

    // 선택한 타겟이 있으면서
    if (currentWrappersTarget) {
      /*만약 탭이 바뀌면 이전 탭의 active 클래스를 삭제.*/
      if (!currentWrappersTarget.classList.contains('active')) {
        // 현재 선택한 내용이 아닌데 'active'를 포함하면 'active'를 삭제
        allCurrentWrappersTarget.forEach((tabItem) => {
          tabItem.classList.remove('active');
        });
        // 현재 선택한 탭이 아닌데 'active'를 포함하면 'active'를 삭제
        allCurrentTabItem.forEach((item) => {
          item.classList.remove('active');
        });
      }
      // 현재 선택된 탭이면 active를 클래스를 추가.
      item.classList.add('active');
      currentWrappersTarget.classList.add('active');
    }
  });
});
