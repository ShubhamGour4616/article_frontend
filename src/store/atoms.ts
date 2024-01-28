import { ArticleType } from "@/types/articleTypes";
import { atom } from "recoil";

export const articleListState = atom<ArticleType[]>({
  key: "articleListState", // unique ID (with respect to other atoms/selectors)
  default: [],
  // default value (aka initial value)
});
