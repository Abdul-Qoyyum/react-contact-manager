import React from 'react';
import { Button, Card, Image } from "semantic-ui-react";

const ContactCard = (props) => {
    const {first, last} = props.contact.name;
    return(
        <Card>
            <Card.Content>
                <Image
                    floated='right'
                    size='mini'
                    src='/images/wireframe/square-image.png'
                />
                <Card.Header>{first} {last}</Card.Header>
                <Card.Meta>{props.contact.phone}</Card.Meta>
                <Card.Description>
                    {props.contact.email}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <div className='ui two buttons'>
                    <Button basic color='green'>
                        Edit Contact
                    </Button>
                    <Button basic color='red'>
                        Delete Contact
                    </Button>
                 </div>
            </Card.Content>
        </Card>
         );
}

export default ContactCard;
