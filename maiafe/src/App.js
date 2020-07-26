import React, { Component } from 'react';
import logo from './assets/multimedia/logo.svg';
import './assets/css/App.css';
import { withTranslation } from 'react-i18next';
import './componentes/i18next/i18n';

import { KeycloakProvider } from '@react-keycloak/web';

import keycloak from './keycloak';

import { BrowserRouter, Route, Link } from 'react-router-dom';
import Welcome from './Welcome';
import Secured from './Secured';

// Wrap everything inside KeycloakProvider

export default withTranslation('translation', { withRef: true })(
	class AppInicio extends Component {
		t = this.props.t;
		render() {
			return (
				<BrowserRouter>
					{/* <KeycloakProvider keycloak={keycloak}> */}

					<div className='container'>
						<ul>
							<li>
								<Link to='/'>public component</Link>
							</li>
							<li>
								<Link to='/secured'>secured component</Link>
							</li>
						</ul>
						<Route exact path='/' component={Welcome} />
						<Route path='/secured' component={Secured} />
					</div>

					<div className='App'>
						<header className='App-header'>
							<img src={logo} className='App-logo' alt='logo' />
							<p>
								Creando: <code>Mi Amigo Invisible APP 20</code>, una aplicación
								basada en react.
							</p>
							<a
								className='App-link'
								href='http://jihp.es'
								target='_blank'
								rel='noopener noreferrer'
							>
								Primera versión js y php.
							</a>
							<p>{this.t('bienvenidos')}</p>
						</header>
					</div>
					{/* </KeycloakProvider> */}
				</BrowserRouter>
			);
		}
	}
);
