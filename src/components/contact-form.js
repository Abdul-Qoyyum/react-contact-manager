import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, Form } from "semantic-ui-react";

class ContactForm extends Component {

render(){

     const { handleSubmit } = this.props;

        return(
            <div className="ui two column centered grid">
                <div className="column">
                    <Form onSubmit={handleSubmit} >
                        <Form.Field>
                            <label>First Name</label>
                            <Field name="name.first" type="text" component="input" placeholder='First Name' />
                        </Form.Field>
                        <Form.Field>
                            <label>Last Name</label>
                            <Field name="name.last" type="text" component="input" placeholder='Last Name' />
                        </Form.Field>
                            <Form.Field>
                                <label>Email</label>
                                <Field name="email" type="email" component="input" placeholder='email' />
                            </Form.Field>
                            <Form.Field>
                                <label>Phone</label>
                                <Field name="phone" type="text" component="input" placeholder='Last Name' />
                            </Form.Field>
                            <Button type="submit">Submit</Button>
                    </Form>
                </div>
            </div>

        );
   }
}

ContactForm = reduxForm({ form : 'contact' })(ContactForm);

export default ContactForm;
