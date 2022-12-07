import axios from "axios";
import React, { useEffect, useState } from "react";
import { atom, useRecoilState, useRecoilValue } from "recoil";
import Lecture from "../../components/lecture";
import { userState } from "../../components/states";
import { list } from "../../assets/data/export";
import * as S from "./style";
import {
  AiOutlineSearch,
  AiOutlineArrowDown,
  AiOutlineHome,
  AiOutlineCheck,
} from "react-icons/ai";
import { BsArrowUpShort, BsArrowDownShort } from "react-icons/bs";
import { Category1, Category2, Category3, SetState } from "../../App";
export default function Main() {
  const [check, setCheck] = useRecoilState(SetState);
  const [bool, setBool] = useState(true);
  const [cate1, setCate1] = useRecoilState(Category1);
  const [cate2, setCate2] = useRecoilState(Category2);
  const [cate3, setCate3] = useRecoilState(Category3);
  const [inp, setInp] = useState("");

  const title = ["교육", "학기", "교실"];
  function sub() {
    const form = {
      educations: cate1,
      terms: cate2,
      lessons: cate3,
      name: inp,
      page: 1,
    };
    console.log(form);
    axios
      .post("http://192.168.10.128:8080/lecture/getByCate", form)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  const Drops = list.map((data1, idx1) => (
    <S.CateWrapper>
      <S.Cate>
        <span>{title[idx1]}</span>
        <div>
          {" "}
          <BsArrowDownShort className="icon" size={"70%"} />
        </div>
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
      <S.Img src="https://www.sciport.or.kr/homepage/kor/_Img/Layout/svisual_MN035.jpg" />
      <S.Text>교육</S.Text>
      <S.SearchBar>
        <S.CateLayout>
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
        </S.CateLayout>
        <S.InputLayout>HI</S.InputLayout>
      </S.SearchBar>
      <S.LectureLayout>
        <span>프로그램 리스트</span>
        <S.LectureList>
          <S.LectureItem>HI</S.LectureItem>
          <S.LectureItem>HI</S.LectureItem>
          <S.LectureItem>HI</S.LectureItem>
          <S.LectureItem>HI</S.LectureItem>
          <S.LectureItem>HI</S.LectureItem>
          <S.LectureItem>HI</S.LectureItem>
          <S.LectureItem>HI</S.LectureItem>
          <S.LectureItem>HI</S.LectureItem>
          <S.LectureItem>HI</S.LectureItem>
          <S.LectureItem>HI</S.LectureItem>

          <S.LectureItem>HI</S.LectureItem>
          <S.LectureItem>HI</S.LectureItem>
          <S.LectureItem>HI</S.LectureItem>

          <S.LectureItem>HI</S.LectureItem>
        </S.LectureList>
      </S.LectureLayout>
    </S.Layout>
  );
}
