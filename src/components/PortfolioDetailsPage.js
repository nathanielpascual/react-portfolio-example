import React from 'react';

const EditExpensePage = (props) => (
    <div>
        <h1>This is my portfolio</h1>
        Check id of {props.match.params.id}
    </div>
);

export default EditExpensePage;