import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About, Web, Apparel, Myung1, Myung2, Four, Contact } from './containers';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/web" component={Web} />
    <Route path="/apparel" component={Apparel} />
    <Route path="/myung1" component={Myung1} />
    <Route path="/myung2" component={Myung2} />
    <Route path="/four" component={Four} />
    <Route path="/contact" component={Contact} />

  </Switch>
);

export default Routes;
