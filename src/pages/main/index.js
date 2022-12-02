import axios from "axios";
import React, { useEffect, useState } from "react";
import { atom, useRecoilState, useRecoilValue } from "recoil";
import Lecture from "../../components/lecture";
import { userState } from "../../components/states";
import * as S from "./style";
import {
  AiOutlineSearch,
  AiOutlineArrowDown,
  AiOutlineHome,
  AiOutlineCheck,
} from "react-icons/ai";
import { BsArrowUpShort, BsArrowDownShort } from "react-icons/bs";
import {
  Category1,
  Category2,
  Category3,
  SetState,
} from "../../App";
export default function Main() {
  const [check, setCheck] = useRecoilState(SetState);
  const [bool, setBool] = useState(true);
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
  const title = ["교육", "학기", "교실"];
  const Drops = list.map((data1, idx1) => (
    <S.CateWrapper>
      <S.Cate>
        <span>{title[idx1]}</span>
        <BsArrowDownShort className="icon" />
      </S.Cate>
      <div className="dropdown">
        {data1.map((data, idx2) => (
          <S.DropItem
            color={
              check.has(idx1.toString() + idx2.toString()) ? "white" : "#000000"
            }
            bgcolor={
              check.has(idx1.toString() + idx2.toString())
                ? "#0c2136"
                : "#ffffff"
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
            <span>{data}</span>
            {check.has(idx1.toString() + idx2.toString()) ? (
              <AiOutlineCheck className="icon" />
            ) : null}
          </S.DropItem>
        ))}
      </div>
    </S.CateWrapper>
  ));
  console.log(check);
  return (
    <S.Layout>
      <S.ImgWrapper>
        <S.Img src="https://www.sciport.or.kr/homepage/kor/_Img/Layout/svisual_MN035.jpg" />
        <S.Text>교육</S.Text>
      </S.ImgWrapper>
      <S.SearchWrapper>
        <S.SearchBar>
          <S.Home
            onClick={() => {
              check.clear();
              setCheck(check);
              setBool(!bool);
            }}
          >
            <AiOutlineHome className="icon" />
          </S.Home>
          {Drops}
          <S.Input />
          <S.Search>
            <AiOutlineSearch className="icon" />
          </S.Search>
        </S.SearchBar>
      </S.SearchWrapper>
    </S.Layout>
  );
}
