import styled from "styled-components";

export const Wrapper = styled.div`
  width: 80%;
  height: 80%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
`;
export const StyledPopup = styled.div`
  z-index: 2;
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #20202060;
`;
export const Title = styled.div`
  width: 100%;
  height: 20%;
  text-align: center;
  line-height: 20%;
  font-size: 58px;
  background-color: black;
  color: white;
  display : flex;
  flex-direction : row;
  justify-content : center;
  align-items : center;
  >span{
    position : absolute;
    margin-left : 90%;
  }
`;

export const Cate = styled.div`
  margin-top : 40px;
  display: grid;
  /* grid-template-columns: repeat(auto-fill, minmax(25%, auto)); */
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap : none;
  width: 100%;
  font-size: 28px;
  > div {
    background: #f8f8f8;
    border-left: 1px solid #e5e5e5;
    height : 50px;
    display : flex;
    align-items : center;
    justify-content : center;
    color : #999;
    text-align: center;
  }
`;
