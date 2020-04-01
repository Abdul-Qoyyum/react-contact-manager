import React, { Component } from 'react';
import { Route, Switch } from  'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import ContactListPage from "./pages/contact-list-page";
import ContactFormPage from "./pages/contact-form-page";

class App extends Component{
render(){
  return(
          <Switch>
          <Route path="/contact/new" component={ContactFormPage} />
          <Route path="/contacts/edit/:id" component={ContactFormPage} />
          <Route path="/" component={ContactListPage} />
          </Switch>
   );
 }

}

export default App;
