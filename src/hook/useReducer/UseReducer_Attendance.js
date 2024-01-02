import React,{useState,useReducer} from "react";
import Student from './Student';

const reducer = (state, action) => {
    switch(action.type){
        case 'add-student':
            const name = action.payload.name;
            const newStudent = {
                id:Date.now(),
                name,
                isHere: false,
            }
            return {
                count : state.count + 1,
                students : [...state.students, newStudent],
            };
        case 'delete-student' :
            return {
                count : state.count - 1,
                //payload에 있는 id를 가진 학생을 제외한 나머지 학생
                //filter : 
                    //students 배열을 돌면서
                    //어떤 학생의 id가 payload의 id와 동일하다면 그 학생을 빼고 나머지 학생을 반환
                students : state.students.filter(student => student.id !== action.payload.id),
            }
        case 'mark-student' :
            return {
                count : state.count,
                students : state.students.map(student => {
                    if(student.id === action.payload.id){
                        return {...student, isHere: !student.isHere}
                    }
                    return student;
                }),
            }
        default :
            return state;
    }
};

const initialState = {
    count: 0,
    students : []
};

//출석부
function Attendance() {
    const [name, setName] = useState('');
    const [studentsInfo, dispatch] =useReducer(reducer, initialState);

    return (
        <div style={{marginLeft:"20px"}}>
            <h1>출석부</h1>
            <p>총 학생 수 : {studentsInfo.count}</p>
            <input 
                type="text"
                placeholder="이름을 입력해주세요"
                value={name}
                //input안에 있는 값이 달라질  때마다 name state를 업데이트
                onChange={(e)=>setName(e.target.value)}
            />
            <button onClick={()=>{
                dispatch({type: 'add-student', payload:{name}})
            }}>추가</button>
            {/*studentsInfo라는 state에 있는 students를 map을 통해서 각각의 학생을 student 컴포넌트로 만들어준다 */}
            {studentsInfo.students.map((student) => {
                return(
                <Student
                 key={student.id} 
                 name={student.name} //prop으로 name 보내기
                 dispatch={dispatch} //prop으로 dispatch 보내기
                 id={student.id} //prop으로 id 보내기
                 isHere={student.isHere} //prop으로 isHere 보내기
                 />
                )
            })}
        </div>
    )
}

export default Attendance;