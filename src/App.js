import React, { Component } from 'react';
import { Route, Link } from  'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import ContactListPage from "./pages/contact-list-page";
import ContactFormPage from "./pages/contact-form-page";

class App extends Component{
render(){
  return(
   <div>
     <div className="ui two item menu">
          <Link exact to="/addcontact" className="active item">Add Contact</Link>
          <Link exact to="/" className="item">List Contacts</Link>
       </div>
      <div>
          <Route path="/" component={ContactListPage} />
          <Route path="/addcontact" component={ContactFormPage} />
      </div>
   </div>
   );
 }

}

export default App;
