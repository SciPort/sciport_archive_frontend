import axios from "axios";
import React, { useEffect, useState } from "react";
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
export default function Main() {
  const [check, setCheck] = useState(new Set());
  const [bool, setBool] = useState(true);
  const [cate, setCate] = useState([[], [], []]);
  const [inp, setInp] = useState("");
  const [chg, setChg] = useState(false);
  const [lecs, setLecs] = useState([]);
  const title = ["교육", "학기", "교실"];
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
  function sub() {
    const form = {
      educations: cate[0],
      terms: cate[1],
      lessons: cate[2],
      name: inp,
      page: 1,
    };
    console.log(form);
    axios
      .post("http://192.168.10.128:8080/lecture/getByCate", form)
      .then((res) => {
        console.log(res.data);
        setLecs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    const form = {
      educations: [],
      terms: [],
      lessons: [],
      name: "",
      page: 1,
    };
    axios
      .post("http://192.168.10.128:8080/lecture/getByCate", form)
      .then((res) => {
        setLecs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const Lectures = lecs.map((lecture, idx) => (
    <S.LectureItem>
      <img src={`http://192.168.10.128:8080${lecture["posterUrl"]}`} />
      <div className="desc">
        <span>
          <span className="title">학기</span> {lecture["term"]}
        </span>
        <span>
          <span className="title">교육기관</span>  {lecture["eduName"]}
        </span>
        <span>
          <span className="title">교육명</span>  {lecture["education"]}
        </span>
        <span>
          <span className="title">교실명</span>  {lecture["lesson"]}
        </span>
        <span>
          <span className="title">강좌명</span> {lecture["name"]}
        </span>
      </div>
      HI
    </S.LectureItem>
  ));
  const Drops = list.map((data1, idx1) => (
    <S.CateWrapper>
      <S.Cate>
        <span>{title[idx1]}</span>
        <div>
          <BsArrowDownShort className="icon" size={"70%"} />
        </div>
      </S.Cate>
      <div className="dropdown">
        {data1.map((data, idx2) => {
          let code = idx1.toString() + idx2.toString();
          return (
            <S.DropItem
              color={check.has(code) ? "white" : "#000000"}
              bgcolor={check.has(code) ? "#0c2136" : "#ffffff"}
              onClick={() => {
                check.has(code)
                  ? (cate[idx1] = cate[idx1]?.filter(
                      (data) => data != list[idx1][idx2]
                    ))
                  : (cate[idx1] = cate[idx1]?.concat(list[idx1][idx2]));
                setCate(cate);
                check.has(code) ? check.delete(code) : check.add(code);
                setCheck(check);
                setChg(!chg);
              }}
            >
              <span>{data}</span>
              {check.has(code) ? <AiOutlineCheck className="icon" /> : null}
            </S.DropItem>
          );
        })}
      </div>
    </S.CateWrapper>
  ));
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
        <S.InpWrapper>
          <S.Input placeholder="검색어를 입력해 주세요" />
          <S.Search onClick={sub}>
            <AiOutlineSearch className="icon" />
          </S.Search>
        </S.InpWrapper>
      </S.SearchBar>
      <S.LectureLayout>
        <span>프로그램 리스트</span>
        <S.LectureList>{Lectures}</S.LectureList>
      </S.LectureLayout>
    </S.Layout>
  );
}
