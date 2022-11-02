import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  > p {
    font-size: 50px;
    font-weight: bold;
    text-align: center;
  }
`;
export const SearchCon = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  > input {
    font-size: 42px;
    width: 50%;
    height: 100px;
  }
`;
export const LectureCon = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const LectureList = styled.div`
  width: 90%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25%, auto));
  row-gap: 50px;
`;
