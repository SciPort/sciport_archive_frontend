import styled from "styled-components";

export const Wrapper = styled.div`
  width: 80%;
  height: 80%;
  margin: 0 auto;
  background-color: yellow;
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
`;

export const Cate = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 20%;
  justify-content: space-around;
  font-size: 28px;
  > div {
    width: 20%;
    border: 1px solid;
    text-align: center;
  }
`;
