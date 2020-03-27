import React, { Component } from 'react';
import { Container, Card } from "semantic-ui-react";
import contactCard from "../components/contact-card";

class ContactListPage extends Component {
  render(){
      return(
          <Container>
              <Card.Group>
                  <contactCard />
              </Card.Group>
          </Container>
      );
  }
}

export default ContactListPage;
