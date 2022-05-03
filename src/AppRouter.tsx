import FrontPage from 'component/FrontPage';
import UnityLayer from 'component/UnityLayer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <FrontPage />
        </Route>
        <Route path="/unity" exact>
          <UnityLayer />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;
