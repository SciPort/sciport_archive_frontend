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
  height: 100px;
  margin-top: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  > input {
    text-indent: 3%;
    font-size: 24px;
    width: 30%;
    height: 60px;
  }
  .searchIcon {
    background-color : #2D97F8;
    width: 8%;
    height: 60px;
    color: white;
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

export const Cate = styled.div`
  width: 12%;
  height: 60px;
  display : flex;
  justify-content : center;
  align-items : center;
  font-size : 24px;
  border : 1px solid black;
`;
