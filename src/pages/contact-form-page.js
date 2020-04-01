import React, { Component }  from 'react';
import ContactForm from "../components/contact-form";
import { NavLink, Redirect } from "react-router-dom";
import { SubmissionError } from "redux-form";
import { connect } from 'react-redux';

import { saveContact, newContact, fetchContact, updateContact } from "../actions";


class ContactFormPage extends Component{

    state = { redirect : false };


  componentDidMount() {
      let id = this.props.match.params.id;
      if (id){
          this.props.fetchContact(id);
      }else{
          this.props.newContact();
      }
  }

    submit = contact => {
        let id = this.props.match.params.id;
        if(id){
            return this.props.updateContact(contact).then(response => {
                this.setState({redirect : true});
            }).catch(error => {
                throw new SubmissionError(this.props.errors);
            })
        }else {
            return this.props.saveContact(contact).then(response => {
                this.setState({redirect: true});
            }).catch(error => {
                throw new SubmissionError(this.props.errors);
            })
        }
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
                    { this.state.redirect ? <Redirect to="/" /> : <ContactForm contact={this.props.contact} loading={this.props.loading} onSubmit={this.submit} /> }
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
    //console.log(`state : ${JSON.stringify(state)}`);
    return {
        contact : state.contactStore.contact,
        errors: state.contactStore.errors,
        loading : state.contactStore.loading
    }
}

export default connect(mapStateToProps, {
    saveContact,
    newContact,
    fetchContact,
    updateContact})(ContactFormPage);
