import styled from "styled-components";

export const Head = styled.div`
  z-index: 5;
  position: fixed;
  width: 100%;
  height: 12vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* background: rgba(75, 75, 75, 0.5); */
  border-bottom: 1px solid gray;
  background-color: rgba(
    ${(props) => props.bgcolor},
    ${(props) => props.bgcolor},
    ${(props) => props.bgcolor},
    ${(props) => props.opacity}
  );
  transition: all 0.3s ease;
`;
export const Home = styled.div`
  font-size: 24px;
  font-weight: bold;
  a {
    text-decoration: none;
    color: ${(props) => props.color};
  }
  span {
    color: blue;
  }
`;
export const Login = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 200px;
  justify-content: space-around;
  color: black;
  font-weight: 700;
  > a {
    display: flex;
    align-items: center;
    color: ${(props) => props.color};
    text-decoration: none;
  }
`;

export const Title = styled.span`
  font-size: 30px;
  font-weight: 700;
  text-align: center;
  color: black;
  color: ${(props) => props.color};
  span {
    color: blue;
  }
`;
