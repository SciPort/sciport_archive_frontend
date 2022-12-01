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
        </S.ContentBox>
        <S.ContentBox>
          <S.Input
            placeholder="강사 이름"
            height={"60px"}
            fontSize={"25px"}
          ></S.Input>
          <S.Input
            as={"textarea"}
            placeholder="강사 소개"
            height={"300px"}
            fontSize={"22px"}
          ></S.Input>
        </S.ContentBox>
        <S.ContentBox>
          <S.Input
            placeholder="프로그램 설명"
            as={"textarea"}
            height={"300px"}
            fontSize={"22px"}
          ></S.Input>
          <S.Input
            placeholder="준비물"
            as={"textarea"}
            height={"200px"}
            fontSize={"22px"}
          ></S.Input>
          <S.Input
            placeholder="유의사항, 프로그램을 진행할 때 주의해야할 사항을 적어주세요."
            as={"textarea"}
            height={"300px"}
            fontSize={"22px"}
          ></S.Input>
        </S.ContentBox>
        <S.Submit>완료</S.Submit>
      </div>
    </S.Wrapper>
  );
};

export default index;
