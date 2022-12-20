import React, { Fragment } from 'react';
let Grandchild = (props) => {
    return (
        <Fragment>
            <h1>I am a Grand child functional component!</h1>
            <h1>{props.noofcars}</h1>
            <button onClick={() => { props.chngnoofCars(props.noofcars * 5) }}>chnageCars-in-child_grand</button>
        </Fragment>
    )
}
export default Grandchild;