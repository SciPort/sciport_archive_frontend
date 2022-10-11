import React from "react";
import * as S from "./common/header/style";
const Header = () => {
  return (
    <S.Head>
      <S.Home>
        <a href="/">
          SCIPort<br></br>부산국립과학관
        </a>
      </S.Home>
      <S.Title>
        SCIENCE HALL<br></br>ARCHIVE
      </S.Title>
      <S.Login>
        <span>로그인</span>
        <span>회원가입</span>
      </S.Login>
    </S.Head>
  );
};
export default Header;
