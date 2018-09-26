import React from 'react';
import { connect } from 'react-redux';

import { Grid, PageHeader } from 'react-bootstrap';
import NewRequestForm from '../components/NewRequestsContainer/Form/Form';
import { change } from 'redux-form';


class NewRequestsContainer extends React.Component {

    handleSubmit(values) {
        console.log(values);
    }

    dateRangePickerInit() {
        $('input[id="daterange_input"]').daterangepicker({
            autoApply: true,
            locale: {
                format: 'YYYY/MM/DD'
            }
        }, (start, end) => {
            const startDate = start.format('YYYY/MM/DD');
            const endDate = end.format('YYYY/MM/DD');

            this.props.change('daterange_start', startDate);
            this.props.change('daterange_end', endDate);
        });
    }

    componentDidMount() {
        this.dateRangePickerInit();
    }

    render() {
        return (
            <Grid>
                <PageHeader>Create Request</PageHeader>
                <NewRequestForm onSubmit={this.handleSubmit}/>
            </Grid>
        )
    }

}

const mapStateToProps = state => {

};

const mapDispatchToProps = dispatch => {
    return {
        change: (fieldName, value) => {
            dispatch(
                change('request', fieldName, value)
            )
        }
    }
};

export default connect(null,mapDispatchToProps)(NewRequestsContainer);