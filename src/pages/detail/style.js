import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 7%;
`;
export const TitleBox = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1.5px solid black;

  > h1 {
    font-size: 280%;
  }
`;
export const ModifyButton = styled.button`
  border: none;
  width: 13%;
  height: 50px;
  border-radius: 1000px;
  font-size: 130%;
  background-color: #118fff;
  color: white;
`;

export const ContentBox = styled.div`
  width: 90%;
  height: auto;
  border-bottom: none;
  display: flex;
  flex-direction: row;

  /* background-color: grey; */
`;

export const LeftBox = styled.div`
  height: 100%;
  width: 65%;
  h2 {
    font-size: 250%;
    margin-left: 5%;
  }
  div h3 {
    font-size: 200%;
  }
  div p {
    width: 90%;
    font-size: 130%;
  }
  div:last-child p {
    text-align: start;
  }
`;
export const innerBox = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const subTitle = styled.h2`
  margin-top: 5%;
`;
export const FileBox = styled.div`
  width: 80%;
  height: 45px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 10%;
`;
export const File = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  box-sizing: border-box;
`;
export const Download = styled.button`
  border: 1px solid black;
  width: 30%;
  height: 100%;
`;
export const RightBox = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-left: 1px solid black;
  padding-bottom: 3%;

  img {
    width: 70%;
    margin-top: 5%;
    margin-bottom: 5%;
  }
  > div {
    width: 75%;
    /* border-top: 2px solid black; */
  }
`;

export const ListBox = styled.div`
  /* margin-top: 2%; */
  padding-left: 3%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  border-bottom: 1px solid black;

  :first-child {
    border-top: 2px solid black;
  }
  :last-child {
    border-bottom: 2px solid black;
  }
  span {
    display: block;
    width: 30%;
  }
  p {
    margin-left: 15%;
    /* float: right; */
    width: 50%;
    text-align: start;
  }
`;
