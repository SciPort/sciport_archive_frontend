import React, { useState } from "react";
import * as S from "./style";
import { MdOutlineArrowBack } from "react-icons/md";

const index = () => {
  // const [lectureInfo, setLectureInfo] = useState({
  //   lecturer: "",
  //   // .....더 적기
  // });
  return (
    <S.Wrapper>
      <p>교육 프로그램에 대한 설명을 적어주세요.</p>
      <div>
        <S.ContentBox>
          <S.Input
            placeholder="프로그램 이름"
            height={"70px"}
            fontSize={"30px"}
          ></S.Input>
          <S.Input as={"select"}></S.Input>
          <S.Input
            placeholder="프로그램 설명"
            as={"textarea"}
            height={"300px"}
            fontSize={"22px"}
          ></S.Input>
          <S.Input as={"div"}>
            <S.Label htmlFor="Poster">포스터 이미지파일</S.Label>
            <S.Input
              id="Poster"
              type={"file"}
              accept={[".png", ".jpeg", ".jpg", ".svg"]}
            />
          </S.Input>
        </S.ContentBox>
        <S.Submit>완료</S.Submit>
      </div>
    </S.Wrapper>
  );
};

export default index;
