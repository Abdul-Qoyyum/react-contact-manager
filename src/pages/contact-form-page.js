import React, { Component }  from 'react';
import ContactForm from "../components/contact-form";
import { NavLink, Redirect } from "react-router-dom";
import { SubmissionError } from "redux-form";
import { connect } from 'react-redux';

import { saveContact,newContact } from "../actions";


class ContactFormPage extends Component{

    state = { redirect : false };


  componentDidMount() {
      this.props.newContact();
  }

    submit = contact => {
      console.log(contact);
   return this.props.saveContact(contact).then(response => {
       console.log("successfull");
       console.log(response);
       this.setState({redirect : true });
   }).catch(error => {
       console.log("Failed");
       console.log(error);
       console.log(this.props.errors);
       throw new SubmissionError(this.props.errors);
   })

  }


  render(){
   return(
       <div>
           <div className="ui two item menu">
               <NavLink exact to="/contact/new" className="active item">Add Contact</NavLink>
               <NavLink exact to="/" className="item">List Contacts</NavLink>
           </div>

           <div className="ui middle aligned grid" style={formStyle}>
            <div className="row">
                <div className="column">
                    { this.state.redirect ? <Redirect to="/" /> : <ContactForm contact={this.props.contact} onSubmit={this.submit.bind(this)} /> }
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

function mapStateToProps(state){
    return {
        contact : state.contactStore.contacts,
        errors: state.contactStore.errors
    }
}

export default connect(mapStateToProps, { saveContact, newContact })(ContactFormPage);
