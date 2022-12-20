import React, { useState } from 'react';
import SrinuChildCompo from './FunctionalChilComp'


const NewComponent = () => {
    let [name, setName] = useState("Rakesh");
    let [num, setNum] = useState(1);
    let [address, setAddress] = useState("secunderbad")

    return (
        <div>
            <h1> This is Funtional component</h1>
            <h1>{name}</h1>
            <h1> {num}</h1>
            <h1>{address}</h1>
            <button onClick={() => {
                setName("Karthik");
                setNum(num * 2);
            }}>Change the current state</button>
            <hr />
            <SrinuChildCompo
                num={num}
                nameTag={name}
                abcd={setNum}
                addressChng={setAddress}
                addresstoChild={address}
            />

        </div>
    )
}


export default NewComponent;