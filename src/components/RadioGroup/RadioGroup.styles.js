import styled from "@emotion/styled";

export const Container = styled.div`
  margin: 40px auto;
  height: 55%;
  overflow-y: auto;
`;

export const OfficeContainer = styled.div`
  display: flex;
  align-items: center;
  height: 70px;
  width: 212px;
  border-bottom: 1px solid #a7a7a7;
  p:nth-child(1) {
    font: normal normal 900 13px/16px Lato;
    letter-spacing: 0.52px;
    color: #3f3f41;
  }
  p {
    font: normal normal 600 10px/14px Lato;
    letter-spacing: 0px;
    color: #a5a5a5;
    margin: 0;
  }
`;
