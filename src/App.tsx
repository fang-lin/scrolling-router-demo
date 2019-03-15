import React from 'react';
import { createHashHistory } from 'history';
import { Router, Route, Switch } from 'react-router';
import { WithWindowResizeProps } from "./high-order/withWindowResize";
import routes from "./routes";
import { LargeScreenMain } from './pages';

const browserHistory = createHashHistory();

type AppProps = WithWindowResizeProps;

const App = (props: AppProps) => {
  const { isLargeScreen } = props;

  return (
    <Router history={browserHistory}>
      {
        isLargeScreen ?
          <Switch>
            <Route component={LargeScreenMain} />
          </Switch> :
          <Switch>
            {
              routes.map(({ path, component }) =>
                <Route key={path} path={path} component={component} />
              )
            }
          </Switch>
      }
    </Router >
  );
}

export default App;