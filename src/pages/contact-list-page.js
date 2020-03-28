import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Card } from "semantic-ui-react";

import { fetchContacts } from "../actions";
import ContactCard from "../components/contact-card";
import {Link} from "react-router-dom";

class ContactListPage extends Component {

    componentDidMount() {
       this.props.fetchContacts();
    }

    render(){
      return(
     <div>
          <div className="ui two item menu">
              <Link exact to="/addcontact" className="item">Add Contact</Link>
              <Link exact to="/" className="active item">List Contacts</Link>
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
