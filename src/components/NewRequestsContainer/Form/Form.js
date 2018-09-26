import { Button, Col, ControlLabel, FormControl, FormGroup, Glyphicon, InputGroup, Form } from "react-bootstrap";
import { Field, Fields, reduxForm } from 'redux-form';
import React from "react";
import FieldInput from './FieldInput';
import validate from './ValidationForm';
import PriceFieldInput from './Input/PriceFieldInput';
import PassengersFieldInput from './Input/PassengersFieldInput';
import DateRangeFieldInput from './Input/DateRangeFieldInput';

const NewRequestForm = props => {
    const { handleSubmit } = props;
    return(
        <Form horizontal onSubmit={handleSubmit}>
            {/*<FormGroup validationState="error">*/}
                {/*<Col componentClass={ControlLabel} sm={2}>*/}
                    {/*Price*/}
                {/*</Col>*/}
                {/*<Col sm={4}>*/}
                    {/*<InputGroup>*/}
                        {/*<InputGroup.Addon>$</InputGroup.Addon>*/}
                        {/*<Field*/}
                            {/*name="price_input"*/}
                            {/*type="number"*/}
                            {/*placeholder="Enter Price"*/}
                            {/*component={FieldInput}*/}
                        {/*/>*/}
                        {/*<InputGroup.Addon>.00</InputGroup.Addon>*/}
                    {/*</InputGroup>*/}
                {/*</Col>*/}
            {/*</FormGroup>*/}
            <Field
                name="price_input"
                type="number"
                placeholder="Enter Price"
                component={PriceFieldInput}
            />
            {/*<FormGroup>*/}
                {/*<Col componentClass={ControlLabel} sm={2}>*/}
                    {/*Passengers*/}
                {/*</Col>*/}
                {/*<Col sm={4}>*/}
                    {/*<Field*/}
                        {/*name="passengers_input"*/}
                        {/*type="number"*/}
                        {/*placeholder="Enter Passengers count"*/}
                        {/*component={FieldInput}*/}
                    {/*/>*/}
                {/*</Col>*/}
            {/*</FormGroup>*/}
            <Field
                name="passengers_input"
                type="number"
                placeholder="Enter Passengers count"
                component={PassengersFieldInput}
            />
            {/*<FormGroup controlId="daterange_input">*/}
                {/*<Col componentClass={ControlLabel} sm={2}>*/}
                    {/*From / Until*/}
                {/*</Col>*/}
                {/*<Col sm={4}>*/}
                    {/*<InputGroup>*/}
                        {/*<FormControl readOnly type="text" />*/}
                        {/*<Field name="daterange_start"  type="hidden" component="input" />*/}
                        {/*<Field name="daterange_end" type="hidden" component="input" />*/}
                        {/*<InputGroup.Addon>*/}
                            {/*<Glyphicon glyph="calendar" />*/}
                        {/*</InputGroup.Addon>*/}
                    {/*</InputGroup>*/}
                {/*</Col>*/}
            {/*</FormGroup>*/}
            <Fields
                names={[
                    'daterange_start',
                    'daterange_end'
                ]}
                component={DateRangeFieldInput}
            />
            <Button bsStyle="success" className="pull-right" bsSize="large" type="submit">Submit</Button>
        </Form>
    )
};

export default reduxForm({
    form: 'request',
    validate
})(NewRequestForm);