import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, Form } from "semantic-ui-react";

import renderField from "./render-field";

class ContactForm extends Component {

render(){
    const { handleSubmit, pristine, reset, submitting } = this.props;

        return(
            <div className="ui two column centered grid">
                <div className="column">
                    <Form onSubmit={handleSubmit} >
                        <Form.Group widths='equal'>
                          <Field
                             name="name.first"
                             type="text"
                             component={renderField}
                             label="First name"
                          />
                          <Field
                              name="name.last"
                              type="text"
                              component={renderField}
                              label="Last name"
                          />
                        </Form.Group>
                          <Field name="email" type="email" component={renderField} label="Email" />
                          <Field name="phone" type="text" component={renderField} label="Phone" />
                        <div>
                            <Button type="submit" disabled={submitting}>
                                Submit
                            </Button>
                            <Button type="button" disabled={pristine || submitting} onClick={reset}>
                                Reset
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>

        );
   }
}

ContactForm = reduxForm({ form : 'contact' })(ContactForm);

export default ContactForm;
