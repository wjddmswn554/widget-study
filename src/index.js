import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js'; //실제로 정의된 사용자 정의 컴포넌트 내용이 들어있는 파일. ./App으로 확장명 생략 가능

ReactDOM.render( //react dom을 이용해서 원하는 component를 렌더링
  <React.StrictMode>
    <App /> 
  </React.StrictMode>, //App이라는 component를 불러옴
  document.getElementById('root') //public/index.html에 conponent를 보여줌
);
