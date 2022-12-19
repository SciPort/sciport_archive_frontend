import axios from "axios";
import React, { useEffect, useState } from "react";
import * as S from "./style";
import {
  AiOutlineSearch,
  AiOutlineCheck,
  AiFillCaretLeft,
  AiFillFileAdd,
  AiFillCaretRight,
} from "react-icons/ai";
import { BiRefresh } from "react-icons/bi";
import { BsArrowDownShort } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { userState } from "../../components/states";
import { useRecoilState } from "recoil";
export default function Main() {
  const navi = useNavigate();
  const [name, setName] = useState("");
  const [check, setCheck] = useState(new Set());
  const [cate, setCate] = useState([[], [], []]);
  const [chg, setChg] = useState(false);
  const [lecs, setLecs] = useState([]);
  const [maxPage, setMaxPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageIdx, setPageIdx] = useState(0);
  const [user, setUser] = useRecoilState(userState);
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
      "소프트웨어 코딩교실",
      "창작메이커교실",
      "프로젝트교실",
      "주제탐구교실",
    ],
  ];
  function sub() {
    const form = {
      educations: cate[0],
      terms: cate[1],
      lessons: cate[2],
      name: name,
      page: currentPage,
    };
    axios
      .post("http://192.168.10.128:8080/lecture/getByCate", form)
      .then((res) => {
        setMaxPage(res.data[0]?.maxPage);
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
        setMaxPage(res.data[0].maxPage);
        setLecs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const PageIndexDown = () => {
    if (pageIdx !== 0) {
      setCurrentPage((pageIdx - 1) * 10 + 1);
      setPageIdx(pageIdx - 1);
    }
    // window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const PageIndexUp = () => {
    if (parseInt(maxPage / 10) !== pageIdx) {
      setCurrentPage((pageIdx + 1) * 10 + 1);
      setPageIdx(pageIdx + 1);
    }
    // window.scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    sub();
  }, [currentPage]);
  console.log(user);
  const Lectures = lecs.map((lecture, idx) => (
    <S.LectureWrapper>
      <S.LectureItem>
        <img
          src={`http://192.168.10.128:8080${lecture["posterUrl"]}`}
          onError={(e) => {
            e.target.src = "https://www.sciport.or.kr/_Img/Event/evt_pic2.jpg";
          }}
        />
        <div
          className="desc"
          onClick={() => navi("/detail", { state: { id: lecture["id"] } })}
        >
          <span>
            <span className="title">학기</span> {lecture["term"]}
          </span>
          <span>
            <span className="title">교육기관</span> {lecture["eduName"]}
          </span>
          <span>
            <span className="title">교육명</span> {lecture["education"]}
          </span>
          <span>
            <span className="title">교실명</span> {lecture["lesson"]}
          </span>
          <span>
            <span className="title">강좌명</span> {lecture["name"]}
          </span>
        </div>
      </S.LectureItem>
      <div className="mainTitle">{lecture["name"]}</div>
    </S.LectureWrapper>
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
                      (data) => data !== list[idx1][idx2]
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
  const Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
    <div
      onClick={() => {
        setCurrentPage(pageIdx * 10 + num);
      }}
      className={currentPage === pageIdx * 10 + num ? "underline" : null}
    >
      {maxPage >= pageIdx * 10 + num ? pageIdx * 10 + num : ""}
    </div>
  ));
  const createLec = () => {
    if (user.isLogged) {
      window.location.href = "/createLec";
    } else {
      alert("로그인 후 이용해주세요!");
      window.location.href = "/login";
    }
  };
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
              setCate([[], [], []]);
            }}
          >
            <BiRefresh className="icon" color="white" />
          </S.Home>
          {Drops}
        </S.CateLayout>
        <S.InpWrapper>
          <S.Input
            placeholder="검색어를 입력해 주세요"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
          <S.Search
            onClick={() => {
              sub();
              setCurrentPage(1);
              setPageIdx(0);
            }}
          >
            <AiOutlineSearch className="icon" />
          </S.Search>
        </S.InpWrapper>
      </S.SearchBar>
      <S.LectureLayout>
        <S.Info>
          <span>프로그램 리스트</span>
          <div onClick={createLec}>
            <span>
              강좌 개설하기
              <AiFillFileAdd />
            </span>
          </div>
        </S.Info>
        {lecs.length === 0 ? (
          <span>검색 결과가 없습니다!</span>
        ) : (
          <>
            <S.LectureList>{Lectures}</S.LectureList>
            <S.Bottom>
              <S.NumList>
                <div onClick={() => PageIndexDown()}>
                  <AiFillCaretLeft className="icon" />
                </div>
                {Numbers}
                <div onClick={() => PageIndexUp()}>
                  <AiFillCaretRight className="icon" />
                </div>
              </S.NumList>
            </S.Bottom>
          </>
        )}
      </S.LectureLayout>
    </S.Layout>
  );
}
