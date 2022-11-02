import styled from "styled-components";

export const Head = styled.div`
  width: 100%;
  height: 12vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: rgba(75, 75, 75, 0.5);
`;
export const Home = styled.div`
  font-size: 24px;
  font-weight: bold;

  a {
    text-decoration: none;
    color: white;
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
  color: white;
  font-weight: 700;
  > a {
    display: flex;
    align-items: center;
    color: white;
    text-decoration: none;
  }
`;

export const Title = styled.span`
  font-size: 30px;
  font-weight: 700;
  text-align: center;
  color: white;

  span {
    color: blue;
  }
`;
