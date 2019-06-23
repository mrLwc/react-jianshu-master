import React from "react";
import ReactDOM from "react-dom";

import Header from "./components/Header";
import { Globalstyle } from "./style.js";
import { GlobalIcons } from "./static/iconfont/iconfont.js";
import store from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      <GlobalIcons />
      <Globalstyle />
      <Provider store={store}>
        <Header />
      </Provider>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
