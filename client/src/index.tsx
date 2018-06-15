// tslint:disable-next-line:no-import-side-effect
import 'tslib';
import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router';
import store, { history } from './store/store';

import Home from './pages/home';
import LoginForm from './features/userAuth/components/login-form';
import RegisterForm from './features/userAuth/components/register-form';

const Root = () => (
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/login" component={LoginForm} />
				<Route exact path="/register" component={RegisterForm} />
			</Switch>
		</ConnectedRouter>
	</Provider>
);

render(<Root />, document.getElementById('root'));