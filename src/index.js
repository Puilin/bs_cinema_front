import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Frame from './components/frame';
import NoticeInfo from './components/index_/noticeinfo';
import reportWebVitals from './reportWebVitals';
import Movie_slider from './components/index_/Slider_movieitem';
//import {  BrowserRouter } from 'react-router-dom';
import App from './App';
import Store from './components/Store';



ReactDOM.render(
  <React.StrictMode>
  <Frame></Frame>
  </React.StrictMode>,
  document.getElementById('frame')
);

ReactDOM.render(
  <React.StrictMode>
  <Store></Store>
  </React.StrictMode>,
  document.getElementById('store')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
