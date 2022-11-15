import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  > div {
    width: 90%;
  }
  > div h1 {
    padding-bottom: 1%;
    font-size: 300%;
    border-bottom: 1.5px solid black;
  }
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
  /* padding-top: 5%; */
  /* margin-top: 5%; */
  width: 65%;
  border-right: 1px solid black;
  /* background-color: white; */
  h2 {
    font-size: 250%;
    margin-left: 5%;
  }
  div {
    width: 100%;
    text-align: center;
    margin-top: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  div h3 {
    font-size: 200%;
  }
  div p {
    width: 90%;
    font-size: 130%;
  }
  > p {
    font-size: 130%;
    margin-left: 5%;
    width: 90%;
  }
  div:last-child {
    background-color: lightgrey;
    width: 90%;
    margin-left: 5%;
    margin-bottom: 5%;
    height: 30vh;
  }
  div:last-child p {
    text-align: start;
  }
`;
export const subTitle = styled.h2`
  margin-top: 5%;
`;

export const RightBox = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  align-items: center;

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
