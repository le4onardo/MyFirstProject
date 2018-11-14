import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom'
import SelectBar from './SelectBar';
import ListAllPosts from './ListAllPosts';
import Post from './Post';
import ListUsers from './ListUsers';
import User from  './User';

class App extends Component {
  render() {
    return (
          <BrowserRouter>
            <div>
              <SelectBar/>
              <Route exact path='/' />
              <Route exact path='/posts' component={ListAllPosts}/>
              <Route path='/posts/:post_id' component={Post}/>
              <Route exact path='/users' component={ListUsers}/>
              <Route path='/users/:user_id' component={User}/>
              <Route path='/comments' />
              <Route path='/albums' />
              <Route path='/photos' />
              <Route path='/todos' />
            </div>
          </BrowserRouter>
    );
  }
}

export default App;
