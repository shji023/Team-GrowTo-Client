import React from "react";
import { useRecoilValue } from "recoil";
import { currentCategoryState, lectureCategoryState } from "store/state";
import { LectureCategoryData } from "types/info.type";

import { Category, StyledRoot } from "./style";

interface Props {
  onCategoryClick: (id: number | null) => void;
}

function CategoryList({ onCategoryClick }: Props) {
  const categoryList = useRecoilValue(lectureCategoryState);
  const currentCategory = useRecoilValue(currentCategoryState);

  console.log(currentCategory);

  return (
    <StyledRoot>
      {categoryList?.map((category: LectureCategoryData) => (
        <Category
          key={category.id}
          isSelected={currentCategory?.id === category.id}
          onClick={() => onCategoryClick(category.id)}
        >
          {category.categoryName}
        </Category>
      ))}
    </StyledRoot>
  );
}

export default CategoryList;
