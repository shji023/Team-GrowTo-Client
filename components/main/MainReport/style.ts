import styled from "styled-components";
import { colors } from "styles/colors";
import { applyMediaQuery } from "styles/mediaQuery";

const StyledRoot = styled.div`
  box-sizing: border-box;
  width: 100vw;
  height: 60.3rem;
  background-color: ${colors.skyBlue};
  background-image: url("/assets/images/mainReportBackground.png");
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 96rem;
  height: 40rem;
  background: linear-gradient(rgb(255, 255, 255, 0.8), 80%, transparent);
  backdrop-filter: blur(4rem);
  border: 0.2rem solid #ffffff;
  border-radius: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 4rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  ${applyMediaQuery("mobile")} {
    width: 32.8rem;
    height: 14.6rem;
    border-radius: 1.8rem;
  }
`;

const LineWrapper = styled.div`
  margin-top: 1.4rem;
  ${applyMediaQuery("mobile")} {
    margin-top: 0;
  }
`;

export { LineWrapper, StyledRoot, Wrapper };
