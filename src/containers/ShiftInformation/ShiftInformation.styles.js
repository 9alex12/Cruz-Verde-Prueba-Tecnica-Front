import styled from "@emotion/styled";

export const ContainerCss = styled.div`
  margin: 75px 0 0 107px;
  width: 437px;
  color: #1f9547;
  text-align: left;
  line-height: 5px;
  & h4 {
    font-family: normal normal 600 18px/30px Lato;
    font-weight: 500;
    font-size: 20px;
    color: #2d2d2d;
  }
`;

export const TextContainer = styled.div`
  text-align: left;
  margin-bottom: 62px;
  height: 60px;
  & h2 {
    font-size: 23px;
    font-weight: bold;
  }
  & h3 {
    font-size: 23px;
    font-weight: normal;
  }
  /* background-color: yellow; */
`;

export const StepsContainer = styled.div`
  margin-bottom: 58px;
  & ol {
    margin-top: 22px;
    list-style-type: none;
    padding-inline-start: 0;
  }
  & li {
    counter-increment: step-counter;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
  }
  & li::before {
    display: flex;
    justify-content: center;
    align-items: center;
    content: counter(step-counter);
    width: 28px;
    height: 28px;
    margin-right: 20px;
    background-color: #1f9547;
    color: white;
    border-radius: 50%;
  }
  & li {
    color: #3f3f41;
    margin-bottom: 30px;
    font-weight: 200;
    font-size: 18px;
  }
`;
