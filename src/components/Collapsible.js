import React, { Component } from 'react'

class Collapsible extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isExpanded: false
        }
    }
    collapseHandle(e) {
        e.preventDefault();
        this.setState({
            isExpanded: !this.state.isExpanded
        })
    }
    render() {
        const { title, children } = this.props
        const { isExpanded } = this.state
        return (
            <div className={`card ${isExpanded ? 'is-expand' : ''}`} >
                <div className="card-header" onClick={(e) => this.collapseHandle(e)}>{title}</div>
                <div className="card-body">
                    <div className="p-4">
                        {children}
                    </div>
                </div>
            </div>

            // <div class={`card ${this.state.isExpanded ? 'is-expand' : ''}`} onClick={(e) => this.collapseHandle(e)}>
            //     <div class="card-header">{this.props.title}</div>
            //     <div class="card-body">
            //         {this.props.children}
            //     </div>
            // </div>
        )
    }
}

export default Collapsible;