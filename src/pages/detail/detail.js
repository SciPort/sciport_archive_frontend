import React from "react";
import * as S from "./style";

export default function Detail() {
  return (
    <S.Wrapper>
      <S.Content>
        <S.MainContent>
          <h1>교육프로그램 소개</h1>
          <S.Info>
            <p>강사 {123}</p>
            <span>설명입니다</span>
          </S.Info>
        </S.MainContent>
        <S.SubContent>HEllo</S.SubContent>
      </S.Content>
    </S.Wrapper>
  );
}
