import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 88vh;
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
  height: 100%;
  background-color: grey;
`;
