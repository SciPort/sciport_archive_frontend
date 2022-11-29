import React from "react";
import { Link } from "react-router-dom";
import * as S from "./style";
import { AiOutlineUserAdd, AiFillLock } from "react-icons/ai";
import { useRecoilState } from "recoil";

const Header = () => {
  return (
    <S.Head>
      <S.Home>
        <Link to="/">
          <span>SCI</span>Port<br></br>부산국립과학관
        </Link>
      </S.Home>
      <S.Title>
        <span>SCIENCE HALL</span>
        <br></br>ARCHIVE
      </S.Title>
      <S.Login>
        {localStorage.getItem("accessToken") ? (
          <span
            onClick={() => {
              localStorage.removeItem("accessToken");
              window.location.href = "/";
            }}
          >
            로그아웃
          </span>
        ) : (
          <>
            <Link to={"/register"}>
              <AiOutlineUserAdd size="34"></AiOutlineUserAdd>
              <span>Sign up</span>
            </Link>
            <Link to={"/login"}>
              <AiFillLock size="34"></AiFillLock>
              <span>login</span>
            </Link>
          </>
        )}
      </S.Login>
    </S.Head>
  );
};
export default Header;
