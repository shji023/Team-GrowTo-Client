import styled from "styled-components";
import { applyMediaQuery } from "styles/mediaQuery";
const Button = styled.button`
  width: 22.4rem;
  height: 10.8rem;
  font-size: 2.2rem;
  font-family: "Pretendard-SemiBold";
  //Semi-Bold로 변경 필요
  /* line-height: 2.6rem; */
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, #ffffff 0%, #f0f8ff 11.58%, #f6fbff 71%);
  border: 0.1rem solid white;
  box-sizing: border-box;
  box-shadow: 0 0.2rem 0.8rem 0.1rem rgba(69, 121, 255, 0.3);
  border-radius: 2.4rem;
  cursor: pointer;
  svg {
    margin-right: 1.4rem;
  }
  display: flex;
  align-items: center;
  ${applyMediaQuery("mobile")} {
    width: 9.2rem;
    height: 5.6rem;
    font-size: 1.4rem;
    font-family: "Pretendard-Medium";
    border-radius: 1rem;
    margin-right: 1rem;
    /*리사이즈 필요*/
    svg {
      width: 1.8rem;
      height: 1.8rem;
    }
  }
`;

export { Button };
