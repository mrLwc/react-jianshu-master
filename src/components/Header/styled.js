import styled from "styled-components";
import logoImg from "../../static/logo.png";

export const HeaderWrapper = styled.div`
  position: relative;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a.attrs({
  href: "/"
})`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  height: 56px;
  background: url(${logoImg});
  background-repeat: no-repeat;
  background-size: contain;
`;

export const Nav = styled.div`
  width: 960px;
  height: 100%;
  margin: 0 auto;
  padding-right: 50px;
  box-sizing: border-box;
`;

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  cursor: pointer;
  &.left {
    float: left;
  }
  &.right {
    float: right;
  }
  &.active {
    color: #ea6f5a;
  }
`;
export const SearchWrapper = styled.div`
  position: relative;
  float: left;
  .iconfont {
    position: absolute;
    right: 5px;
    bottom: 4px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    /* background:blue; */
    text-align: center;
    line-height: 30px;
  }
`;
export const NavSearch = styled.input.attrs({
  placeholder: "搜索"
})`
  width: 160px;
  height: 38px;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  margin-top: 9px;
  margin-left: 20px;
  padding: 0 32px 0 20px;
  box-sizing: border-box;
  font-size: 14px;
  color: #666;
  /* transition: all .2s ease-out; */
  /* 同样可实现动画 */
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 250px;
    /* transform:translateX(250px) */
    + .iconfont {
      background-color: #666;
    }
  }
  &.slide-enter {
    transition: all 0.2s ease-out;
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit {
    transition: all 0.2s ease-out;
  }
  &.slide-exit-active {
  }
`;

export const SearchInfo = styled.div`
  position: absolute;
  left: 0;
  top: 56px;
  background: pink;
  width: 240px;
  min-height: 50px;
  padding: 0 20px;
`;

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`;

export const Button = styled.div`
  float: right;
  line-height: 38px;
  border-radius: 19px;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 20px;
  border: 1px solid #ec6149;
  font-size: 14px;
  &.writting {
    color: #fff;
    background: #ec6149;
  }
  &.register {
    color: #ec6149;
  }
`;
