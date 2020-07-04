import React from 'react';

import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from './components/Login/index'
import Home from './components/Home/index'
import Cadastro from './components/Cadastrar/index'
import Favoritos from './components/Favoritos/index'
import Dashboard from './components/Dashboard/index'

export default  () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/Home" component={Home} />
      <Route exact path="/Login" component={Login} />
      <Route exact path="/Cadastro" component={Cadastro} />
      <Route exact path="/Dashboard" component={Dashboard} />
      <Route exact path="/Favoritos" component={Favoritos}/>
    </Switch>
  </BrowserRouter>
)
