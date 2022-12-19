import axios from "axios";
import React, { useEffect, useState } from "react";
import * as S from "../createLec/style";
import * as D from "../main/style";
import { atom, useRecoilState, useRecoilValue } from "recoil";
import { list } from "../../assets/data/export";
import { AiOutlineCheck, AiOutlineHome } from "react-icons/ai";
import { BsArrowDownShort } from "react-icons/bs";
import { useLocation } from "react-router-dom";

const Index = () => {
  const data = useLocation();
  const [lectureInfo, setLectureInfo] = useState({});
  const [tableData, setTableData] = useState([]);
  const id = data.state.id;
  console.log(id);
  const [check, setCheck] = useState(new Set());
  const [bool, setBool] = useState(true);
  const [cate, setCate] = useState([[], [], []]);
  const [chg, setChg] = useState(false);
  const title = ["교육", "학기", "교실"];
  const Drops = list.map((data1, idx1) => (
    <D.CateWrapper>
      <D.Cate>
        <span>{title[idx1]}</span>
        <div>
          <BsArrowDownShort className="icon" size={"70%"} />
        </div>
      </D.Cate>
      <div className="dropdown">
        {data1.map((data, idx2) => {
          let code = idx1.toString() + idx2.toString();
          return (
            <D.DropItem
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
            </D.DropItem>
          );
        })}
      </div>
    </D.CateWrapper>
  ));

  const submitInfo = () => {
    console.log(cate);
    const form = new FormData();
    console.log(lectureInfo);
    form.append("name", lectureInfo.lecName);
    form.append("eduName", lectureInfo.eduName);
    form.append("content", lectureInfo.lecDescription);
    form.append("education", cate[0][0]);
    form.append("term", cate[1][0]);
    form.append("lesson", cate[2][0]);
    form.append("isDistanceClass", lectureInfo.isDistanceClass);
    form.append("year", "2022");
    form.append("poster", lectureInfo.posterImage);
    form.append("file", lectureInfo.attachedFile);
    axios
      .post("http://192.168.10.128:8080/lecture/createLecture", form)
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
  };
  const checkOnlyOne = (checkThis) => {
    const checkBox = document.getElementsByName("isDistanceClass");
    for (let i = 0; i < checkBox.length; i++) {
      if (checkBox[i] != checkThis) {
        checkBox[i].checked = false;
      }
    }
    setLectureInfo({ ...lectureInfo, isDistanceClass: checkThis.value });
  };
  useEffect(() => {
    axios
      .get(`http://192.168.10.128:8080/lecture/getOneLecture?id=${id}`)
      .then((res) => {
        setLectureInfo(res.data);
        setTableData([
          lectureInfo.education,
          lectureInfo.isDistanceClass,
          lectureInfo.lesson,
          lectureInfo.year,
          lectureInfo.term,
        ]);
        setCate([lectureInfo.education, lectureInfo.term, lectureInfo.lesson]);
        list.map((data1, idx1) => {
          data1.map((data2, idx2) => {
            if (
              data2 === res.data.education ||
              data2 === res.data.term ||
              data2 === res.data.lesson
            ) {
              check.add(idx1.toString() + idx2.toString());
              setCheck(check);
            }
          });
        });
        const checkBox = document.getElementsByName("isDistanceClass");
        for (let i = 0; i < checkBox.length; i++) {
          if (checkBox[i].value === res.data.isDistanceClass) {
            checkBox[i].checked = true;
          }
        }
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(check);
  return (
    <S.Wrapper>
      <p>교육 프로그램에 대한 설명을 적어주세요.</p>
      <div>
        {/* <S.ContentBox> */}
        <S.Input
          placeholder="프로그램 이름"
          height={"70px"}
          fontSize={"30px"}
          value={lectureInfo.name}
          onChange={(e) => {
            setLectureInfo({ ...lectureInfo, name: e.target.value });
          }}
        />
        {/* <S.Input as={"div"}> */}
        <D.SearchBar>
          <D.CateLayout>
            <D.Home
              onClick={() => {
                check.clear();
                setCheck(check);
                setBool(!bool);
              }}
            >
              <AiOutlineHome className="icon" />
            </D.Home>
            {Drops}
          </D.CateLayout>
        </D.SearchBar>
        <S.Input
          placeholder="교육명 입력"
          height={"50px"}
          fontSize={"25px"}
          value={lectureInfo.eduName}
          onChange={(e) =>
            setLectureInfo({ ...lectureInfo, eduName: e.target.value })
          }
        />
        <S.Input
          placeholder="프로그램 설명"
          as={"textarea"}
          height={"300px"}
          fontSize={"22px"}
          value={lectureInfo?.content}
          onChange={(e) =>
            setLectureInfo({ ...lectureInfo, content: e.target.value })
          }
        />
        <S.CheckBoxes>
          <input
            type={"checkbox"}
            name={"isDistanceClass"}
            value="원격"
            onChange={(e) => {
              checkOnlyOne(e.target);
            }}
          />
          <label>원격</label>
          <input
            type={"checkbox"}
            name={"isDistanceClass"}
            value="대면"
            onChange={(e) => {
              checkOnlyOne(e.target);
            }}
          />
          <label>대면</label>
        </S.CheckBoxes>
        <S.FileBox>
          <S.InBox>
            <S.Label htmlFor="Poster">포스터 이미지파일</S.Label>
            <input
              type="file"
              accept={[".png", ".jpeg", ".jpg", ".svg"]}
              value={lectureInfo.files}
              onChange={(file) =>
                setLectureInfo({
                  ...lectureInfo,
                  posterImage: file.target.files[0],
                })
              }
            />
          </S.InBox>
          <S.InBox>
            <S.Label htmlFor="Attach">강의 첨부파일</S.Label>
            <input
              type="file"
              multiple
              value={lectureInfo.files}
              onChange={(files) =>
                setLectureInfo({
                  ...lectureInfo,
                  attachedFile: files.target.files[0],
                })
              }
            />
          </S.InBox>
        </S.FileBox>
        {/* </S.ContentBox> */}
        <S.Submit
          onClick={() => {
            setLectureInfo({
              ...lectureInfo,
              cate1: cate[0],
              cate2: cate[1],
              cate3: cate[2],
            });
            // submitInfo();
            console.log(lectureInfo);
          }}
        >
          수정 완료
        </S.Submit>
      </div>
    </S.Wrapper>
  );
};

export default Index;
