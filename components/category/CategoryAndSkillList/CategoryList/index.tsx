import React from "react";
import { useRecoilValue } from "recoil";
import { currentCategoryState, lectureCategoryState } from "store/state";
import { LectureCategoryData } from "types/info.type";

import { Category, CategoryWrapper, StyledRoot } from "./style";

interface Props {
  onCategoryClick: (id: number | null) => void;
}

function CategoryList({ onCategoryClick }: Props) {
  const categoryList = useRecoilValue(lectureCategoryState);
  const currentCategory = useRecoilValue(currentCategoryState);

  return (
    <StyledRoot>
      <CategoryWrapper>
        {categoryList?.map((category: LectureCategoryData) => (
          <Category
            key={category.id}
            isSelected={currentCategory?.id === category.id}
            onClick={() => onCategoryClick(category.id)}
          >
            <span>{category.categoryName}</span>
          </Category>
        ))}
      </CategoryWrapper>
    </StyledRoot>
  );
}

export default CategoryList;
