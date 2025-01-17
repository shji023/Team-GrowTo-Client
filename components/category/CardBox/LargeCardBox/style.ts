import styled from "styled-components";
import { colors } from "styles/colors";
import { applyMediaQuery } from "styles/mediaQuery";

export const StyledRoot = styled.div`
  display: flex;
  max-width: 126.2rem;
  width: 100%;
  height: 14rem;
  background-color: white;
  border-radius: 2.4rem;
  margin-bottom: 1.8rem;
  transition: all 0.15s;
  box-shadow: 0rem 0.2rem 1rem rgba(3, 0, 167, 0.1);
  &:hover {
    box-shadow: 0rem 0.2rem 1rem rgba(3, 0, 167, 0.15);
    background: #fbfcff;
  }
`;

export const LectureTitleBox = styled.div`
  padding: 0 3.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #bfd8ff;
  width: 25.9rem;
  margin: 2.9rem 0;
`;

export const LectureInfoBox = styled(LectureTitleBox)`
  display: flex;
  align-items: center;
  width: 35.4rem;
  min-width: 33.8rem;
  padding: 0 2.8rem;

  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
`;

export const LectureDateBox = styled(LectureTitleBox)`
  min-width: 9rem;
  width: 10.3rem;
  padding: 0;
  justify-content: center;
  flex-direction: column;
  text-align: center;

  & span:first-child {
    margin-bottom: 0.8rem;
  }
`;

export const LectureTagBox = styled(LectureInfoBox)`
  min-width: 27rem;
  width: 50.2rem;
  align-items: center;
  padding: 0 2.4rem;
  border: none;
  overflow: auto;
`;

export const LectureTitleName = styled.h3`
  width: 19.4rem;
  font-family: "Pretendard-Bold";
  font-size: 1.8rem;
  line-height: 2.8rem;
  text-align: center;
  color: ${colors.subBlack};
`;

export const LectureInfoShortName = styled.span`
  font-family: "Pretendard-Light";
  font-size: 1.4em;
  line-height: 1.7rem;
  width: 7.8rem;
  color: ${colors.subBlack};
`;

export const LectureInfoLongName = styled(LectureInfoShortName)`
  width: 9.4rem;
`;

export const LectureInfoWrapper = styled.span`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;

  & + & {
    margin-top: 1.2rem;
  }
`;

export const LectureInfoData = styled.span`
  font-family: "Pretendard-Medium";
  font-size: 1.6rem;
  line-height: 1.9rem;
  color: ${colors.subBlack};
`;

export const LectureTag = styled.span`
  background-color: ${colors.gray2};
  border-radius: 3.5rem;
  padding: 0.5rem 1.4rem;
  height: 2.4rem;

  font-family: "Pretendard-Regular";
  font-size: 1.2rem;
  line-height: 1.4rem;
  text-align: center;

  color: ${colors.subBlack};

  margin-top: 0.65rem;
  margin-bottom: 0.65rem;
  margin-right: 0.8rem;

  &:last-child {
    margin-right: 0rem;
  }
`;

export const TagWrapper = styled.div`
  width: 41.6rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  ${applyMediaQuery("mobile")} {
    width: 100%;
  }
`;

export const LectureLinkBtn = styled.a`
  height: 100%;
  width: 4.4rem;
  background: linear-gradient(206.51deg, #bde3ff -1.36%, #4579ff 83.36%);
  border-top-right-radius: 2.4rem;
  border-bottom-right-radius: 2.4rem;

  cursor: pointer;
  text-align: center;
  line-height: 15rem;
`;
