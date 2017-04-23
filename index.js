/**
 * Created by dannyyassine on 2017-04-19.
 */
import React from 'react'
import { render } from 'react-dom'
import Scoreboard from './src/containers/Scoreboard'
import DribbbleContainer from './src/containers/DribbbleContainer'
import HomeContainer from './src/containers/HomeContainer'
import { Provider } from 'react-redux'
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Link
} from 'react-router-dom'
import {store} from './src/store/scoreboardStore'
import DribbbleListPresenter from './src/presenters/DribbbleListPresenter'

const DribbbleContainerComponent = () => (
    <DribbbleContainer presenter={new DribbbleListPresenter()}/>
)

const RouterRoot = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/dribbble">Dribbble</Link></li>
                <li><Link to="/scoreboard">Scoreboard</Link></li>
            </ul>

            <Route exact path="/" component={HomeContainer}/>
            <Route path="/dribbble" component={DribbbleContainerComponent}/>
            <Route path="/scoreboard" component={Scoreboard}/>
            <Redirect to="/"/>
        </div>
    </Router>
)

render(
    <Provider store={store}>
        <div>
            {RouterRoot()}
        </div>
    </Provider>,
  document.getElementById('root')
)
