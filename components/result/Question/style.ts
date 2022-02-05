import styled from "styled-components";
import { colors } from "styles/colors";

const BackGround = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  background: ${colors.subBlack};
  opacity: 0.7;
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  max-height: 100%;
`;

export { BackGround };
