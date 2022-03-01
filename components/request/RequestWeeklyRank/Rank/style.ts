import { RequestRankLine, RequestRankLine_mobile } from "public/assets/icons";
import styled from "styled-components";
import { colors } from "styles/colors";
import { applyMediaQuery } from "styles/mediaQuery";

export const StyledRoot = styled.div`
  margin-right: 2.5rem;

  ${applyMediaQuery("mobile")} {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0.8rem;
  }
`;

export const Id = styled.div`
  font-family: "Pretendard-Bold";
  font-size: 2.5rem;
  color: ${colors.subOrange};
  margin-bottom: 1rem;

  ${applyMediaQuery("mobile")} {
    font-size: 1.4rem;
    margin-bottom: 0;
  }
`;

export const Wrapper = styled.div`
  width: 38.125rem;
  height: 13.5rem;
  background-color: ${colors.gray1};
  border-radius: 3.5rem;
  display: flex;
  padding: 3rem 4.5rem;
  align-items: center;
  position: relative;
  z-index: -1;

  ${applyMediaQuery("mobile")} {
    width: 27.5rem;
    height: 6.8rem;
    border-radius: 1.8rem;
    padding: 1rem 3.2rem;
    margin-left: 1.2rem;
  }
`;

export const Title = styled.div`
  h4 {
    font-family: "Pretendard-Bold";
    font-size: 2rem;
    color: ${colors.gray5};
    margin-bottom: 0.5rem;
    ${applyMediaQuery("mobile")} {
      font-size: 1.2rem;
      margin-bottom: 0.2rem;
    }
  }
  h3 {
    font-family: "Pretendard-Bold";
    color: ${colors.subBlack};
    font-size: 2.5rem;
    ${applyMediaQuery("mobile")} {
      font-size: 1.4rem;
    }
  }
`;
export const Line = styled(RequestRankLine)`
  position: absolute;
  left: 20.5rem;
`;

export const MobileLine = styled(RequestRankLine_mobile)`
  position: absolute;
  left: 16rem;
`;

export const RequestNumber = styled.div`
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  right: 4.5rem;

  ${applyMediaQuery("mobile")} {
    font-size: 1.2rem;
    right: 3.2rem;
  }

  h5 {
    font-family: "Pretendard-Bold";
    margin-bottom: 0.5rem;

    ${applyMediaQuery("mobile")} {
      margin-bottom: 0.2rem;
    }
  }
`;

export const Number = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 2rem;
  display: flex;

  ${applyMediaQuery("mobile")} {
    font-size: 1.2rem;
  }
  p {
    font-family: "Pretendard-Bold";
    color: ${colors.mainBlue};
    font-family: "Pretendard-Bold";
  }
`;
