import React from "react";
import * as S from "./style";
export default function Popup() {
  return (
    <S.Wrapper>
      <S.Title>
        <h1>카테고리 검색</h1>
      </S.Title>
      강좌 카테고리를 선택해 주세요
      <S.Cate>
        <div>전체</div>
        <div>전체</div>
        <div>전체</div>
        <div>전체</div>
      </S.Cate>
    </S.Wrapper>
  );
}
