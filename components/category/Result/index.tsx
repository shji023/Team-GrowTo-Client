import React from "react";
import { useRecoilValue } from "recoil";
import { currentSkillState, lectureDataList } from "store/state";

import CardListContainer from "../CardListContainer";
import SortingBox from "../SortingBox";
import {
  MessageWrapper,
  NoResultMessage,
  ResultBlueMessage,
  ResultBox,
  ResultMessage,
} from "./style";
function Result() {
  //todo(1):skill선택 후 response 받아서 강의 몇개인지 표시
  //todo(2):sorting버튼에 따라 결과 정렬 : 중복안됨O
  //sortingBox에 여러 개의 sortingBtnO
  //todo(3):ㄱㄴㄷ순으로정렬 : 서버에서 정렬해줌
  //cardListContainer에 여러개의 CardBox O

  //API
  //categoryId, skillId 받아와서 api요청하기
  const LectureDataList = useRecoilValue(lectureDataList);
  const skill = useRecoilValue(currentSkillState);

  return (
    <ResultBox>
      <MessageWrapper>
        {skill?.skillName ? (
          <>
            <ResultBlueMessage>총 {LectureDataList?.length}개의 </ResultBlueMessage>
            <ResultBlueMessage>{skill?.skillName}</ResultBlueMessage>
            <ResultMessage> 강의 모두 보기</ResultMessage>
          </>
        ) : (
          <NoResultMessage>↑에서 ‘강의 세부 분야’ 먼저 선택해주세요</NoResultMessage>
        )}
      </MessageWrapper>
      <SortingBox />
      <CardListContainer />
    </ResultBox>
  );
}

export default Result;
