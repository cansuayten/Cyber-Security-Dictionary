import React from 'react';
import './App.css';
import ListingWords from './components/ListingWords';
import WordsPage from './components/WordsPage';
import AddWord from './components/AddWord';
import UpdateWord from './components/UpdateWord';
import Homepage from './components/HomePage';
import Login from './components/Login';
import ListForUser from './components/ListForUser';
import SearchWord from './components/SearchWord';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
//import {Authentication} from '../components/AuthenticationContext';

const App = () => {
  const { isLoggedIn } = useSelector(store => ({
    isLoggedIn: store.isLoggedIn
  }));

    return(
      <div>
        <Router>
            <ToastContainer />
            <div className="App">
        <Switch>
            <Route exact path="/" component={Homepage}/>
            <Route exact path ="/wordsPage" component={WordsPage} />
            <Route exact path="/wordsPage/addWord" component={AddWord} />
            <Route exact path="/wordsPage/listWords" component={ListingWords} />
            <Route exact path="/wordsPage/updateWord/:id" component={UpdateWord} />
           <Route exact path="/login" component={Login} />
            <Route exact path="/listWords" component={ListForUser} />
            <Route exact path="/search" component={SearchWord} />

        </Switch>
    </div>
</Router>
    </div>
    );
};



export default (App);
