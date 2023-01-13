// import { useState, useEffect } from "react";
// import { useReducer } from "react";
import useInputs from "./useInputs";

// function reducer(state, action){
//     return {
//         ...state,
//         [action.name]: action.value
//     };
// }

const Info = () => {
    const [state, onChange] = useInputs({
        name: '',
        nickname: ''
    });
    const {name, nickname} = state;

    // const onChange = e => {
    //     dispatch(e.target);
    // };

    // ----useEffect 기본 형태
    // useEffect(() => {
    //     console.log('렌더링 완료');
    //     console.log({name, nickname});
    // });

    // ---- 8.2.1 마운트될 때만 실행하고 싶을 때
    // useEffect(() => {
    //     console.log('마운트 될 때만 실행');
    // }, []);

    // ---- 8.2.2 특정 값이 업데이트될 때만 실행하고 싶을 때
    // useEffect(() => {
    //     console.log(name);
    // }, [name]);

    // ---- 8.2.3 뒷정리
    // useEffect(() => {
    //     console.log('effect');
    //     // console.log(name);
    //     return () => {
    //         console.log('unmount');
    //     };
    // }, []);

    // const onChangeName = e => {
    //     setName(e.target.value);
    // };

    // const onChangeNickname = e => {
    //     setNickname(e.target.value);
    // };

    return (
        <div>
            <div>
                <input name="name" value={name} onChange={onChange} />
                <input name="nickname" value={nickname} onChange={onChange} />
            </div>
            <div>
                <div><b>이름: </b> {name} </div>
                <div><b>닉네임: </b> {nickname} </div>
            </div>
        </div>
    )
}

export default Info;