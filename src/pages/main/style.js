import styled from "styled-components";

export const Cate = styled.div`
  height: 100%;
  width: 12%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 160%;
  background: #e4e1df;
  &:hover {
    background: #9d897b;
    color: white;
  }
`;

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
  height: 100px;
  margin-top: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  > input {
    font-size: 42px;
    width: 50%;
    height: 100px;
  }
  .searchIcon{
    width : auto;
    height : 80%;
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
