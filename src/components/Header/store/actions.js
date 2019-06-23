import { SEARCH_FOCUS_BLUR } from "./type";

export const searchAction = data => {
  return {
    type: SEARCH_FOCUS_BLUR,
    data
  };
};
