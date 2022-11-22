import axios from "axios";
import React, { useEffect, useState } from "react";
import { atom, useRecoilState } from "recoil";
import Lecture from "../../components/lecture";
import { userState } from "../../components/states";
import * as S from "./style";
import { AiOutlineSearch, AiOutlineArrowDown } from "react-icons/ai";
import Popup from "../../components/popup";
import { closeState } from "../../App";
export default function Main() {
  document.body.style.overflow = "unset";
  const [user, setUser] = useRecoilState(userState);
  const [close, setClose] = useRecoilState(closeState);
  useEffect(() => {
    const form = { accessToken: localStorage.getItem("accessToken") };
    axios
      .post("http://192.168.10.128:8080/user/auth", form)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        const rf = { refreshToken: localStorage.getItem("refreshToken") };
        axios
          .post("http://192.168.10.128:8080/user/reissue", rf)
          .then((res) => {
            localStorage.setItem("accessToken", res.data.accessToken);
            localStorage.setItem("refreshToken", res.data.refreshToken);
            axios
              .post("http://192.168.10.128:8080/user/auth", form)
              .then((res) => {
                setUser(res.data);
              })
              .catch((err) => {});
          })
          .catch((err) => {});
      });
  }, []);
  console.log(user);
  return (
    <S.Wrapper>
      <S.SearchCon>
        <S.Cate onClick={() => setClose(true)}>
          카테고리
          <AiOutlineArrowDown />
        </S.Cate>
        <input type="search" placeholder="검색어를 입력하세요"></input>
        <AiOutlineSearch className="searchIcon"></AiOutlineSearch>
      </S.SearchCon>
      {close === true ? <Popup /> : null}
      <p>EDUCATION PROGRAM LIST</p>
      <S.LectureCon>
        <S.LectureList>
          <Lecture></Lecture>
          <Lecture></Lecture>
          <Lecture></Lecture>
          <Lecture></Lecture>
          <Lecture></Lecture>
          <Lecture></Lecture>
          <Lecture></Lecture>
          <Lecture></Lecture>
          <Lecture></Lecture>
        </S.LectureList>
      </S.LectureCon>
    </S.Wrapper>
  );
}
