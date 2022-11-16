import React from "react";
import { useRecoilState } from "recoil";
import { closeState } from "../../App";
import * as S from "./style";
export default function Popup() {
  document.body.style.overflow = "hidden";
  const [close, setClose] = useRecoilState(closeState);
  const list = [
    ["전체", "개인교육", "단체교육", "성인교육"],
    [
      "겨울학기",
      "봄학기(1)",
      "봄학기(2)",
      "여름학기",
      "가을학기(1)",
      "가을학기(2)",
    ],
    [
      "유아과학교실",
      "창의탐구교실",
      "실험탐구교실",
      "SW코딩교실",
      "창작메이커교실",
      "프로젝트교실",
      "후원회교육",
    ],
  ];

  const CateDiv = list.map((temp) => (
    <S.Cate>
      {temp.map((data) => (
        <div value={data}>{data}</div>
      ))}
    </S.Cate>
  ));

  return (
    <S.StyledPopup >
      <S.Wrapper>
        <S.Title>
          <h1>카테고리 검색</h1> X
        </S.Title>
        <h2>강좌 카테고리를 선택해 주세요</h2>
        {CateDiv}
      </S.Wrapper>
    </S.StyledPopup>
  );
}
