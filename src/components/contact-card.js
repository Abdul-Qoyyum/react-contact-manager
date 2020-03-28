import React from 'react';
import { Button, Card, Image } from "semantic-ui-react";

const contactCard = (props) => {
    let {first, last} = props.contact.name;
    return(
        <Card>
            <Card.Content>
                <Image
                    floated='right'
                    size='mini'
                    src='/images/avatar/large/steve.jpg'
                />
                <Card.Header>First name</Card.Header>
                <Card.Meta>{first}</Card.Meta>
                <Card.Description>
                    Steve wants to add you to the group <strong>best friends</strong>
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

export default contactCard;
