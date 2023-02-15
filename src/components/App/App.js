import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "../../store/store";
import { Provider } from "react-redux";

import Header from "./Header/Header";
import AuthenticationWrapper from "../utility-components/AuthenticationWrapper/AuthenticationWrapper";
import Pages from "../Pages/Pages";

import "./App.css";

const App = () => {
  return (
    <Router>
      <Provider store={store}>
        <AuthenticationWrapper>
          <div className="App">
            <Header />
            <main aria-labelledby="pageTitle" className="Main">
              <Pages />
            </main>
          </div>
        </AuthenticationWrapper>
      </Provider>
    </Router>
  );
};

export default App;
