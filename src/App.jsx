import { AuthContext } from './context/AuthContext';
import { useContext } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routes from './lib/routes';

const App = () => {
  const { restricted, unrestricted } = routes;
  const {isLogIn, user} =useContext(AuthContext);
  const Auth = isLogIn();
  return (
    <main>
      <BrowserRouter>
        {Auth && user
        /* <p>Welcome {user?.name}</p>*/}
        <Switch>
          {
            Auth?
            
            restricted.map(({ path, component }, index) =>
            <Route key={"restricted-"+index} exact path={path} component={component} />)
            :
            
            unrestricted.map(({ path, component },index) =>
            <Route key={"unrestricted-"+index} exact path={path} component={component} />)        
          }
        </Switch>
      </BrowserRouter>
    </main>
  );
};

export default App;