import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import PostsList from "./containers/posts-list";
import PostDetail from './containers/post-detail.jsx';
import PostAdd from './containers/post-add.jsx';
import PostEdit from './containers/post-edit.jsx';
import PageNotFound from './components/page-not-found';
import routes from './routes';
import './App.css'

export default function App() {
  return (
    <Router>
      <div className='container pt-5'>
        <div />
        <div className='row'>
          <Switch>
            <Route exact path={routes.home} component={PostsList} />
            <Route exact path={routes.posts} component={PostsList} />
            <Route path={routes.post.add} component={PostAdd} />
            <Route path={routes.post.edit} component={PostEdit} />
            <Route path={routes.post.show} component={PostDetail} />
            <Route component={PageNotFound} />

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
