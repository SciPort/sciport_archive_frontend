import React, { useState } from "react";
import Lecture from "../../components/lecture";
import * as S from "./style";
import { AiOutlineSearch, AiOutlineArrowDown } from "react-icons/ai";
import Popup from "../../components/popup";
export default function Main() {
  const [close, setClose] = useState(false);
  return (
    <S.Wrapper>
      <S.SearchCon>
        <S.Cate
          onMouseEnter={() => setClose(true)}
          onMouseLeave={() => setClose(false)}
        >
          접수상태
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
