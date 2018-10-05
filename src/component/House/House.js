import React from 'react';


export default function House(props) {
    let {id} = props.house
    return(
        <div className='house'>
            <h1>{props.house.property_name}</h1>
            <h3>{props.house.address}</h3>
            <h3>{props.house.city}</h3>
            <h3>{props.house.state}</h3>
            <h3>{props.house.zip}</h3>
            <button onClick={() => props.handleDelete(id)}>Delete</button>
        </div>
    )
}