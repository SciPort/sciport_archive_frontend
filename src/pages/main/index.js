import axios from "axios";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import Lecture from "../../components/lecture";
import { userState } from "../../components/states";
import * as S from "./style";
export default function Main() {
  const [user, setUser] = useRecoilState(userState);
  useEffect(() => {
    const form = { accessToken: localStorage.getItem("accessToken") };
    axios
      .post("http://192.168.10.128:8080/user/auth", form)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        const rf = { refreshToken: localStorage.getItem("refreshToken") };
        axios
          .post("http://192.168.10.128:8080/user/reissue", rf)
          .then((res) => {
            localStorage.setItem("accessToken", res.data.accessToken);
            localStorage.setItem("refreshToken", res.data.refreshToken);
            axios
              .post("http://192.168.10.128:8080/user/auth", form)
              .then((res) => {
                setUser(res.data);
              })
              .catch((err) => {});
          })
          .catch((err) => {});
      });
  }, []);
  console.log(user);
  return (
    <S.Wrapper>
      <S.SearchCon>
        <input type="search"></input>
      </S.SearchCon>
      <p>EDUCATION PROGRAM LIST</p>
      <S.LectureCon>
        <S.LectureList>
          <Lecture></Lecture>
          <Lecture></Lecture>
          <Lecture></Lecture>
          <Lecture></Lecture>
          <Lecture></Lecture>
          <Lecture></Lecture>
          <Lecture></Lecture>
        </S.LectureList>
      </S.LectureCon>
    </S.Wrapper>
  );
}
