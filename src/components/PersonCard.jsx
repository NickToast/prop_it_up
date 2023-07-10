import React from "react";


const PersonCard = (props) => {
    const {firstName, lastName, age, hair_color} = props
    return(
        <div>
            <h1>{lastName}, {firstName}</h1>
            <p>Age: {age}</p>
            <p>Hair Color: {hair_color}</p>
        </div>
    )
}

export default PersonCard