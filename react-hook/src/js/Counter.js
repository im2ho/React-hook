//import는 항상 최상단
//useState : 상태를 관리하기 위해 사용하는 함수
import React, {useState} from 'react';
import '../css/App.css';

let msg="리액트 공부를 하세요";

//JS에서는 글자값인지 숫자값인지 중요하지 X
//재사용이 가능한지, 재할당이 가능한지 여부가 중요하다

//var : 재선언, 재할당 가능
//let : 재선언 불가, 재할당 가능
//const : 재선언, 재할당 불가 > 한 번 선언하면 값을 변경 혹은 수정 불가

function ExComponent(){
    return(
        <div>
            <h1>{msg}</h1>
            <p>컴포넌트 예시입니다.</p>
        </div>
    )
}

//값을 변화시키는 함수
function Counter(){
    //js코드 작성 영역
    //useState를 활용해서 값을 증가시키는 함수를 완성
    const [count, setCount] = useState(0); //배열[초기값, 변경될 값] = 초기값 설정
    const increament = () => {
        setCount(count +1);
    }
    return( //html 태그 코드는 return 안에 작성해준다
        <div>
            <h1>숫자 : {count}</h1>
            <button onClick={increament}>Click</button>
        </div>
        //리액트js에서는 onClick (카멜케이스 활용)
    )
}

function App(){
    return (
        <div>
            <h1>===Counter.js===</h1>
            <ExComponent />
            <Counter />
        </div>
    )
}

export default App;

//export default : 다른 파일에서 사용할 수 있도록 내보내는 부분
//기본적으로 내보낼 항목을 지정하는 역할을 함
//다른 JS에서 App.js에 있는 function App을 사용할 수 있도록
//내보내기도 하지만 App.js에서 기본으로 사용할 항목을 지정하기도 함