import React, { Component } from 'react'
import styled from 'styled-components';

class CustomButton extends Component {

    render() {
                
        return (
            <div>
                <button className={this.props.className}>{this.props.buttonText}</button>
                {console.log(this.props.className)}                
            </div>
        )
    }
}
const styles = ({
    success : {
        backgroundColor:'green',
        color: 'white'
    }
})

export default CustomButton


