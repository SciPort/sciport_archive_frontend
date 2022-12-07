import axios from "axios";
import React, { useState } from "react";
import * as S from "./style";

const Index = () => {
  const [lectureInfo, setLectureInfo] = useState({
    lecName: "",
    lecDescription: "",
    posterImage: [],
    attachedFile: [],
  });
  const submitInfo = async () => {
    // axios
    //   .post("url", lectureInfo)
    //   .then((response) => {
    //     console.log(response);
    //     window.location.href = "/";
    //   })
    //   .catch((error) => console.log(error));

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
        <S.ContentBox>
          <S.Input
            placeholder="프로그램 이름"
            height={"70px"}
            fontSize={"30px"}
            onChange={(e) =>
              setLectureInfo({ ...lectureInfo, lecName: e.target.value })
            }
          ></S.Input>
          <S.Input
            placeholder="프로그램 설명"
            as={"textarea"}
            height={"300px"}
            fontSize={"22px"}
            onChange={(e) =>
              setLectureInfo({ ...lectureInfo, lecDescription: e.target.value })
            }
          ></S.Input>
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
        </S.ContentBox>
        <S.Submit onClick={submitInfo}>완료</S.Submit>
      </div>
    </S.Wrapper>
  );
};

export default Index;
