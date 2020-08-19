import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';
import Home from './pages/Home';
import PostList from './pages/posts/PostList';
import PostItem from './pages/posts/PostItem';


import './scss/app.scss';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/posts" component={PostList} />
          <Route path='/posts/:id' component={PostItem} />
        </Switch>
      </App>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
