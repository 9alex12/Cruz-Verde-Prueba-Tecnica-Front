import styled from "@emotion/styled";

export const Container = styled.div`
  height: 90%;
  width: 400px;
  margin-left: 80px;
  h2 {
    text-align: start;
    margin-bottom: 50px;
    color: #1f9547;
    font: normal normal 900 26px/30px Lato;
  }
`;

export const OfficeInfoContainer = styled.div`
  display: flex;
  align-items: center;
  height: 70px;
  width: 212px;
  margin: 35px 0 45px;
  p:nth-child(1) {
    font: normal normal 900 17px/21px Lato;
    letter-spacing: 0.52px;
    color: #3f3f41;
  }
  p {
    font: normal normal 600 13px/19px Lato;
    letter-spacing: 0px;
    color: #a5a5a5;
    margin: 0;
  }
`;

export const RowContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
