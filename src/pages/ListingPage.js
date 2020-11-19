import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Welcome from '../components/Welcome';
import { stockData } from './../JSON/data'

class ListingPage extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        console.log("load data json" + JSON.stringify(stockData));
    }

    componentDidMount() {
        console.log("load data json DidMount" + JSON.stringify(stockData));
    }

    componentWillReceiveProps(nextProps) {
        console.log("load data json WillReceive" + JSON.stringify(stockData));
    }

    shouldComponentUpdate(nextProps, nextState) {

    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {
        console.log("load data json Will Unmount" + JSON.stringify(stockData));
    }

    render() {
        return (
            <div className="py-3">
                <Welcome name="Listing Page" />
                <div className="row mt-3">
                    <div className="col">


                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Company</th>
                                    <th scope="col">Ticker</th>
                                    <th scope="col">Stock Price</th>
                                    <th scope="col">Time Elapsed</th>
                                </tr>
                            </thead>
                            <tbody>
                                {stockData.map((data, key) => {
                                    return (
                                        <tr key={key}>
                                            <th scope="row">
                                                {data.company}
                                            </th>
                                            <td>
                                                {data.ticker}
                                            </td>
                                            <td>
                                                {data.stockPrice}
                                            </td>
                                            <td>
                                                {data.timeElapsed}
                                            </td>
                                        </tr>
                                    )
                                })
                                }
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        );
    }
}

ListingPage.propTypes = {

};

export default ListingPage;