import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1876d7;
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
    margin-top: 7%;
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
export const Label = styled.label`
  width: 100%;
  height: 20px;
  /* background-color: lightgrey; */
  text-align: center;
  font-size: 20px;
  margin-bottom: 5%;
`;
export const Submit = styled.div`
  width: 20%;
  height: 5%;
  background-color: #27386f;
  border-radius: 15px;
  text-align: center;
  font-size: 20px;
  color: white;
  line-height: 200%;
  margin-bottom: 2%;
`;
export const FileBox = styled.div`
  width: 90%;
  height: 20%;
  border-radius: 20px;
  background-color: #f7fcff;
  margin: 30px 20px;
  padding-left: 1.5%;
  padding: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;
export const InBox = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  input {
    /* text-align: center; */
    background-color: #bae4fd;
    border: 1.4px solid black;
    border-radius: 10px;
    padding: 20px;
  }
`;
export const CheckBoxes = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 150%;
  font-weight: 600;

  div {
    display: flex;
    align-items: center;
  }

  input {
    width: 25px;
    height: 25px;
  }
`;
