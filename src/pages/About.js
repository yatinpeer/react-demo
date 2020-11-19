import React, { Component } from 'react'
import Welcome from '../components/Welcome'
import Listing from '../components/Listing'

class About extends Component {
    constructor() {
        super()
        this.myRef = React.createRef();
        this.focusTextInput = this.focusTextInput.bind(this);
    }

    focusTextInput() {
        this.myRef.current.focus();
    }

    render() {
        console.log("check url " + this.props.location.pathname);
        return (
            <div className="py-3">
                <Welcome name="About" />
                <div className="row mt-3">
                    <div className="col">
                        <Listing />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col">
                        <input type="text" ref={this.myRef} />
                        <input type="button" value="Focus the text input" onClick={this.focusTextInput} />
                    </div>
                </div>

            </div>
        )
    }
}

export default About