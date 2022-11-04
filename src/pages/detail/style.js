import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  background-color: white;
  display: flex;
  flex-direction: column;
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

  /* background-color: grey; */
`;

export const LeftBox = styled.div`
  width: 65%;
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
`;
export const subTitle = styled.h2`
  margin-top: 5%;
`;

export const RightBox = styled.div`
  width: 35%;
`;
