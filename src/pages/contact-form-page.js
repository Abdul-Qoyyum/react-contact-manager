import React, { Component }  from 'react';
import ContactForm from "../components/contact-form";
import { NavLink, Redirect } from "react-router-dom";
import { SubmissionError } from "redux-form";
import { connect } from 'react-redux';

import { saveContact } from "../actions";

class ContactFormPage extends Component{
  constructor(props){
      super(props);
      this.state = { redirect : false };
  }

  submit = values => {
   this.props.saveContact(values).then(response => {
       this.setState({redirect : true });
   }).catch(error => {
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
                    { this.state.redirect ? <Redirect to="/" /> : <ContactForm onSubmit={this.submit.bind(this)} /> }
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
        errors: state.contactStore.errors
    }
}

export default connect(mapStateToProps, { saveContact })(ContactFormPage);
