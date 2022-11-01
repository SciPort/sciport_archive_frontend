import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 80%;
  height: 80%;
  border-bottom: 1px solid;
  border-top: 1px solid;
  display: flex;
  flex-direction: row;
`;
export const MainContent = styled.div`
  width: 55%;
  height: 100%;
  h1{
    font-size : 32px;
  }
`;

export const SubContent = styled.div`
  width: 45%;
  height: 100%;
`;
export const Info = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  > span{
    font-size : 20px;
  }
`;
