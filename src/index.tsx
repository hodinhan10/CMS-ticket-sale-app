import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './state';
import { BrowserRouter } from 'react-router-dom';
// import 'antd/dist/antd.css'
// import "antd/lib/select/style/index.css"
// import "ant-design/flowchart/dist/index.css";
import { ConfigProvider } from 'antd';

import vi_VN from 'antd/lib/locale/vi_VN';
import 'antd/dist/antd.min.css'
import './styles/index.css';
import './styles/antUpdate.css'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ConfigProvider locale={vi_VN}>
        <Provider store={store}>
          <App />
        </Provider>
      </ConfigProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
