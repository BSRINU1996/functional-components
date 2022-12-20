import React from 'react';
import Grandchild from './grandchild';

const ChildFunctionalComponent = (props) => {
    let [land, setLand] = React.useState(100);
    let [business, setBusiness] = React.useState(1000000000);
    let [numofcars, setNumofcars] = React.useState(1);
    return (
        <div>
            <h1>Child Functional Component</h1>


            <h1>{land}</h1>
            <h1>{business}</h1>
            <h1>{numofcars}</h1>
            <button onClick={() => {
                setLand(land + 100);
                setBusiness(business + 5000000000);
                setNumofcars(numofcars + 1);
            }} >growth</button>

            <h2> {props.nameTag}</h2>
            {/* we are not changing or using this this */}
            <h1>{props.num}</h1>
            <button onClick={() => props.abcd(props.num + 1)}>Change In Child</button>
            <br />
            <h1>{props.addresstoChild}</h1>
            <button onClick={() => { props.addressChng("vbcity,bollaram,plot.15") }}>changing the fc's state in fcchild</button>
            <hr />
            <Grandchild noofcars={numofcars} chngnoofCars={setNumofcars} />
        </div>
    )
}
export default ChildFunctionalComponent;

