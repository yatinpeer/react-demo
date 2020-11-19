import React, { Component } from 'react'

function PersonList({persons}) {
    return(
        <div>
            <li>My name is {persons.name} and also my age is {persons.age}</li>
        </div>
    )
}

export default PersonList