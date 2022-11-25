import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRecoilState, useResetRecoilState, useSetRecoilState } from "recoil";
import { Category1, Category2, Category3, closeState, SetState } from "../../App";
import * as S from "./style";
export default function Popup() {
  window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  document.body.style.overflow = "hidden";
  const setClose = useSetRecoilState(closeState);
  const [check, setCheck] = useRecoilState(SetState);
  const [cate1, setCate1] = useRecoilState(Category1);
  const [cate2, setCate2] = useRecoilState(Category2);
  const [cate3, setCate3] = useRecoilState(Category3);

  const list = [
    ["개인교육", "단체교육", "성인교육"],
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
  const CateDiv = list.map((temp, idx1) => {
    return (
      <S.Cate>
        {temp.map((data, idx2) => (
          <S.CateList
            color={
              check.has(idx1.toString() + idx2.toString()) ? "white" : "#999"
            }
            bgcolor={
              check.has(idx1.toString() + idx2.toString())
                ? "#808080"
                : "#f8f8f8"
            }
            onClick={() => {
              check.has(idx1.toString() + idx2.toString())
                ? idx1 === 0
                  ? setCate1(cate1?.filter((data) => data != list[idx1][idx2]))
                  : idx1 === 1
                  ? setCate2(cate2?.filter((data) => data != list[idx1][idx2]))
                  : setCate3(cate3?.filter((data) => data != list[idx1][idx2]))
                : idx1 === 0
                ? setCate1(cate1?.concat(list[idx1][idx2]))
                : idx1 === 1
                ? setCate2(cate2?.concat(list[idx1][idx2]))
                : setCate3(cate3?.concat(list[idx1][idx2]));

              check.has(idx1.toString() + idx2.toString())
                ? check.delete(idx1.toString() + idx2.toString())
                : check.add(idx1.toString() + idx2.toString());
              setCheck(check);
            }}
          >
            {data}
          </S.CateList>
        ))}
      </S.Cate>
    );
  });
  return (
    <S.StyledPopup>
      <S.Wrapper>
        <S.Title>
          <h1>카테고리 검색</h1> <span onClick={() => setClose(false)}>X</span>
        </S.Title>
        <h2>강좌 카테고리를 선택해 주세요</h2>
        {CateDiv}
      </S.Wrapper>
    </S.StyledPopup>
  );
}
