import React from 'react';

const Actions = (props) => {

    return (
        <div>
           <div className="d-flex justify-content-between">
           <button onClick={props.prev} className="btn btn-danger" type="button">poprzednie pytanie</button>
           <button onClick={props.next} className="btn btn-success" type="button">nastepne pytanie pytanie</button>
           </div>
        </div>
    )
};

export default Actions;
