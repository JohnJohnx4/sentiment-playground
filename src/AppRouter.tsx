import FrontPage from 'pages/FrontPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <FrontPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;
