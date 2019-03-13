import React from 'react';
import { createBrowserHistory } from 'history';
import { Router, Route } from 'react-router';
import { Main, HowSecure, Feedback, MyFinances, MyHomeLoan, MyPreferences, ReaHomeLoan } from "./pages";
import { WithWindowResizeProps } from "./high-order/withWindowResize";
import Header from "./components/Header";

const browserHistory = createBrowserHistory();

type AppProps = WithWindowResizeProps;

const App = (props: AppProps) => {
  return (
    <Router history={browserHistory}>
      <div>
        <Header />
        <Route exact path="/" component={() => <Main {...props} />} />
        <Route path="/how-secure" component={() => <HowSecure {...props} />} />
        <Route path="/feedback" component={() => <Feedback {...props} />} />
        <Route path="/my-finances" component={() => <MyFinances {...props} />} />
        <Route path="/my-home-loan" component={() => <MyHomeLoan {...props} />} />
        <Route path="/my-preferences" component={() => <MyPreferences {...props} />} />
        <Route path="/rea-home-loan" component={() => <ReaHomeLoan {...props} />} />
      </div>
    </Router >
  );
}

export default App;