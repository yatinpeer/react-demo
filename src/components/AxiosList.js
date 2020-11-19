import React, { Component } from 'react';
import Axios from 'axios';

class AxiosList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoader: true,
            posts: []
        }
    }
    componentDidMount() {
        Axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response);
                let temp = []
                if (response.data.length > 0 && response.data) {
                    response.data.map((obj, i) => {
                        if (i < 15) {
                            temp.push(obj);
                        }
                    })
                }
                this.setState({
                    posts: temp,
                    isLoader: false,
                })
            })
            .catch(error => {
                console.log("data error = " + error);
            })
    }
    render() {
        const { posts, isLoader } = this.state;
        return (
            <div>
                <div className={`${isLoader ? 'is-loader' : ''} mt-3`}>
                    {
                        posts.length ?
                            posts.map((post, i) =>
                                (<div key={post.id}><span style={{ fontWeight: '500' }}>{i+1}.</span> {post.title}</div>)
                            ) :
                            null
                    }
                    <div className="loader">Loadding...</div>
                </div>
            </div>
        );
    }
}

export default AxiosList;