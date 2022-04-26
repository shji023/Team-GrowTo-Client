import { getLectureCategoryData } from "apis/info.api";
import { getLectureDataList, getSortingLectureDataList } from "apis/lectures.api";
import { SortingText } from "components/category/SortingBox";
import SEO from "components/common/SEO";
import CardTitle from "components/process/CardTitle";
import CategoryList from "components/process/CategoryList";
import Title from "components/process/Title";
import TypeButton from "components/process/TypeButton";
import { UseSorting } from "hooks/UseCategorySorting";
import Image from "next/image";
import Link from "next/link";
import {
  NextArrowAble,
  NextArrowDisabled,
  ProcessDataIcon,
  ProcessDesignIcon,
  ProcessDevelopIcon,
  ProcessEtcIcon,
  ProcessMarketingIcon,
  ProcessPlanIcon,
  ProcessPlayIcon,
  ProcessSquareIcon,
} from "public/assets/icons";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  currentCategoryState,
  currentSkillState,
  currentSortingState,
  isDisableState,
  isOpenState,
  isSelectedState,
  lectureCategoryState,
  lectureDataList,
  lectureSkillState,
  processState,
  SortingItemType,
} from "store/state";
import styled from "styled-components";
import { colors } from "styles/colors";
import { applyMediaQuery } from "styles/mediaQuery";
import Screen from "styles/Screen";
const iconList: StaticImageData[] = [
  ProcessDevelopIcon,
  ProcessPlanIcon,
  ProcessDesignIcon,
  ProcessMarketingIcon,
  ProcessDataIcon,
  ProcessEtcIcon,
];

function Process() {
  const setCategoryList = useSetRecoilState(lectureCategoryState);
  const { filterCategory } = UseSorting();
  const categoryViewArr = ["개발", "기획", "디자인", "마케팅", "데이터", "기타"];
  const [skillList, setSkillList] = useRecoilState(lectureSkillState);
  const [category, setCurrentCategory] = useRecoilState(currentCategoryState);
  const currentSorting = useRecoilValue(currentSortingState);
  const setLectureDataList = useSetRecoilState(lectureDataList);
  const [currentSkill, setCurrentSkill] = useRecoilState(currentSkillState);
  const setIsDisable = useSetRecoilState(isDisableState);

  const setLectureCategory = async () => {
    const result = await getLectureCategoryData();

    const filteredCategoryList = filterCategory(result, categoryViewArr);

    setCategoryList(filteredCategoryList);
  };
  const findSelectedSkill = (currentSelectedSkillId: number) => {
    return skillList?.filter((skill) => skill.id === currentSelectedSkillId)[0] || null;
  };
  const handleSkillClick = async (skillId: number | null) => {
    if (skillId) {
      //click한 skill의 Id와 skillList의 skill들의 id와 같은 것을 result에 담는다.
      const result = findSelectedSkill(skillId);
      const categoryId = category?.id; //현재 선택되어 있는 category의 id.

      if (categoryId) {
        setCurrentSkill(result);
        setIsDisable(false);
        //1-1없으면 전체리스트 불러온다.
      }
    }
  };

  useEffect(() => {
    setLectureCategory();
  }, []);

  return (
    <>
      <SEO title="그로투 - 나에게 맞는 강의 찾기 " content="당신에게 맞는 IT강의를 찾는 중이에요" />
      <StyledRoot>
        <Screen desktop>
          <>
            <div></div>
            <PlayIcon>
              <Image src={ProcessPlayIcon} alt="processPlay" />
            </PlayIcon>
            <SquareIcon>
              <Image src={ProcessSquareIcon} alt="processSqaure" />
            </SquareIcon>
          </>
        </Screen>
        <ProcessBox>
          <Title></Title>
          <CardChoice>
            <CategoryWrapper>
              <p>
                <span>강의 분야</span>를 선택하세요
              </p>
              <CategoryList iconList={iconList} />
            </CategoryWrapper>
            <SkillWrapper>
              <Screen desktop>
                <p>
                  <span>강의 세부 분야</span>를 선택하세요
                </p>
              </Screen>
            </SkillWrapper>
          </CardChoice>
          <NextButtonWrapper>
            {/* <Link href="/processTag" replace passHref>
               <NextButton
                selectedPrice={selectedTime}
                disabled={selectedTime.length > 0 ? false : true}
              >
                다음
              </NextButton> 
            </Link> */}
            <NextArrowWrapper>
              {/* {selectedTime.length > 0 ? <NextArrowDisabled /> : <NextArrowAble />} */}
            </NextArrowWrapper>
          </NextButtonWrapper>
        </ProcessBox>
      </StyledRoot>
    </>
  );
}

export default Process;
export const StyledRoot = styled.main`
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, ${colors.subNavy}, ${colors.subSkyBlue});
  position: relative;
  ${applyMediaQuery("mobile")} {
    width: 100%;
    height: 100%;
  }
`;

export const PlayIcon = styled.div`
  position: absolute;
  top: 6.45rem;
  right: 0;
`;

export const SquareIcon = styled.div`
  position: absolute;
  bottom: 7rem;
  left: 11.1rem;
`;

export const ProcessBox = styled.div`
  position: relative;
  width: 102rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  ${applyMediaQuery("mobile")} {
    width: 100%;
  }
`;

export const CardChoice = styled.section`
  width: 102rem;
  height: 66rem;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 2.8rem;
  backdrop-filter: blur(2rem);
  border: 2px solid white;
  margin-top: 4rem;
  ${applyMediaQuery("mobile")} {
    width: 100%;
    height: 100%;
    border-radius: 0;
  }
`;

export const CategoryWrapper = styled.div`
  width: 89.2rem;
  margin: 6rem auto 0 6.4rem;
  & > p {
    font-family: "Pretendard-Bold";
    font-size: 2.4rem;
    color: ${colors.subBlack};
    margin-bottom: 2rem;
  }
  & > p > span {
    color: ${colors.subOrange};
  }
  ${applyMediaQuery("mobile")} {
    width: 32.8rem;
    margin: 3.2rem auto 5rem;
    line-height: 2.8rem;
    & > p {
      font-size: 2rem;
    }
  }
`;

export const SkillWrapper = styled.div`
  width: 77.4rem;
  margin: 6rem auto 0 6.4rem;
  & > p {
    font-family: "Pretendard-Bold";
    font-size: 2.4rem;
    color: ${colors.subBlack};
    margin-bottom: 2rem;
  }
  & > p > span {
    color: ${colors.subOrange};
  }
  ${applyMediaQuery("mobile")} {
    width: 32.8rem;
    margin: 3.2rem auto 5rem;
    line-height: 2.8rem;
    & > p {
      font-size: 2rem;
    }
  }
`;

export const NextButtonWrapper = styled.div`
  display: flex;
  position: relative;
`;

export const NextButton = styled.button<{ selectedPrice: string }>`
  margin-left: auto;
  margin-top: 2.4rem;
  margin-bottom: 5.8rem;
  width: 22.4rem;
  height: 6rem;
  background: ${({ selectedPrice }) =>
    selectedPrice.length > 0 ? `${colors.mainBlue}` : `${colors.gray2}`};
  font-size: 2.4rem;
  font-family: "Pretendard-Bold";
  border-radius: 4.8rem;
  padding-right: 1.7rem;
  color: ${({ selectedPrice }) => (selectedPrice.length > 0 ? "white" : `${colors.gray4}`)};
  :hover {
    cursor: pointer;
  }
  ${applyMediaQuery("mobile")} {
    margin-top: 4rem;
    width: 9.8rem;
    height: 5.2rem;
    font-size: 1.6rem;
    margin-right: 2.4rem;
  }
  :focus-visible {
    outline: 3px solid #aaa;
  }
`;

export const NextArrowWrapper = styled.div`
  position: absolute;
  top: 4.5rem;
  right: 6.5rem;
  margin-right: 0.9rem;
  ${applyMediaQuery("mobile")} {
    top: 5.9rem;
    right: 1rem;
    margin-right: 3.5rem;
  }
`;
