import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Card } from "semantic-ui-react";

import { fetchContacts } from "../actions";
import ContactCard from "../components/contact-card";
import {NavLink} from "react-router-dom";

class ContactListPage extends Component {

    componentDidMount() {
       this.props.fetchContacts();
    }

    render(){
      return(
     <div>
          <div className="ui two item menu">
              <NavLink exact to="/contact/new" className="item">Add Contact</NavLink>
              <NavLink exact to="/" className="active item">List Contacts</NavLink>
          </div>

          <Container>
              <Card.Group>
                  {this.props.contacts.map(contact => <ContactCard  key={contact._id}  contact={contact} />)}
              </Card.Group>
          </Container>
     </div>
      );
  }
}


function mapStateToProps(state){
    return {
        contacts : state.contactStore.contacts
    }
}

export default connect(mapStateToProps, { fetchContacts })(ContactListPage);
