import styled from "styled-components";

export const Wrapper = styled.div`
  height: 88vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Register = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80%;
  width: 60%;
  border: 1px solid black;

  span {
    margin-top: 5%;
    color: #4F71C9;
    font-size: 250%;
    font-weight: 700;
  }
  p {
    color: #8D8D8D;
    font-size: 110%;
    
  }
`;
export const RegisterForm = styled.form`
  /* margin-top: 2%; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  height: 50%;

  input {
    padding-left: 2%;
    height: 25%;
    width: 100%;
    font-size: 130%;
  }
  input:last-child {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 15%;
    background-color: #244CB1;
    border: none;
    font-size: 180%;
    font-weight: 600;
    color: white;
  }
`;
export const SubmitForm = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 13%;

  button {
    width: 50%;
    height: 100%;
    border: none;
    color: white;
    font-size: 120%;
  }
`;