import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import PostsList from "./containers/posts-list";
import PostDetail from './containers/post-detail.jsx';
import PostAdd from './containers/post-add.jsx';
import PostEdit from './containers/post-edit.jsx';
import './App.css'

export default function App() {
  return (
    <Router>
      <div className='container pt-5'>
        <div />
        <div className='row'>
          <Switch>
            <Route exact path='/' component={PostsList} />
            <Route exact path='/posts' component={PostsList} />
            <Route path='/post/add' component={PostAdd} />
            <Route path='/post/edit/:id' component={PostEdit} />
            <Route path='/post/:id' component={PostDetail} />

            {/* <PrivateRoute path='/pokemons/add' component={PokemonAdd} />
            <PrivateRoute path='/pokemons/edit/:id' component={PokemonEdit} />
            <PrivateRoute path='/posts/:id' component={PokemonDetail} /> 
            <Route component={PageNotFound} />*/}
          </Switch>
        </div>
      </div>
    </Router>
  );
}
