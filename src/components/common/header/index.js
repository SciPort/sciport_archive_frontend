import React from "react";
import { Link } from "react-router-dom";
import * as S from "./style";
const Header = () => {
  return (
    <S.Head>
      <S.Home>
        <Link to="/">
          <span>SCI</span>Port<br></br>부산국립과학관
        </Link>
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
