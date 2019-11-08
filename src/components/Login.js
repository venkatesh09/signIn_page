import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { withRouter, Redirect } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Cookies from 'universal-cookie';
import _ from 'lodash';

import Button from '@material-ui/core/Button';

import { loginUser } from './../../actions/index';
import TextField from '@material-ui/core/TextField';
// import BASE_URL from './../../api/config';

const placeholder = {
	color: '#f50057 !important'
}

const theme = createMuiTheme({
  overrides: {
    // Name of the component ⚛️ / style sheet
    MuiInput: {
  		underline: {
  			'&:before': {
		      borderBottom: '1px solid #ffffff',
				},
				'&:after': {
		      borderBottom: '2px solid #f50057',
				},
				'&:hover:not(:focus):before': {
					borderBottom: '2px solid #f50057 !important',
				},
				'&:active': {
					borderBottom: '1px solid #f50057',
				}
			},
			root: {
				color: "#f50057",
			},
  		input: {
				color: "#ffffff !important",
				'&::-webkit-input-placeholder': placeholder,
				'&::-moz-placeholder': placeholder, // Firefox 19+
				'&:-ms-input-placeholder': placeholder, // IE 11
				'&::-ms-input-placeholder': placeholder, // Edge
  		}
		},
		MuiFormLabel: {
			root: {
				color: 'rgba(255, 255, 255, 0.54) !important',
			},
			focused: {
				color: 'rgb(255, 255, 255) !important',
			}
		}
  },
});

const cookies = new Cookies();

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loggedIn: false,
			validUserName: false,
			loginFormData: {
				username: "",
				password: "",
			}
		}
	}

	componentDidMount() {
		if (cookies.get('access_token')) {
			this.setState({
				loggedIn: true,
			})
		}
	}

	handleChange = (event) => {
		let name = event.target.name;
		let value = event.target.value;
		this.setState((prevState) => {
			return {
				loginFormData: {
					...prevState.loginFormData,
					[name]: value,
				}
			}
		})
	}

	// validateUsername = (event) => {
	// 	if (event.key === "Enter" || event.key === "Tab") {
	// 		apiCall.sendRequest('get', `/api/v1/users/user-password-status?email=${this.state.loginFormData.username}`)
	// 			.then((response) => {
	// 				console.log(response.data);
	// 				if (response.data.status === "OK") {
	// 					if (response.data.data === true) {
	// 						this.props.history.push({
	// 							pathname: "/set-password",
	// 							state: { email: this.state.loginFormData.username },
	// 						})
	// 					} else {
	// 						this.setState({
	// 							validUserName: true,
	// 						})
	// 					}
	// 				}
	// 			})
	// 			.catch((error) => {
	// 				console.error(error);
	// 			})
	// 	}
	// }

	// userLogin = () => {
	// 	let loginPostData = {...this.state.loginFormData};
	// 	apiCall.sendRequest('post', '/api/v1/login', loginPostData)
	// 		.then((response) => {
	// 			cookies.set('access_token', `${_.capitalize(response.data.data.token_type)} ${response.data.data.access_token}`, { path: '/' });
	// 			this.props.loginUser(response.data.data.user_details);
	// 			this.setState({
	// 				loggedIn: true,
	// 			})
	// 		})
	// 		.catch((error) => {
	// 			console.error(error);
	// 		})
	// }

	
	render() {
		if (this.state.loggedIn) {
			return (
				<Redirect to="/"/>
			)
		} else {
			return (
				<MuiThemeProvider theme={theme}>
					<div style={{width: '100vw', height: '100vh', backgroundColor: "#000000"}}>
						<div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', flexDirection: 'column'}}>
							<br />
							<TextField
								name="username"
								label="Username"
								value={this.state.loginFormData.username}
								onChange={this.handleChange} 
								onKeyPress={this.validateUsername}
								fullWidth
								style={{marginTop: '10px'}}
							/>
							<br />
							{this.state.validUserName &&
								<TextField
									name="password"
									label="Password"
									type="password"
									value={this.state.loginFormData.password}
									onChange={this.handleChange}
									fullWidth
									style={{marginTop: '10px'}}
								/>}
							<br />
							{this.state.validUserName &&
								<Button color="secondary" variant="contained" fullWidth onClick={this.userLogin} style={{marginTop: '10px'}}>
									Sign In
								</Button>}
							{/* <Button color="secondary" variant="contained" onClick={() => {this.googleLogin();}}>
								Login
							</Button> */}
							{/* <GoogleLogin
								clientId="764643565271-3evpt63hfnrvh3oi8hp6c0u2ar2q7sou.apps.googleusercontent.com"
								uxMode="redirect"
								responseType="code"
								accessType="offline"
								scope="profile email"
								redirectUri="http://ec2-13-232-61-99.ap-south-1.compute.amazonaws.com/login"
								onSuccess={this.onSuccess}
								onFailure={this.onFailure}
							/> */}
						</div>
					</div>
				</MuiThemeProvider>
			)
		}
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		loginUser: bindActionCreators(loginUser, dispatch),
	}
}

export default withRouter(connect(null, mapDispatchToProps)(Login));