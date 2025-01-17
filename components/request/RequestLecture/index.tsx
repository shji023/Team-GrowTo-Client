import { postLectureRequest } from "apis/lectures.api";
import Modal from "components/common/Modal";
import { UseRegex } from "hooks/UseRegex";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { lectureCategoryState } from "store/state";
import { LectureCategoryData } from "types/info.type";

import EmailInput from "./EmailInput";
import LectureCategoryInput from "./LectureCategoryInput";
import LectureTypeInput from "./LectureTypeInput";
import {
  ActiveRequestButton,
  DisabledRequestButton,
  Form,
  RequestCard,
  StyledRoot,
  Title,
  Wrapper,
} from "./style";

export interface IPostRequest {
  categoryId: number;
  skill: string;
  email: string;
}

export default function RequestLecture() {
  const [postData, setPostData] = useState<IPostRequest>({
    categoryId: 0,
    skill: "",
    email: "",
  });
  const [lecture, setLecture] = useState("");
  const [email, setEmail] = useState("");
  const [categorySelected, setCategorySelected] = useState("");
  const [typeFilled, setTypeFilled] = useState(false);
  const [emailFilled, setEmailFilled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const getData = useRecoilValue(lectureCategoryState);

  const isBlank = (): boolean => {
    if (categorySelected === "" || lecture === "" || email === "") return true;

    return false;
  };

  const checkEmail = () => {
    return UseRegex().checkEmail(email);
  };

  const postRequest = async () => {
    await postLectureRequest(postData);
  };

  const resetState = () => {
    setCategorySelected("");
    setLecture("");
    setEmail("");
  };

  const submitRequest = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (isBlank()) {
      e.preventDefault();

      return;
    }
    postRequest();
    resetState();
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  useEffect(() => {
    const temp = { ...postData };

    if (categorySelected) {
      getData?.map((data: LectureCategoryData) => {
        if (data.categoryName?.includes(categorySelected) === true) {
          if (data.id) {
            temp["categoryId"] = data.id;
          }
        }
      });
    }
    if (lecture) {
      temp["skill"] = lecture;
    }
    if (email === "" || checkEmail()) {
      temp["email"] = email;
    } else return;
    setPostData(temp);
  }, [lecture, email]);

  return (
    <StyledRoot>
      <Wrapper>
        <Title>
          <h2>강의 비교 요청</h2>
          <p>이런 강의도 비교해주세요!</p>
        </Title>
        <RequestCard>
          <Form>
            <LectureCategoryInput
              categorySelected={categorySelected}
              setCategorySelected={setCategorySelected}
            />
            <LectureTypeInput
              setTypeFilled={setTypeFilled}
              setLecture={setLecture}
              lecture={lecture}
            />
            <EmailInput setEmailFilled={setEmailFilled} setEmail={setEmail} email={email} />
            {categorySelected !== "" &&
            typeFilled === true &&
            emailFilled === true &&
            checkEmail() === true ? (
              <ActiveRequestButton type="button" onClick={submitRequest}>
                <p>강의비교 요청하기</p>
              </ActiveRequestButton>
            ) : (
              <DisabledRequestButton>
                <p>강의비교 요청하기</p>
              </DisabledRequestButton>
            )}
          </Form>
        </RequestCard>
        <Modal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          mainText="비교요청이 완료되었어요."
          subText="100명의 요청이 모이면 메일로 비교 정보를 보내드릴게요."
        />
      </Wrapper>
    </StyledRoot>
  );
}
