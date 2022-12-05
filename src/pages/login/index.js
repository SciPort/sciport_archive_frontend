import axios from "axios";
import React, { useState } from "react";
import * as S from "./style";

const Index = () => {
  const [loginData, setLoginData] = useState({
    name: "",
    password: "",
  });
  const LoginFunc = (e) => {
    e.preventDefault();
    if (!loginData.name) {
      return alert("아이디를 입력해주세요.");
    } else if (!loginData.password) {
      return alert("비밀번호를 입력해주세요.");
    } else {
      axios
        .post("http://192.168.10.128:8080/user/login", loginData)
        .then((res) => {
          console.log(res.data);
          localStorage.setItem("accessToken", res.data.accessToken);
          localStorage.setItem("refreshToken", res.data.refreshToken);
          window.location.replace("/");
        })
        .catch((err) => {
          alert(err);
        });
    }
  };
  return (
    <S.Wrapper>
      <S.Login>
        <span>Login</span>
        <p>
          회원 서비스를 이용하려면 로그인이 필요합니다.
          <br />
          아이디와 비밀번호를 입력 후 로그인 하십시오.
        </p>
        <S.LoginForm onSubmit={LoginFunc}>
          <div>
            <input
              onChange={(e) => {
                setLoginData({ ...loginData, name: e.target.value });
                console.log(loginData.id);
              }}
              placeholder="아이디 입력"
              type="text"
            />
            <input
              onChange={(e) => {
                setLoginData({ ...loginData, password: e.target.value });
                console.log(loginData.password);
              }}
              placeholder="비밀번호 입력"
              type="password"
            />
          </div>
          <input value="로그인" type="submit" />
        </S.LoginForm>
        <S.SubmitForm>
          <button style={{ backgroundColor: "#2D97F8" }}>회원가입</button>
          <button style={{ backgroundColor: "#2D72F8" }}>
            아이디/비밀번호 찾기
          </button>
        </S.SubmitForm>
      </S.Login>
    </S.Wrapper>
  );
};

export default Index;
