import React, { Component } from 'react';

class Welcome extends Component {
    render() {
        var h1Style = {
            fontSize: '22px',
            color: 'red',
            margin: '0px'
        }
        return <h1 style={h1Style}>Welcome on {this.props.name}</h1>
    }
}

export default Welcome