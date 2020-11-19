import React, { Component } from 'react'
import { NavLink, Route, Switch, Link, useRouteMatch, useParams } from 'react-router-dom'
import Tab1 from '../components/Tab1'
import Toggle from '../components/Toggle';


class TabsPage extends Component {

    render(){
        let path=this.props.match.path;
    return (
        <div>
            <h1>Tabs Page</h1>
            <ul className="nav mt-4">
                <li>
                    <Link to={`${path}/tab1`}>Rendering with React</Link>
                    
                </li>
                <li>
                    <Link to={`${path}/tab2`}>Components</Link>
                </li>
            </ul>
            <div className="mt-1 border shadow-sm p-3">
                <Switch>
                    <Route exact path={path}>
                        <h3>Please select a topic.</h3>
                    </Route>
                    <Route path={`${path}/tab1`}>
                        <Tab1 />
                    </Route>
                    <Route path={`${path}/tab2`}>
                        <Toggle />
                    </Route>
                </Switch>
                {/* {selectRoute(url)} */}
                {/* <Route exact path="tab1" component={Tab1} /> */}

            </div>
        </div>
    )}


}



export default TabsPage