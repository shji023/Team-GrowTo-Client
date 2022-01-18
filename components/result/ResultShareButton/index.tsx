import Modal from "components/common/Modal";
import { useRouter } from "next/router";
import { ResultShareIcon } from "public/assets/icons";
import React, { useState } from "react";

import { ShareButton, StyledRoot } from "./style";

const ResultShareButton = function () {
  const router = useRouter();
  const [flagModal, setFlagModal] = useState(false);

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(router.pathname);
      setFlagModal(true);
    } catch {
      throw new Error("복사 실패!");
    }
  };

  return (
    <StyledRoot>
      <ShareButton onClick={handleClick}>
        <ResultShareIcon />
        <span>공유하기</span>
      </ShareButton>
      <Modal
        isModalOpen={flagModal}
        setIsModalOpen={setFlagModal}
        mainText="강의 비교 결과 페이지 URL이 복사 되었어요"
        subText="모두에게 강의 비교 결과를 알려주세요."
      />
    </StyledRoot>
  );
};

export default ResultShareButton;
