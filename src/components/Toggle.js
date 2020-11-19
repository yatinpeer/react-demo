import React, { Component, useState } from 'react'

class Toggle extends Component {
    constructor() {
        super()
        this.state = {
            contentTxt: false
        }
        this.handleClick = this.handleClick.bind(this)

    }

    handleClick() {
        console.log("Handle Clicks");
        // if (this.state.contentTxt) {
        //     this.setState({
        //         contentTxt: false
        //     })
        // } else {
        //     this.setState({
        //         contentTxt: true
        //     })
        // }
        this.setState({
            contentTxt: !this.state.contentTxt
        })
    }

    render() {
        const { contentTxt } = this.state;

        return (
            <div>
                <button className="btn btn-secondary" onClick={this.handleClick}>
                    {contentTxt ? 'Hide' : 'Show'}
                </button>
                {contentTxt && <h5>Welcome Peerbits</h5>}
            </div>
        )

        // return this.state.contentTxt && <div>
        //     <h5>Welcome Peerbits</h5>
        // </div>


        // return (
        //     this.state.contentTxt ? (
        //         <h3>Welcome Peerbits</h3>
        //     ) :
        //     (
        //         <h3>Welcome Guest</h3>
        //     )
        // )


        // let message;
        // if(this.state.contentTxt){
        //     message = <h3>Welcome Peerbits</h3>
        // } else {
        //     message = <h3>Welcome Guest</h3>
        // }
        // return <div>{message}</div>


        // if (this.state.contentTxt) {
        //     return (
        //         <div>
        //             <h3>Welcome Peerbits </h3>
        //         </div>
        //     )
        // } else {
        //     return (
        //         <div>
        //             <h3>Welcome Guest </h3>
        //         </div>
        //     )
        // }

    }
}

export default Toggle;