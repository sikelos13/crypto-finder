import { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import CoinsView from './containers/CoinsView';
import { Container } from '@material-ui/core';
import CoinDetail from './components/CoinsManagement/CoinDetail';
export default class Routes extends Component<{}, {}> {
    render() {
        return (
            <Container className="Main_Container" style={{ maxWidth: "1400px" }}>
                <Switch>
                    <Route exact path={["/coins", "/"]} component={CoinsView} />
                    <Route exact path="/coin/:id/details" component={CoinDetail} />
                </Switch>
            </Container>
        );
    }
}