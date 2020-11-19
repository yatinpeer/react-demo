import React, { Component } from 'react'
import Welcome from '../components/Welcome'
import Fade from 'react-reveal/Fade'

const animateList = [1, 2, 3, 4, 5]
class FadePage extends Component {

    render() {
        return (
            <div className="py-3">
                {/* <Welcome name="Fade Animation" /> */}
                <div className="row">
                    <div className="col">
                        {animateList.map((item, key) => {
                            return (
                                <div style={styles.block} key={key}>
                                    <Fade top>
                                        <h1>{item}</h1>
                                    </Fade>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}
const styles = {
    block: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        background: '#ccc',
        borderBottom: '1px solid rgba(255,255,255,0.2)'
    },
    title: {
        textAlign: 'center',
        fontSize: 100,
        color: '#000'
    }
}
export default FadePage
