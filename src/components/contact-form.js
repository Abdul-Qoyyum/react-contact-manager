import React, { Component } from 'react';
import { Button, Form } from "semantic-ui-react";

class ContactForm extends Component{

    render(){
        return(
            <div className="ui two column centered grid">
                <div className="column">
                    <Form>
                        <Form.Field>
                            <label>First Name</label>
                            <input placeholder='First Name' />
                        </Form.Field>
                        <Form.Field>
                            <label>Last Name</label>
                            <input placeholder='Last Name' />
                        </Form.Field>
                            <Form.Field>
                                <label>Email</label>
                                <input placeholder='email' />
                            </Form.Field>
                            <Form.Field>
                                <label>Phone</label>
                                <input placeholder='Last Name' />
                            </Form.Field>
                    </Form>
                </div>
            </div>

        );
    }
}

export default ContactForm;