// import axios from "axios";
// import React, { useState } from "react";
// import * as S from "./style";
// import * as D from "../main/style";
// import { atom, useRecoilState, useRecoilValue } from "recoil";
// import { list } from "../../assets/data/export";
// import { Category1, Category2, Category3, SetState } from "../../App";
// import { AiOutlineCheck, AiOutlineHome } from "react-icons/ai";
// import { BsArrowDownShort } from "react-icons/bs";

const Index = () => {
  const [lectureInfo, setLectureInfo] = useState({
    cate1: [],
    cate2: [],
    cate3: [],
    lecName: "",
    lecDescription: "",
    posterImage: [],
    attachedFile: [],
  });
  const [check, setCheck] = useRecoilState(SetState);
  const [bool, setBool] = useState(true);
  const [cate1, setCate1] = useRecoilState(Category1);
  const [cate2, setCate2] = useRecoilState(Category2);
  const [cate3, setCate3] = useRecoilState(Category3);
  const title = ["교육", "학기", "교실"];
  const Drops = list.map((data1, idx1) => (
    <D.CateWrapper>
      <D.Cate>
        <span>{title[idx1]}</span>
        <div>
          {" "}
          <BsArrowDownShort className="icon" size={"70%"} />
        </div>
      </D.Cate>
      <div className="dropdown">
        {data1.map((data, idx2) => (
          <D.DropItem
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
                  ? setCate1(cate1?.filter((data) => data !== list[idx1][idx2]))
                  : idx1 === 1
                  ? setCate2(cate2?.filter((data) => data !== list[idx1][idx2]))
                  : setCate3(cate3?.filter((data) => data !== list[idx1][idx2]))
                : idx1 === 0
                ? setCate1(cate1?.concat(list[idx1][idx2]))
                : idx1 === 1
                ? setCate2(cate2?.concat(list[idx1][idx2]))
                : setCate3(cate3?.concat(list[idx1][idx2]));


//               check.has(idx1.toString() + idx2.toString())
//                 ? check.delete(idx1.toString() + idx2.toString())
//                 : check.add(idx1.toString() + idx2.toString());
//               setCheck(check);
//             }}
//           >
//             <span>{data}</span>
//             {check.has(idx1.toString() + idx2.toString()) ? (
//               <AiOutlineCheck className="icon" />
//             ) : null}
//           </D.DropItem>
//         ))}
//       </div>
//     </D.CateWrapper>
//   ));

//   const submitInfo = async () => {
//     // axios
//     //   .post("url", lectureInfo)
//     //   .then((response) => {
//     //     console.log(response);
//     //     window.location.href = "/";
//     //   })
//     //   .catch((error) => console.log(error));


    try {
      const response = await axios.post("url", lectureInfo);
      console.log(response);
      window.location.href = "/";
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <S.Wrapper>
      <p>교육 프로그램에 대한 설명을 적어주세요.</p>
      <div>
        {/* <S.ContentBox> */}
        <S.Input
          placeholder="프로그램 이름"
          height={"70px"}
          fontSize={"30px"}
          onChange={(e) =>
            setLectureInfo({ ...lectureInfo, lecName: e.target.value })
          }
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
          {/* <D.InputLayout>HI</D.InputLayout> */}
        </D.SearchBar>
        {/* </S.Input> */}
        <S.Input
          placeholder="프로그램 설명"
          as={"textarea"}
          height={"300px"}
          fontSize={"22px"}
          onChange={(e) =>
            setLectureInfo({ ...lectureInfo, lecDescription: e.target.value })
          }
        />
        <S.FileBox>
          <S.InBox>
            <S.Label htmlFor="Poster">포스터 이미지파일</S.Label>
            <input
              type="file"
              accept={[".png", ".jpeg", ".jpg", ".svg"]}
              onChange={(file) =>
                setLectureInfo({
                  ...lectureInfo,
                  posterImage: file.target.value,
                })
              }
            />
          </S.InBox>
          <S.InBox>
            <S.Label htmlFor="Attach">강의 첨부파일</S.Label>
            <input
              type="file"
              multiple
              onChange={(files) =>
                setLectureInfo({
                  ...lectureInfo,
                  attachedFile: files.target.value,
                })
              }
            />
          </S.InBox>
        </S.FileBox>
        {/* </S.ContentBox> */}
        <S.Submit onClick={submitInfo}>완료</S.Submit>
      </div>
    </S.Wrapper>
  );
};


// export default Index;
