import styled from "styled-components";
import { colors } from "styles/colors";
import { applyMediaQuery } from "styles/mediaQuery";

const StyledRoot = styled.main`
  margin-top: 4.8rem;
  /* width: 128rem; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImgWrapper = styled.section`
  display: flex;
  padding-top: 2rem;
  margin: auto;
  width: 40.1rem;
  height: 38.2rem;
  ${applyMediaQuery("mobile")} {
    width: 20rem;
    height: auto;
  }
`;

export { ImgWrapper, StyledRoot };
