const validate = values => {
    const errors = {};
    if (!values.price_input) {
        errors.price_input = 'Required';
    }
    if (!values.passengers_input) {
        errors.passengers_input = 'Required';
    }
    return errors;
};

export default validate;