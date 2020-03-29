import React, { Component }  from 'react';
import ContactForm from "../components/contact-form";
import {Link} from "react-router-dom";

class ContactFormPage extends Component{
  submit = values => {
   console.log(values);
  }

  render(){
   return(
       <div>
           <div className="ui two item menu">
               <Link exact to="/addcontact" className="active item">Add Contact</Link>
               <Link exact to="/" className="item">List Contacts</Link>
           </div>

           <div className="ui middle aligned grid" style={formStyle}>
            <div className="row">
                <div className="column">
                    <ContactForm onSubmit={this.submit.bind(this)} />
                </div>
            </div>
        </div>
       </div>
   );
  }
}

const formStyle = {
     height : '90vh'
}

export default ContactFormPage;
