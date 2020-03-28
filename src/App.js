import React, { Component } from 'react';
import { Route, Link, Switch } from  'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import ContactListPage from "./pages/contact-list-page";
import ContactFormPage from "./pages/contact-form-page";

class App extends Component{
render(){
  return(
          <Switch>
          <Route path="/addcontact" component={ContactFormPage} />
          <Route path="/" component={ContactListPage} />
          </Switch>
   );
 }

}

export default App;
