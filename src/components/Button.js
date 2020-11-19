import React, { Component } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

class Button extends Component {

    render() {
        const Button = styled.button`
            font-size: 1em;
            margin: 1em;
            padding: 0.45em 0.80em;
            border: 2px solid red;
            border-radius: 3px;
            border: 2px solid palevioletred;
            background: ${props => props.primary ? "palevioletred" : "white"};
            color: ${props => props.primary ? "white" : "#333"}
        `;
        const TomatoButton = styled(Button)`
            background-color: tomato;
            color: white;
        `;
        return (
            <div>
                <Button primary={this.props.primary} style={this.props.primary}>
                    {this.props.buttonText}
                </Button>
                {/* {console.log(this.props.primary)} */}

            </div>
        )
    }
}

export default Button


// import React from "react";

// const spanStyles = {
//   color: "#fff",
//   borderColor: "#ff00ff",
//   backgroundColor: "blue",
//   borderRadius: "5px"
// };

// const Button = props => (
//   <button style={spanStyles}>
//         Button Name
//   </button>
// );
// export default Button