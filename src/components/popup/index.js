import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { Category, closeState } from "../../App";
import * as S from "./style";
export default function Popup() {
  window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  document.body.style.overflow = "hidden";
  const [close, setClose] = useRecoilState(closeState);
  const [check, setCheck] = useState(new Set());
  const [bool, setBool] = useState(true);
  let [cate, setCate] = useRecoilState(Category);
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

  let CateDiv = list.map((temp, idx1) => {
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
            value={data}
            onClick={() => {
              check.has(idx1.toString() + idx2.toString())
                ? (cate = cate.filter((data) => data != list[idx1][idx2]))
                : cate.push(list[idx1][idx2]);

              check.has(idx1.toString() + idx2.toString())
                ? check.delete(idx1.toString() + idx2.toString())
                : check.add(idx1.toString() + idx2.toString());
              setCate(cate);
              setCheck(check);
              setBool(!bool);
            }}
          >
            {data}
          </S.CateList>
        ))}
      </S.Cate>
    );
  });
  console.log(typeof(cate[1]));
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
