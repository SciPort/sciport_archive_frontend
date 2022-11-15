import styled from "styled-components";

export const Wrapper = styled.div`
  width: 80%;
  height: 80%;
  margin: 0 auto;
  background-color : yellow;
  display : flex;
  flex-direction : column;
  align-items : center;
`;

export const Title = styled.div`
  width: 100%;
  height: 20%;
  text-align: center;
  line-height : 20%;
  font-size : 58px;
  background-color : black;
  color : white;
`;

export const Cate = styled.div`
  display : flex;
  flex-direction : row;
  width : 100%;
  height : 20%;
  justify-content : space-between;
  font-size : 32px;
  >div{
    border : 1px solid;
    width : 100%;
    text-align : center;
  }
`
