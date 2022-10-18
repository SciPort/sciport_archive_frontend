import React from "react";
import * as S from "./style";

const index = () => {
  return (
    <S.Wrapper>
      <S.Login>
        <span>로그인</span>
        <p>회원 서비스를 이용하려면 로그인이 필요합니다.<br/>아이디와 비밀번호를 입력 후 로그인 하십시오.</p>
        <S.LoginForm>
          <div>
            <input placeholder="아이디 입력" type='text' />
            <input placeholder="비밀번호 입력" type='password' />
          </div>
          <input placeholder="로그인" type='submit' />
        </S.LoginForm>
      </S.Login>
    </S.Wrapper>
  );
};

export default index;
