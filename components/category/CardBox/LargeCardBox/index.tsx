import Link from "next/link";
import {
  BookmarkIcon,
  CalendarIcon,
  LikeIcon,
  MoveToIcon,
  TimeIcon,
  VideoIcon,
} from "public/assets/icons";
import React from "react";
import { LectureDataType } from "types/info.type";

import {
  CardBottom,
  CardTop,
  LectureInfo,
  LectureInfoBox,
  LectureTitleName,
  Price,
  PriceUnit,
  Site,
  StyledRoot,
  Tag,
  TagWrapper,
} from "./style";

interface Props {
  lecture: LectureDataType;
}

function LargeCardBox({ lecture }: Props) {
  const { LectureTitle, time, price, duration, startYear, tags, url, site } = lecture;

  //todo(1) : 제목 고정영역 벗어나면 ...처리 (4줄이상 제목)
  //todo(2) : 가격 단위 반점 찍기
  //todo(3) : 태그 종류별로 4가지 색 분류

  //총 소요시간 -1 : 미표기
  // 개설연도 -1 : 미표기
  // 반복시청 가능 기간 : 100,000,000 : 무제한
  // 가격단위 : 만원으로 변환 ex 19000원 => 1.9만원
  return (
    <StyledRoot>
      <CardTop>
        <LikeIcon />
        <BookmarkIcon />
      </CardTop>
      <Link href={url} passHref>
        <LectureTitleName href={url} target="_blank" rel="noreferrer">
          {LectureTitle}
        </LectureTitleName>
      </Link>
      <LectureInfoBox>
        <div>
          <VideoIcon />
          <LectureInfo>
            {duration === 100000000 ? "무제한 반복 시청 가능" : `${duration}일 시청 가능`}
          </LectureInfo>
        </div>
        <div>
          <TimeIcon />
          <LectureInfo>{time === -1 ? "미표기" : `총 ${time}시간`}</LectureInfo>
        </div>
        <div>
          <CalendarIcon />
          <LectureInfo>{startYear === -1 ? "미표기" : startYear}년 개설</LectureInfo>
        </div>
      </LectureInfoBox>
      <TagWrapper>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </TagWrapper>
      <Link href={url} passHref>
        <a href={url} target="_blank" rel="noreferrer">
          <CardBottom>
            <Site>{site}</Site>
            <div>
              <Price>{price}</Price>
              <PriceUnit>원</PriceUnit>
              <MoveToIcon />
            </div>
          </CardBottom>
        </a>
      </Link>
    </StyledRoot>
  );
}

export default LargeCardBox;
