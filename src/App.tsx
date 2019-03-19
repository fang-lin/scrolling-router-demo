import React, { Component } from 'react';
import { createBrowserHistory } from 'history';
import { Router, Switch, Route } from 'react-router-dom';
import { WithWindowResizeProps } from "./high-order/withWindowResize";
import { GlobalStyle, } from './transitions';
import routes from "./routes";
import { LargeScreenMain } from './pages';
import Transitions from './transitions';
import styled from 'styled-components';
const browserHistory = createBrowserHistory();

type AppProps = WithWindowResizeProps;
interface AppState {
  isIn: boolean;
  list: number[];
}

const Perspective = styled.div`
  height: 100vh;
  width: 100%;
  overflow: hidden;
  perspective: 100px;
`;

class App extends Component<AppProps, AppState>{
  render() {
    const { isLargeScreen } = this.props;
    return (
      <div>
        <GlobalStyle {...{ isLargeScreen }} />
        <Router history={browserHistory}>
          {
            isLargeScreen ?
              <Switch>
                <Route component={LargeScreenMain} />
              </Switch> :
              <Route render={({ location }) => (
                <Perspective>
                  <Transitions pageKey={location.key} {...location.state}>
                    <Switch location={location}>
                      {
                        routes.map(({ path, component }) =>
                          <Route exact key={path} path={path} component={component} />
                        )
                      }
                    </Switch>
                  </Transitions>
                </Perspective>
              )} />
          }
        </Router >
      </div>
    );
  }
}

export default App;