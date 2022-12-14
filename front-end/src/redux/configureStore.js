import {createStore} from 'redux';
import authReducer from './authReducer';

const loggedInState= {
    isLoggedIn: true,
    username: "",
    password:""
  };
  
  const configureStore = () => {
    return createStore(authReducer, loggedInState,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  }


  export default configureStore;
