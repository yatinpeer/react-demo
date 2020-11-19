import React, { Component } from 'react'

class EventBinding extends Component {
    constructor() {
        super()
        this.state = {
            message: 'Welcome Peerbits'
        }
        this.clickHandle = this.clickHandle.bind(this)
    }
    clickHandle() {
        console.log("click button");
        this.setState({
            message: 'Good Bye!'
        })
    }

    render() {

        return (
            <div>
                <h3>{this.state.message}</h3>
                <button className="btn btn-primary" onClick={() => this.clickHandle()}>Subscribe</button>
            </div>
        )
    }
}

export default EventBinding