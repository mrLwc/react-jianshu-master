import { fromJS } from "immutable"; //加入immutable后数据不可变,取store中的数据，需要在用的地方使用get(),设置的时候使用set()
import { SEARCH_FOCUS_BLUR } from "./type";
const defaultReducer = fromJS({
  focused: false //
});

export default (state = defaultReducer, action) => {
  if (action.type === SEARCH_FOCUS_BLUR) {
    return state.set("focused", action.data);
  }
  return state;
};
