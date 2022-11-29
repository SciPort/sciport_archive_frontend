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
    cursor: pointer;
  }
`;

export const Wrapper = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: center; */
  width: 100%;
  height: 100%;
  > p {
    font-size: 50px;
    font-weight: bold;
    text-align: center;
  }
`;
export const AddBtn = styled.div`
  margin: 0 auto;
  width: 200px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
  background-color: lightgrey;
  margin-bottom: 3%;
`;
export const SearchCon = styled.div`
  width: 100%;
  height: 80px;
  margin-top: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  > input {
    font-size: 22px;
    width: 40%;
    height: 90%;
  }
  .searchIcon {
    width: auto;
    height: 80%;
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
