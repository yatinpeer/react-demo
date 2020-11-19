import React, { Component } from 'react'
import Welcome from '../components/Welcome'
import Collapsible from '../components/Collapsible'

class AccordionPage extends Component {
    render() {
        return (
            <div className="py-3">
                <Welcome name="Collapsible" />
                <div className="mt-3">
                    <Collapsible title="Hardware">
                        <p>With supporting text below as a natural lead-in to additional content.
                        With supporting text below as a natural lead-in to additional content.</p>
                    </Collapsible>
                    <Collapsible title="Software">
                        <p>With supporting text below as a natural lead-in to additional content.
                        With supporting text below as a natural lead-in to additional content.</p>
                    </Collapsible>
                    <Collapsible title="Design">
                        <p>With supporting text below as a natural lead-in to additional content.
                        With supporting text below as a natural lead-in to additional content.</p>
                    </Collapsible>


                </div>
            </div>
        )
    }
}

export default AccordionPage