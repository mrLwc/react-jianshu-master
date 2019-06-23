import React from "react";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import { actions } from "./store";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  Addition,
  Button,
  SearchWrapper,
  NavSearch
} from "./styled";

const Header = props => {
  return (
    <HeaderWrapper>
      <Logo />
      <Nav>
        <NavItem className="left active">首页</NavItem>
        <NavItem className="left">下载App</NavItem>
        <NavItem className="right">登录</NavItem>
        <NavItem className="right">
          <i className="icon iconfont">&#xe600;</i>
        </NavItem>
        <SearchWrapper>
          <CSSTransition in={props.focused} timeout={200} classNames="slide">
            <NavSearch
              className={props.focused ? "focused" : ""}
              onFocus={props.handleSearchFocus}
              onBlur={props.handleSearchBlur}
            />
          </CSSTransition>
          <i className="icon iconfont">&#xe63d;</i>
        </SearchWrapper>
      </Nav>
      <Addition className="">
        <Button className="writting">
          <i className="icon iconfont">&#xe616;</i>
          写文章
        </Button>
        <Button className="register">注册</Button>
      </Addition>
    </HeaderWrapper>
  );
};

const mapStateToProps = state => {
  return {
    // 这里使用redux-immutable将state变为immutable类型，使用state.get()来获取数据
    focused: state.get("header").get("focused")
    //等价  state.getIn(['header',['focused']])
  };
};
const mapDispathToProps = dispatch => {
  return {
    handleSearchFocus() {
      const action = actions.searchAction(true);
      dispatch(action);
    },
    handleSearchBlur() {
      const action = actions.searchAction(false);
      dispatch(action);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(Header);
