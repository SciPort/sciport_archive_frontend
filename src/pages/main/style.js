import styled, { keyframes } from "styled-components";

export const growDown = keyframes`
  0% {
    transform: scaleY(0);
  }
  80% {
    transform: scaleY(1.1);
  }
  100% {
    transform: scaleY(1);
  }
`;

export const Layout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const CateLayout = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
`;
export const SearchBar = styled.div`
  width: 80%;
  display : flex;
  flex-direction : row;
  height : 10%;
  background-color: #0c2136;
  margin-top: -4vh;
`;

export const Img = styled.img`
  width: 100%;
  height: auto;
`;

export const Text = styled.span`
  margin-top: 10%;
  position: absolute;
  z-index: 2;
  width: 100%;
  text-align: center;
  color: white;
  font-size: 2.5vw;
`;
export const Home = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  > .icon {
    width: 50%;
    height: 50%;
    color: white;
  }
`;

export const Cate = styled.div`
  width: 100%;
  height: 100%;
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  font-size: 1vw;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:hover > div .icon {
    transform: rotate(180deg);
    transition: all 0.3s ease;
  }
  &:not(:hover) > div .icon {
    transition: all 0.3s ease;
  }
  > span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
    height: 100%;
    font-size: 2vh;
  }
  > div {
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const InputLayout = styled.div`
  height: 100%;
  width: 50%;
`;
export const DropItem = styled.div`
  background-color: ${(props) => props.bgcolor};
  color: ${(props) => props.color};
  width: 100%;
  height: 5.5vh;
  display: flex;
  align-items: center;
  border-bottom: 1px solid;
  border-right: 1px solid;
  border-left: 1px solid;
  &:hover {
    background-color: ${(props) =>
      props.bgcolor == "#0c2136" ? props.bgcolor : "#1876d7;"};
    color: white;
    transition: all 0.2s ease;
  }
  &:not(:hover) {
    transition: all 0.2s ease;
  }
  > span {
    font-size: 1vw;
    margin-left: 1vh;
  }
  > .icon {
    position: absolute;
    margin-left: 10vw;
  }
`;
export const CateWrapper = styled.div`
  width: 100%;
  height: 100%;
  transform-origin: top center;
  &:hover {
    background-color: #1876d7;
    transition: all 0.2s ease;
  }
  &:not(:hover) {
    background-color: #0c2136;
    transition: all 0.2s ease;
  }
  .dropdown {
    display: none;
  }
  &:hover > .dropdown {
    display: flex;
    flex-direction: column;
    animation: ${growDown} 300ms linear forwards;
    transform-origin: top center;
  }
  &:not(:hover) > .dropdown {
    animation: ${growDown} 300ms linear forwards;
    transform-origin: top center;
  }
`;

export const LectureLayout = styled.div`
  height: 100%;
  width: 80%;
  background-color: lightblue;
  margin-top: 5%;
  display: block;
  > span {
    font-size: 3vw;
    font-weight: bold;
  }
`;
export const LectureList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(33%, auto));
  grid-gap: 10px;
  background-color: bisque;
`;
export const LectureItem = styled.div`
  width: 100%;
  height: 100px;
  background-color: aliceblue;
`;
