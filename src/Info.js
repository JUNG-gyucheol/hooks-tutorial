import React, { useState, useEffect } from "react";

function Info() {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  //마운트와 업데이트 둘다 될 때
  useEffect(() => {
    console.log("렌더링 완료되었습니다.(마운트와 업데이트 될 때 실행)");
    console.log({
      name,
      nickname,
    });
  });
  //마운트만 될 때
  useEffect(() => {
    console.log("마운트 될 때만 실행됩니다.");
  }, []);

  const onNameChange = (e) => {
    setName(e.currentTarget.value);
  };
  const onNicknameChange = (e) => {
    setNickname(e.currentTarget.value);
  };
  console.log("render");
  return (
    <div>
      <div>
        <input value={name} onChange={onNameChange} />
        <input value={nickname} onChange={onNicknameChange} />
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
