export const validate = values => {
    const errors = {name : {}}
    if (!values.name || !values.name.first) {
        errors.name.first = {
         message : 'Please enter first name'
        }
    }
    if(!values.phone){
        errors.phone = {
         message :  "Please enter phone number"
        }
    }else if (!/\d{3}-\d{3}-\d{4}/.test(values.phone)){
        errors.phone = {
        message :  "Phone number must be in international format"
        }
    }
    if (!values.email) {
        errors.email = {
         message : 'Please enter email'
        }
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = {
         message :  'Email address is invalid'
        }
    }

    return errors
}

export const warn = values => {
    const warnings = {}
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        warnings.email = 'Invalid email address'
    }
    return warnings
}


