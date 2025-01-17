import styled from "styled-components";
import { applyMediaQuery } from "styles/mediaQuery";

const StyledRoot = styled.section`
  margin-top: 4.8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${applyMediaQuery("mobile")} {
    margin-top: 2rem;
  }
`;

const ImgWrapper = styled.figure`
  display: flex;
  margin: auto;
  width: 30rem;
  height: 28rem;
  ${applyMediaQuery("mobile")} {
    width: 20rem;
    height: auto;
  }
`;

export { ImgWrapper, StyledRoot };
