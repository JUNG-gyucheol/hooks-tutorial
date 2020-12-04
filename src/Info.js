import React, { useState, useEffect, useReducer } from "react";
import useInputs from "./useInputs";

function Info() {
  const [state, onChange] = useInputs({
    name: "",
    nickname: "",
  });
  const { name, nickname } = state;

  //마운트와 업데이트 둘다 될 때
  //   useEffect(() => {
  //     console.log("렌더링 완료되었습니다.(마운트와 업데이트 될 때 실행)");
  //     console.log({
  //       name,
  //       nickname,
  //     });
  //   });
  //마운트만 될 때
  //   useEffect(() => {
  //     console.log("마운트 될 때만 실행됩니다.");
  //   }, []);
  // 업데이트 될 때 실행
  //   useEffect(() => {
  //     console.log("업데이트 될 때만 실행됩니다.");
  //     console.log(name);
  //   }, [name]);
  //뒷정리함수
  //   useEffect(() => {
  //     console.log("effect");
  //     console.log(name);
  //     return () => {
  //       console.log("cleanup");
  //       console.log(name);
  //     };
  //   }, [name]);

  //   const onNicknameChange = (e) => {
  //     setNickname(e.currentTarget.value);
  //   };
  console.log("render");
  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <b>이름 : {name}</b>
      </div>
      <div>
        <b>닉네임 : {nickname}</b>
      </div>
    </div>
  );
}

export default Info;
