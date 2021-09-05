import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Home from './components/Public/Home/Home';
import Login from './components/Public/Login/Login';
import SignUp from './components/Public/SignUp/SignUp';
import ForgetPw from './components/Public/ForgetPw/ForgetPw';
import reportWebVitals from './components/Public/ReportWebVitals/reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Login
       />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
