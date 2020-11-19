import React, { Component } from 'react'
import PersonList from './PersonList';

class Listing extends Component {
    constructor() {
        super();
    }

    personsList = [
        {
            name: 'Brue',
            age: '35'
        },
        {
            name: 'Duck',
            age: '35'
        },
        {
            name: 'Diana',
            age: '35'
        }
    ]

    componentWillMount() {
        console.log("check listing" + JSON.stringify(this.personsList))
    }

    render() {
        // const arrayList = ['Brue', 'Duck', 'Diana'];

        const personsListing = this.personsList.map((persons12) =>
            <PersonList persons={persons12} />
        )

        return (

            <div>
                <ul className="">{personsListing}</ul>
            </div>
        )
    }
}

export default Listing;