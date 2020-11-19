import React, { Component } from 'react';
import Welcome from '../components/Welcome';
import AxiosList from '../components/AxiosList';

class AxiosPage extends Component {
    render() {
        return (
            <div className="py-3">
                <Welcome name="Axios Plugin" />
                <div className="mt-3">
                    <AxiosList />
                </div>
            </div>
        );
    }
}

export default AxiosPage;