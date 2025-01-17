export interface ResponseCategoryData {
  id: number | null;
  name: string | null;
}

export interface LectureCategoryData {
  id: number | null;
  categoryName: string | null;
}

export interface ResponseSkillData {
  id: number | null;
  name: string | null;
}

export interface LectureSkillData {
  id: number | null;
  skillName: string | null;
}
export interface SkillTagList {
  id: number;
  name: string;
}

export interface ResponseLectureDataType {
  id: number;
  name: string;
  time: number;
  price: number;
  reviewTime: string;
  duration: string;
  startYear: string;
  tags: string[];
  url: string;
}
export interface LectureDataType {
  id: number;
  LectureTitle: string;
  time: number;
  price: number;
  reviewTime: string;
  duration: number;
  startYear: number;
  tags: string[];
  url: string;
}

export interface LectureDataListType {
  // map: (lecture: LectureDataType) => JSX.Element[];
  data: LectureDataType[];
}
