import React, { useState } from "react";

import { InputWrapper, LectureTypeBox } from "./style";

interface TypeFilledProps {
  setTypeFilled: React.Dispatch<React.SetStateAction<boolean>>;
  setLecture: (lecture: string) => void;
  lecture: string;
}

export default function LectureType({ setTypeFilled, setLecture, lecture }: TypeFilledProps) {
  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTypeFilled(true);
    setLecture(e.target.value);
  };

  return (
    <>
      <LectureTypeBox>
        <p>강의 종류*</p>
        <InputWrapper>
          <input
            type="text"
            placeholder="강의 종류를 입력해주세요 (파이썬, 피그마, 블록체인 등)"
            onChange={handleInputValue}
            value={lecture}
            required
          />
        </InputWrapper>
      </LectureTypeBox>
    </>
  );
}