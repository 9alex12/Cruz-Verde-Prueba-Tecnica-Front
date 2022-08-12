import styled from "@emotion/styled";

export const TextContainer = styled.div`
  text-align: start;
  width: 65%;
  h2 {
    color: #1f9547;
    font: normal normal 900 26px/30px Lato;
  }
  p {
    font-weight: 600px;
    color: black;
    font: normal normal 900 26px/30px Lato;
  }
  h3 {
    color: #a5a5a5;
    font: normal normal 900 20px/30px Lato;
  }
`;

export const OfficeInfoContainer = styled.div`
  display: flex;
  align-items: center;
  height: 70px;
  width: 212px;
  margin: 35px 0 45px;
  p:nth-child(1) {
    font: normal normal 900 20px/45px Lato;
    letter-spacing: 0.52px;
    color: #3f3f41;
  }
  p {
    font-family: Lato;
    font-size: 13px;
    letter-spacing: 0px;
    color: #a5a5a5;
    margin: 0;
  }
`;
