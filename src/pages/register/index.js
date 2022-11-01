import React, { useState } from "react";
import * as S from "./style";

const Index = () => {
  const [registerData, setRegisterData] = useState({
    name: "",
    id: "",
    password: "",
    passwordCheck: "",
  });
  return (
    <S.Wrapper>
      <S.Register>
        <span>Register</span>
        <p>
          회원가입을 완료하려면 모든 입력창에
          <br />
          정보를 입력한 뒤 등록버튼을 눌러주세요.
        </p>
        <S.RegisterForm
        // onSubmit={LoginFunc}
        >
          <input
            // onChange={(e) => {
            //   setLoginData({...loginData, id: e.target.value})
            //   console.log(loginData.id)
            // }}
            placeholder="이름"
            type="text"
          />
          <input
            // onChange={(e) => {
            //   setLoginData({...loginData, id: e.target.value})
            //   console.log(loginData.id)
            // }}
            placeholder="아이디"
            type="text"
          />
          <input
            // onChange={(e) => {
            //   setLoginData({...loginData, password: e.target.value})
            //   console.log(loginData.password)
            // }}
            placeholder="비밀번호"
            type="password"
          />
          <input
            // onChange={(e) => {
            //   setLoginData({...loginData, password: e.target.value})
            //   console.log(loginData.password)
            // }}
            placeholder="비밀번호 확인"
            type="password"
          />
          <input value="회원가입" type="submit" />
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
