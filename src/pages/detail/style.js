import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  background-color: lightgrey;
  display: flex;
  flex-direction: column;
  align-items: center;
  > div {
    width: 80%;
    border-bottom: 1.5px solid black;
  }
  > div h1 {
    font-size: 300%;
  }
`;

export const ContentBox = styled.div`
  width: 80%;
  height: auto;
  background-color: grey;
`;

export const LeftBox = styled.div`
  width: 65%;
`;

export const RightBox = styled.div`
  width: 35%;
`;
