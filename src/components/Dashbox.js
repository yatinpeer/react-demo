import React, { Component } from 'react'

class Dashbox extends Component {
    render() {
        return (
            <div className={`${this.props.boxBg} p-3 shadow-sm`}>
                <h5 className="border-bottom pb-3">{this.props.boxTitle}</h5>
                <div className="d-flex justify-content-between align-items-center mt-3">
                    <div>
                        <label className="m-0 text-dark">Total</label>
                        <h3 className="m-0 text-primary">{this.props.boxTotal}</h3>
                    </div>
                    <i className={`fa fa-2x fa-${this.props.boxIcon}`}></i>
                </div>
            </div>
        )
    }
}

export default Dashbox