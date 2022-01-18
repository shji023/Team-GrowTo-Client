import styled from "styled-components";
import { colors } from "styles/colors";
export const BackGround = styled.div<{ isBlur: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  opacity: ${(props) => (props.isBlur ? 0.7 : undefined)};
  background-color: ${(props) => (props.isBlur ? "rgba(0,0,0,0.7)" : undefined)};
`;
export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  background-color: white;
  width: 70rem;
  height: 36rem;
  border-radius: 2.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > p:first-child {
    font-family: "Pretendard-Bold";
    font-size: 3.2rem;
    margin-top: 7.3rem;
    color: ${colors.subBlack};
  }
  & > p:nth-of-type(2) {
    font-family: "Pretendard-Medium";
    font-size: 2.2rem;
    margin-top: 1.6rem;
    color: ${colors.gray5};
  }
  & > button {
    width: 40rem;
    height: 6rem;
    color: white;
    background: ${colors.mainBlue};
    font-size: 2rem;
    font-family: "Pretendard-Bold";
    margin-top: 7.9rem;
    border-radius: 4.8rem;
  }
`;