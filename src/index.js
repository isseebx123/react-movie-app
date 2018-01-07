import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
// 리액트돔은 하나의 컴포넌트를 렌더링하고 root에 모든 컴포넌트가 출력된다.
// 리액트돔은 리액트가 웹사이트에 나오도록 도와주는 것임
// 리액트는 UI 라이브러리임.
// 네이티브 앱을 만들고싶다면 readctNative
registerServiceWorker();
