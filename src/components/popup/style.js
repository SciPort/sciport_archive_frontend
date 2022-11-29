import styled from "styled-components";

export const Wrapper = styled.div`
  border-radius: 20px;
  width: 60%;
  height: 70%;
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
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  width: 100%;
  height: 10%;
  text-align: center;
  line-height: 20%;
  font-size: 200%;
  background-color: black;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Cate = styled.div`
  margin-top: 15px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25%, auto));
  gap: none;
  width: 100%;
  font-size: 1.5vw;
  white-space: nowrap;
`;

export const CateList = styled.div`
  background: ${(props) => props.bgcolor};
  border: 1px solid #e5e5e5;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.color};
  text-align: center;
`;

export const Btn = styled.button`
  width: 20vw;
  height: 6vh;
  margin-top: 2%;
  border-radius : 10px;
  font-size : 125%;
  border : 1px solid #59d3ff;
  background-color : white;
  color : #59d3ff;
`;
