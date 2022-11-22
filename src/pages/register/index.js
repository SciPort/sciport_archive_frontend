import axios from "axios";
import React, { useState } from "react";
import * as S from "./style";

const Index = () => {
  const [registerData, setRegisterData] = useState({
    name: "",
    nickname: "",
    password: "",
    passwordCheck: "",
  });
  const RegisterFunc = (e) => {
    e.preventDefault();
    console.log(registerData);
    axios
      .post("http://192.168.10.128:8080/user/signup", registerData)
      .then((res) => {
        alert(res.data);
        window.location.replace("/login");
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <S.Wrapper>
      <S.Register>
        <span>Register</span>
        <p>
          회원가입을 완료하려면 모든 입력창에
          <br />
          정보를 입력한 뒤 등록버튼을 눌러주세요.
        </p>
        <S.RegisterForm onSubmit={RegisterFunc}>
          <input
            onChange={(e) => {
              setRegisterData({ ...registerData, name: e.target.value });
              console.log(registerData.name);
            }}
            placeholder="이름"
            type="text"
          />
          <input
            onChange={(e) => {
              setRegisterData({ ...registerData, nickname: e.target.value });
              console.log(registerData.nickname);
            }}
            placeholder="아이디"
            type="text"
          />
          <input
            onChange={(e) => {
              setRegisterData({ ...registerData, password: e.target.value });
              console.log(registerData.password);
            }}
            placeholder="비밀번호"
            type="password"
          />
          <input
            onChange={(e) => {
              setRegisterData({
                ...registerData,
                passwordCheck: e.target.value,
              });
              console.log(registerData.password);
            }}
            placeholder="비밀번호 확인"
            type="password"
          />
          <input value="회원가입" type="submit" onClick={RegisterFunc} />
        </S.RegisterForm>
        <S.SubmitForm>
          {/* <button style={{backgroundColor: "#2D97F8"}}>회원가입</button>
          <button style={{backgroundColor: "#2D72F8"}}>아이디/비밀번호 찾기</button> */}
        </S.SubmitForm>
      </S.Register>
    </S.Wrapper>
  );
};

export default Index;
