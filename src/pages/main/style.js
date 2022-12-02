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
`;
export const ImgWrapper = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: row;
`;
export const SearchWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: -4vh;
`;
export const SearchBar = styled.div`
  width: 80%;
  height: 10%;
  background-color: #0c2136;
  z-index: 4;
  display: flex;
  flex-direction: row;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export const Text = styled.span`
  margin-top: 7%;
  position: absolute;
  z-index: 2;
  width: 100%;
  text-align: center;
  color: white;
  font-size: 2.5vw;
`;

export const Home = styled.div`
  width: 6%;
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
  &:hover > .icon {
    transform: rotate(180deg);
    transition: all 0.3s ease;
  }
  &:not(:hover) > .icon {
    transition: all 0.3s ease;
  }
  > span {
    margin-left: 5%;
  }
  > .icon {
    position: absolute;
    height: 5%;
    width: 5%;
    margin-left: 8%;
  }
`;

export const Input = styled.input`
  height: auto;
  width: 42%;
  &:focus {
    outline: none;
  }
  font-size: 3vh;
`;
export const Search = styled.div`
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 6%;
  > .icon {
    color: white;
    width: 80%;
    height: 80%;
  }
`;

export const DropItem = styled.div`
  background-color: ${(props) => props.bgcolor};
  color: ${(props) => props.color};
  width: 100%;
  height: 6vh;
  display: flex;
  align-items: center;
  border: 1px solid black;
  &:hover {
    background-color: ${(props) =>
      props.bgcolor == "#0c2136" ? props.bgcolor : "#1876d7;"};
    color: white;
    transition: all 0.2s ease;
  }
  &:not(:hover) {
    transition: all 0.2s ease;
  }
`;
export const CateWrapper = styled.div`
  width: 15%;
  height: 100%;
  transform-origin: top center;
  .dropdown {
    display: none;
  }
  &:hover > .dropdown {
    display: flex;
    flex-direction: column;
    animation: ${growDown} 300ms linear forwards;
    transform-origin: top center;
  }
  &:not(:hover) >.dropdown{
    animation: ${growDown} 300ms linear forwards;
    transform-origin: top center;
  }
`;
