# 코드스테이츠 - 나의 CRUD 애플리케이션 만들기

## To-Do 앱에 맞는 CRUD 기능을 기획하세요.

만약 간단한 메모장을 만든다면 꼭 필요한 CRUD 기능은 다음과 같을 것입니다.

- Create : 메모 작성하기
- Read : 메모 불러오기
- Update : 메모 수정하기
- Delete : 메모 삭제하기

추가적인 기능을 기획해보고 싶다면, 두 세트의 CRUD 기능까지만 기획해 주세요. 이 이상 기획할 경우 프로젝트를 완성하기 버거울 수 있습니다.

### 🌟 GOAL

- Figma를 사용해 전반적인 와이어 프레임 작성 및 앱의 프로토타입을 만들어봅니다.
- CRA를 활용하여 애플리케이션 환경을 구축합니다.
- Styled-compponents를 이용해 애플리케이션에 사용할 컴포넌트를 직접 만들어봅니다.
- Storybook으로 컴포넌트를 문서화합니다.
- Storybook으로 컴포넌트 문서화까지 완성하였다면 배포까지 해봅니다.
- 테스트 주도 개발을 해봅니다.(TDD)
  - Jest를 사용해 단위 테스트를 해봅니다.
  - Cypress를 사용해 E2E 테스트를 해봅니다.

### :rocket: 기능 구현 목록

- [x] CREATE : 메모 작성하기

  - [x] 사용자가 input 창에 작성한 할 일을 추가한다.

- [x] READ : 메모 불러오기

  - [x] 작성된 Todo 목록을 보여줘야 한다.
  - [x] 새로 고침하거나 브라우저를 닫았다 다시 접속해도 작성된 메모는 유지되어야 한다.
  - [x] 해당 기능은 LocalStorage로 구현한다.

- [x] DELETE : 메모 삭제하기

  - [x] 작성된 메모는 삭제가 가능해야 한다.

- [] UPDATE : 메모 수정하기

  - [x] 추가된 할 일을 완료하였다면 체크하여 해당 목록이 "완료"되었다는 표시를 한다.
  - [] 작성된 메모는 수정이 가능해야 한다.
  - [] `clickToEditable` 형태로 기능을 구현한다.

- [] 부가적인 기능 구현
  - [] 할 일 작성, 삭제, 완료 등 관련된 CSS 애니메이션
  - [] TDD 해보기 (jest, cypress, storybook)
  - [] 다크모드 구현하기
  - [] 페이징 네이션 구현하기
  - [] 날씨 API 이용해서 오늘 날씨, 시간, 요일을 시각적으로 보여주기.
