import React, { Component } from 'react'
import Welcome from '../components/Welcome';
import Collapsible from '../components/Collapsible';

class FetchData extends Component {
    constructor() {
        super()
        this.state = {
            isLoader: true,
            contacts: []
        }
    }
    componentDidMount() {
        this.fetchData();
    }
    fetchData() {
        console.log("Fetch Data");
        fetch('https://5f3cd92f6c11f80016d6f570.mockapi.io/api/reactTest')
            .then(response => response.json())
            .then(data => data.map(user => (
                {
                    name: `${user.firstName} ${user.lastName}`,
                    email: `${user.email}`,
                    phone: `${user.phone}`
                }
            )))
            .then(contacts => this.setState({
                contacts,
                isLoader: false
            }))

        // .then(data => {console.log(data)
        //     this.setState({
        //         contacts : data

        //     })
        //     console.log("Data Contact " + this.state.contacts);        
        // })
    }
    render() {
        const { isLoader, contacts } = this.state
        return (
            <div className="py-3">
                <Welcome name="Fetch Data" />
                <div className={`mt-3 ${isLoader ? 'is-loader' : ''}`}>
                    <div className="panel-group">
                        {!isLoader && contacts.length > 0 ? contacts.map(contact => {
                            return <Collapsible key={contact.name} title={contact.name}>
                                <p>Email: <strong>{contact.email}</strong></p>
                                <p>Phone: <strong>{contact.phone}</strong></p>
                            </Collapsible>
                        }) : null


                        }
                    </div>
                    <div className="loader">Loadding...</div>
                </div>

            </div>
        )
    }
}

export default FetchData