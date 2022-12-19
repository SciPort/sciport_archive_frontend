import React, { useEffect, useState } from "react";
import * as S from "./style";
import sample1 from "../../assets/img/sample1.png";
import { userState } from "../../components/states";
import { sampleList } from "../../assets/data/export.js";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useRecoilState } from "recoil";

const Detail = () => {
  const navi = useNavigate();
  const [lecInfo, setLecInfo] = useState("");
  const [tableData, setTableData] = useState([]);
  const data = useLocation();
  const id = data.state.id;
  const [user, setUser] = useRecoilState(userState);
  console.log(tableData);
  useEffect(() => {
    axios
      .get(`http://192.168.10.128:8080/lecture/getOneLecture?id=${id}`)
      .then((res) => {
        setLecInfo(res.data);
        setTableData([
          res.data.education,
          res.data.isDistanceClass,
          res.data.lesson,
          res.data.year,
          res.data.term,
        ]);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const Modify = () => {
    if (user.isLogged) {
      // navi("/modify", { state: { id: id } })}
      navi("/modify", { state: { id: id } });
    } else {
      alert("로그인 후 이용해주세요!");
      window.location.href = "/login";
    }
  };
  const downloadFile = () => {};
  return (
    <S.Wrapper>
      <S.TitleBox>
        <h1>{lecInfo.name}</h1>
        <S.ModifyButton onClick={Modify}>수정하기</S.ModifyButton>
      </S.TitleBox>
      <S.ContentBox>
        <S.LeftBox>
          <h2>교육프로그램 소개</h2>
          <S.innerBox>
            <h3 style={{ color: "lightblue" }}>{lecInfo.eduName}</h3>
            {lecInfo.content ? (
              <p>{lecInfo.content}</p>
            ) : (
              <p>내용이 없습니다.</p>
            )}
          </S.innerBox>
          <S.FileBox>
            <S.File>
              {lecInfo.fileName ? lecInfo.fileName : "첨부파일이 없습니다."}
            </S.File>
            <S.Download onClick={downloadFile}>
              <a
                href={`http://192.168.10.128:8080/lecture/getFile/${lecInfo.fileName}`}
              >
                첨부파일 다운로드
              </a>
            </S.Download>
          </S.FileBox>
        </S.LeftBox>
        <S.RightBox>
          <img
            src={`http://192.168.10.128:8080${lecInfo.posterUrl}`}
            alt="포스터"
          />
          <div>
            {sampleList.map((data, idx) => {
              return (
                <S.ListBox>
                  <span>{data}</span>
                  <p>{tableData[idx]}</p>
                </S.ListBox>
              );
            })}
          </div>
        </S.RightBox>
      </S.ContentBox>
    </S.Wrapper>
  );
};

export default Detail;
