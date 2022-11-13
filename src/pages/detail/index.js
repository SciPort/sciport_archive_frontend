import React from "react";
import * as S from "./style";
import sample1 from "../../assets/img/sample1.png";
import { sampleList } from "../../assets/data/export.js";

const index = () => {
  return (
    <S.Wrapper>
      <div>
        <h1>내가 GREEN 방학 생활</h1>
      </div>
      <S.ContentBox>
        <S.LeftBox>
          <h2>교육프로그램 소개</h2>
          <div>
            <h3>강사 : ㅇㅇㅇ</h3>
            <p>
              대충 이러이러한 사람입니다.대충 이러이러한 사람입니다.대충
              이러이러한 사람입니다.대충 이러이러한 사람입니다.대충 이러이러한
              사람입니다.대충 이러이러한 사람입니다.대충 이러이러한
              사람입니다.대충 이러이러한 사람입니다.대충 이러이러한 사람입니다.
              대충 이러이러한 사람입니다.대충 이러이러한 사람입니다.대충
              이러이러한 사람입니다.대충 이러이러한 사람입니다.대충 이러이러한
              사람입니다.대충 이러이러한 사람입니다.대충 이러이러한 사람입니다.
            </p>
          </div>
          <div>
            <h3 style={{ color: "lightblue" }}>부제목(안 넣어도 됨)</h3>
            <p>
              대충 이 교육프로그램에 대한 설명대충 이 교육프로그램에 대한
              설명대충 이 교육프로그램에 대한 설명대충 이 교육프로그램에 대한
              설명대충 이 교육프로그램에 대한 설명대충 이 교육프로그램에 대한
              설명대충 이 교육프로그램에 대한 설명대충 이 교육프로그램에 대한
              설명대충 이 교육프로그램에 대한 설명대충 이 교육프로그램에 대한
              설명대충 이 교육프로그램에 대한 설명대충 이 교육프로그램에 대한
              설명
            </p>
          </div>
          <h2>준비물</h2>
          <p>필기구 등...</p>
          <div>
            <p>유의사항</p>
          </div>
        </S.LeftBox>
        <S.RightBox>
          <img src={sample1} alt="" />
          <div>
            {sampleList.map((data, idx) => {
              return (
                <S.ListBox>
                  <span>{data[0]}</span>
                  <p>{data[1]}</p>
                </S.ListBox>
              );
            })}
          </div>
        </S.RightBox>
      </S.ContentBox>
    </S.Wrapper>
  );
};

export default index;
