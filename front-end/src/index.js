import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ThemeProvider } from '@material-ui/core/styles';
import './bootstrap-override.scss';
import theme from './theme'
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import configureStore from './redux/configureStore';



const store= configureStore();

ReactDOM.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
      <Provider store={store}>    
      <App />
    </Provider>
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
