import React from 'react';
import { Col, ControlLabel, FormControl, FormGroup } from 'react-bootstrap';

const FieldInput = props => {
    const { input, type, placeholder, meta: { touched, error } } = props;
    return(
        <div>
            <FormControl
                type={type}
                placeholder={placeholder}
                {...input}
            />
        </div>
    )
};

export default FieldInput;