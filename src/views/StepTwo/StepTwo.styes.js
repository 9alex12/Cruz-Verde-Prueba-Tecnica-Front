import styled from "@emotion/styled";

export const Container = styled.div``;

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  height: calc(100vh - 137px);
`;

export const RightContainer = styled.div`
  flex: 2;
  img {
    width: 80%;
  }
`;

export const LeftContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  flex: 1;
  .inputForm {
    border-radius: 31px;
    width: 273px;
    height: 39px;
    background-color: #3f3f41;
    color: white;
    font-size: 20px;
  }
`;
