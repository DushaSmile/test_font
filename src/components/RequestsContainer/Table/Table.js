// React
import React from 'react';

// Components
import TableRow from './TableRow';
import TableHeader from './TableHeader'


const Table = ({requests}) => {
    return(
        <table className="table">
            <TableHeader />
            <tbody>
                {/*Loop through requests and pass each into TableRow*/}
                {Object.values(requests).map(request => <TableRow key={request.id} row={request} />)}
            </tbody>
        </table>
    )
};

export default Table;