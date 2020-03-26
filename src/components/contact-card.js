import React from 'react';
import { Link } from "react-router-dom";
import { Button, Card, Image } from "semantic-ui-react";

const contactCard = () => {
    return(
        <Card>
            <Card.Content>
                <Image
                    floated='right'
                    size='mini'
                    src='/images/avatar/large/steve.jpg'
                />
                <Card.Header>Steve Sanders</Card.Header>
                <Card.Meta>Friends of Elliot</Card.Meta>
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