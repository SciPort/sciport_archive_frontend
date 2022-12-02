import React from "react";
import { Link } from "react-router-dom";
import * as S from "./style";
import { AiOutlineUserAdd, AiFillLock } from "react-icons/ai";
import { useRecoilState } from "recoil";
import { useMemo } from "react";
import { useState } from "react";
import { useEffect } from "react";

const Header = () => {
  const [position, setPosition] = useState(0);
  function onScroll() {
    setPosition(window.scrollY);
  }
  useEffect(() => {
    const timer = setInterval(() => {
      window.addEventListener("scroll", onScroll);
    }, 100);
    return () => {
      clearInterval(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <S.Head
      opacity={position > 0 ? "1" : "0.2"}
      bgcolor={position > 0 ? "255" : "0"}
    >
      <S.Home color={position > 0 ? "#767676" : "white"}>
        <Link to="/">
          <span>SCI</span>Port<br></br>부산국립과학관
        </Link>
      </S.Home>
      <S.Title color={position > 0 ? "#767676" : "white"}>
        <span>SCIENCE HALL</span>
        <br></br>ARCHIVE
      </S.Title>
      <S.Login color={position > 0 ? "#767676" : "white"}>
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
