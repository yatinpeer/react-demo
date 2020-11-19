import React, { Component } from 'react'
import Greet from './../components/Greet'
import Welcome from './../components/Welcome'
import Dashbox from '../components/Dashbox'
import EventBinding from '../components/EventBinding'
import Toggle from '../components/Toggle'
import HomeChart from '../components/HomeChart'
import Button from '../components/Button'
import CustomButton from '../components/CustomButton'
import { Link } from 'react-router-dom'

class Home extends Component {

    render() {

        return (
            <div className="py-3">
                <Welcome name="Home" />
                <div className="row mt-4">
                    <div className="col-4">
                        <Dashbox boxTitle="Title 1" boxTotal="5" boxIcon="user" boxBg="bg-white" />
                    </div>
                    <div className="col-4">
                        <Dashbox boxTitle="Title 2" boxTotal="250" boxIcon="gear" boxBg="bg-white" />
                    </div>
                    <div className="col-4">
                        <Dashbox boxTitle="Title 3" boxTotal="150" boxIcon="home" boxBg="bg-white" />
                    </div>
                </div>
                <div className="mt-4">
                    <Button primary={{ background: 'orange', color: 'white' }} buttonText="Button" />
                    <Button buttonText="Click Button" />
                    <CustomButton buttonText="Custom Button" className="success"></CustomButton>
                </div>
                <div className="mt-4">
                    <EventBinding />
                </div>
                <div className="mt-4">
                    <Toggle />
                </div>
                <div className="mt-5">
                    <HomeChart />
                </div>
                <div className="mt-5">
                    <Link to="/about">
                        <Button buttonText="Click Button" />
                    </Link>
                </div>

            </div>
        )
    }
}

export default Home