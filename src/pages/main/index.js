import React from "react";
import Lecture from "../../components/lecture";
import * as S from "./style";
export default function Main() {
  return (
    <S.Wrapper>
      <S.SearchCon>
        <input type="search"></input>
      </S.SearchCon>
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
        </S.LectureList>
      </S.LectureCon>
    </S.Wrapper>
  );
}
