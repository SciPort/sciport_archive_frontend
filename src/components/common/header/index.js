import React from "react";
import { Link } from "react-router-dom";
import * as S from "./style";
import { AiOutlineUserAdd, AiFillLock } from "react-icons/ai";

const Header = () => {
  return (
    <S.Head>
      <S.Home>
        <Link to="/">
          <span>SCI</span>Port<br></br>부산국립과학관
        </Link>
      </S.Home>
      <S.Title>
        <span>SCIENCE HALL</span><br></br>ARCHIVE
      </S.Title>
      <S.Login>
        <AiFillLock size="34"></AiFillLock>
        <span>login</span>
        <AiOutlineUserAdd size="34"></AiOutlineUserAdd>
        <span>Sign up</span>
      </S.Login>
    </S.Head>
  );
};
export default Header;
