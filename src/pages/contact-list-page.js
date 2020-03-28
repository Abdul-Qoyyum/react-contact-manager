import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Card } from "semantic-ui-react";

import { contactListAction } from "../actions";
import contactCard from "../components/contact-card";
//remove this later, just for testing...
import { contacts } from '../contact-data';

class ContactListPage extends Component {

    componentDidMount() {
       this.props.contactListAction(contacts);
    }

    render(){
      return(
          <Container>
              <Card.Group>
                  {this.props.contacts.map(contact => <contactCard  key={contact._id}  contact={contact} />)}
              </Card.Group>
          </Container>
      );
  }
}

function mapStateToProps(state){
    return {
        contacts : state.contactStore
    }
}

export default connect(mapStateToProps, { contactListAction })(ContactListPage);
