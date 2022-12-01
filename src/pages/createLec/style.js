import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 260vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000068;
  display: flex;
  flex-direction: column;
  align-items: center;

  > div {
    width: 70%;
    height: 90%;
    background-color: #dceafa;
    border-radius: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    margin-bottom: 4%;
  }

  > p {
    font-size: 45px;
    color: white;
    font-weight: 700;
    margin-bottom: 3%;
  }
`;
export const ContentBox = styled.div`
  width: 85%;
  height: auto;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  /* padding: 20px; */
  border-radius: 30px;
`;
export const Input = styled.input`
  width: 90%;
  height: ${(props) => props.height};
  border-radius: 20px;
  background-color: #f7fcff;
  border: none;
  margin: 30px 20px;
  font-size: ${(props) => props.fontSize};
  padding-left: 1.5%;
  padding: 15px;

  &:focus {
    outline: none;
  }
`;
export const Submit = styled.div`
  width: 20%;
  height: 3%;
  background-color: #27386f;
  border-radius: 15px;
  text-align: center;
  font-size: 20px;
  color: white;
  line-height: 270%;
`;
