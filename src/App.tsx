import React, { createElement } from 'react';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router';
import { WithWindowResizeProps } from "./high-order/withWindowResize";
import routes from "./routes";
import { LargeScreenMain, SmallScreenMain } from './pages';

const browserHistory = createBrowserHistory();

type AppProps = WithWindowResizeProps;

const App = (props: AppProps) => {
  const { isLargeScreen } = props;

  return (
    <Router history={browserHistory}>
      {
        isLargeScreen ?
          <Switch>
            {
              routes.map(({ path, component }) =>
                <Route key={path} path={path} component={(routeProps: any) => createElement(component.large, { ...routeProps }, null)} />
              )
            }
            <Route path="/" component={(routeProps: any) => <LargeScreenMain {...routeProps} />} />
          </Switch> :
          <Switch>
            {
              routes.map(({ path, component }) =>
                <Route key={path} path={path} component={component.small} />
              )
            }
            <Route path="/" component={SmallScreenMain} />
          </Switch>
      }
    </Router >
  );
}

export default App;