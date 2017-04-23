/**
 * Created by dannyyassine on 2017-04-19.
 */
import React from 'react'
import { render } from 'react-dom'
import Scoreboard from './src/containers/Scoreboard'
import DribbbleContainer from './src/containers/DribbbleContainer'
import HomeContainer from './src/containers/HomeContainer'
import LoginForm from './src/components/LoginForm'
import { Provider } from 'react-redux'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link
} from 'react-router-dom'
import {store} from './src/store/scoreboardStore'
import DribbbleListPresenter from './src/presenters/DribbbleListPresenter'
import GetShots from './src/domain/interactors/getShots'
import LocalStateDataManager from './src/middlewares/persistStateLocalManager'

const DribbbleContainerComponent = () => (
    <DribbbleContainer
        presenter={new DribbbleListPresenter(new GetShots())}
    />
)

const Component404 = () => (
    <h1>404</h1>
)

const loggedIn = LocalStateDataManager.loadToken() ? true : false

const PrivateRoute = ({path, component}) => (
    <Route path={path} render={(props) => (
        LocalStateDataManager.loadToken() !== null ? (
            React.createElement(component, {})
        ) : (
            <Redirect to={{
                pathname: '/login',
                state: {from: props.location}
            }}/>
        )
    )}/>
)

const ProtectedComponent = () => {

    let text = 'Protected'

    return (
        <div>{text}</div>
    )
}

const RouterRoot = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/dribbble">Dribbble</Link></li>
                <li><Link to="/scoreboard">Scoreboard</Link></li>
                <li><Link to="/protected">Protected</Link></li>
            </ul>

            <Switch>
                <Route exact path="/" component={HomeContainer}/>
                <Route path="/dribbble" component={DribbbleContainerComponent}/>
                <Route path="/scoreboard" component={Scoreboard}/>
                <Route path="/login" component={LoginForm}/>
                <PrivateRoute path="/protected" component={ProtectedComponent}/>
                <Route component={Component404}/>
            </Switch>
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
