import React from 'react';
import { Card } from "semantic-ui-react";
import { Link } from 'react-router-dom';

export const ContactCard = (props) => {
    const {first, last} = props.contact.name;
    return(
        <Card>
            <Card.Content>
                <Card.Header>{first} {last}</Card.Header>
                <Card.Meta>{props.contact.phone}</Card.Meta>
                <Card.Description>
                    {props.contact.email}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <div className={'ui two buttons'}>
                    <Link to={`/contacts/edit/${props.contact._id}`} className={"ui basic button green"}>
                        Edit Contact
                    </Link>
                    <Link to={`/contacts/delete/${props.contact._id}`} className={"ui basic button red"}>
                        Delete Contact
                    </Link>
                 </div>
            </Card.Content>
        </Card>
         );
}


