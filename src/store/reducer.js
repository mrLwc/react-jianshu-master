// import { combineReducers } from "redux"; // 生成的合并store不是immutable类型的
import { combineReducers } from "redux-immutable"; // 修改后的生成immutable类型的store，
import { reducer as headerReducer } from "../components/Header/store";
export default combineReducers({
  header: headerReducer
});
