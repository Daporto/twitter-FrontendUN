import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routes from './lib/routes';

const App = () => {
  const { restricted, unrestricted } = routes;
  return (
    <main>
      <BrowserRouter>
        <Switch>
          {
            unrestricted.map(({ path, component }) =>
              <Route exact path={path} component={component} />)
          }
        </Switch>
      </BrowserRouter>
    </main>
  );
};

export default App;