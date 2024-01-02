//UseReducer_Attendance.js와 이어집니다
//학생 명단
import React from "react";

//prop으로 name을 받는 컴포넌트
const Student = ({name, dispatch, id, isHere}) => {
    return (
        <div>
            <span
            style={{
                textDecoration: isHere ? 'line-through':'none',
                color : isHere ? 'gray':'black',
            }}
            onClick={() => {
                dispatch({type:"mark-student", payload: {id}});
            }}
            >{name}</span>
            <button 
            onClick = {()=>{
                //dispatch 함수를 불러와서 delete-student action을 취하고,
                //payload로는 object형태로 학생의 id를 보내기
                dispatch({type:'delete-student', payload:{id}})
            }}>삭제</button>
        </div>
    );
}

export default Student;