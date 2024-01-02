import React, { useReducer } from 'react';

//useReducer를 구성하는 요소 세 가지
//reducer : state를 업데이트
//dispatch : state 업데이트를 위한 요구
//action : 요구하는 내용

//Switch를 활용해서 현재 상태와 액션을 받아서 새로운 상태를 전달할 예정
const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };

    case 'DECREMENT':
      return { count: state.count - 1 };
    
    case 'RESET':
        return { count: 0 };

    default:
      return state;
  }
};

const Counter = () => {
    //useReducer > 상태와 디스패치 함수를 생성
    //counterReducer :  현재 상태와 액션값을 받아서 다음 상태를 결정하는데 사용
    //위 counterReducer 함수에서는 switch문을 활용해서 값 조정을 함
                                    //첫 번재 매개변수 : counterReducer (변경된 값)
                                    //두 번째 매개변수 : {count : 0} > 초기값을 0으로 설정
    const [state, dispatch] = useReducer(counterReducer, {count:0});
    //dispatch : 액션을 발생시키는데 사용되는 함수(이름은 아무래도 상관없는듯)
    //위에서 switch문 안에있는 case가 선택 되면 선택된 상태를 return해서 업데이트 확인

    return(
    <div style={{margin:20}}>
        <h2>count : {state.count}</h2>
        {/*type에 따라서 state를 다르게 업데이트 해주겠어요~ > switch문 활용 */}
        <button onClick={() => dispatch({type:'INCREMENT'})}>증가</button>
        <button onClick={() => dispatch({type:'RESET'})}>초기화</button>
        <button onClick={() => dispatch({type:'DECREMENT'})}>감소</button>
    </div>
    )
};
export default Counter;