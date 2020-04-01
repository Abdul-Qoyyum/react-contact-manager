import React from "react";
import classnames from 'classnames';
import { Form } from 'semantic-ui-react';

export const renderField = ({
                         input,
                         label,
                         type,
                         meta: { touched, error, warning }
                     }) => (
    <Form.Field className={classnames({error: touched && error})}>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type} />
            {touched &&
            ((error && <span>{error.message}</span>) ||
              (warning && <span>{warning}</span>))}
        </div>
    </Form.Field>
)


