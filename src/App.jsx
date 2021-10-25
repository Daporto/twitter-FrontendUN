import { AuthContext } from './context/AuthContext';
import { useContext } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import routes from './lib/routes';

const App = () => {
  const { restricted, unrestricted } = routes;
  const {isLogIn, user} =useContext(AuthContext);
  const Auth = isLogIn();
  console.log("estee",Auth);
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
            .concat(
              unrestricted.map(({ path }, index) =>
              <Route key={"unrestricted-"+index} exact path={path}>
                <Redirect to="/" />
              </Route>
              )
            ) 
            :
            unrestricted.map(({ path, component },index) =>           
            <Route key={"unrestricted-"+index} exact path={path} component={component} />)
            .concat(
              restricted.map(({ path }, index) =>
              <Route key={"restricted-"+index} exact path={path}>
                <Redirect to="/login" />
              </Route>
              )
            )        
          }
        </Switch>
      </BrowserRouter>
    </main>
  );
};

export default App;