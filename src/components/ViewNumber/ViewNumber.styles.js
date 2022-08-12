import styled from "@emotion/styled";

export const Container = styled.div`
  position: relative;
  div {
    width: 310px;
    height: 0;
    border-bottom: 5px dotted #cbcbcb;
    position: absolute;
    top: 35px;
    left: 10px;
    z-index: -1;
  }
  ol {
    list-style-type: none;
    padding-inline-start: 0;
    display: flex;
    width: 336px;
    justify-content: space-between;
  }
  li {
    counter-increment: step-counter;
  }
  li::before {
    content: counter(step-counter);
    background-color: white;
    display: flex;
    width: 37px;
    height: 37px;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
    font-size: 100%;
    border: 2px solid #1f9547;
    color: #1f9547;
    font-weight: bold;
    border-radius: 50%;
  }

  li:nth-child(${({ step }) => step}):before {
    background-color: #1f9547;
    color: white;
  }
`;
