<h1 align="center">초보자를 위한 리덕스 101</h1>

Nomad Coders의 강좌 [초보자를 위한 리덕스 101](https://nomadcoders.co/redux-for-beginners)을 공부하며 정리한 Repo입니다.

## 개념 정리

### Redux?

- JavaScript Application을 위한 상태 관리 라이브러리.
- React에 완전히 독립적이다!!
  - Vanilla JS, Vue.js, Angular 등 React 이외의 환경에서도 사용할 수 있다.

### Building Vanilla Redux

- 처음에는 데이터를 저장하기 위한 **store**를 생성한다.
  - store는 네 개의 메서드 `dispatch`, `subscribe`, `getState`, `replaceReducer`를 갖는다.
- 이때 데이터를 수정하기 위한 함수인 **reducer**를 정의한다.
  - **reducer가 리턴하는 값**은 **store의 새로운 데이터(state, 상태)**가 된다.
  - store의 데이터는 reducer만이 유일하게 수정할 수 있다.
  - reducer는 첫번째 인수로 이전 상태를, 두번째 인수로 action을 받는다.
- **action**은 `type` 프로퍼티를 갖는 객체로, 데이터를 어떻게 변경할지를 명시하여 reducer에 보내는 메시지다.
  - `dispatch` 메서드를 통해 action을 reducer에 전달하고, reducer는 action의 `type`에 따라 적절한 로직을 수행한다.

- `subscribe` 메서드에 콜백 함수를 전달해 데이터가 변경될 때마다 특정 작업을 수행하도록 만들 수 있다!
  - 기존의 MVC 모델에서 controller에 매번 view의 업데이트를 넣어줘야 하는 거에 비하면 매우 깔끔하다.
