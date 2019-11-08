import React from 'react';
import './style.css';
import { TextField, Button } from '@material-ui/core/';
import { Link, withRouter, Redirect } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import App from '../App';
import NavBar from './NavBar';





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
		      borderBottom: '2px solid #ffffff',
				},
				'&:hover:not(:focus):before': {
					borderBottom: '2px solid #ffffff !important',
				},
				'&:active': {
					borderBottom: '1px solid #ffffff',
				}
			},
			root: {
				color: "#ffffff",
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



class PopUp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loggedIn: false,
            loginFormData: {
				username: "",
				password: "",
			},
            showName: false
    }
}


handleChange = (event) => {
    let { name, value } = event.target;
    this.setState((prevState) => {
        return {
            loginFormData: {
                ...prevState.loginFormData,
                [name]: value,
            }
        }
    })
}

userLogin = () => {
    let loginPostData = {...this.state.loginFormData};
        console.log('loginPostData', loginPostData);
        this.setState({
            loggedIn:true,
            loginData: loginPostData,
            
        })
}

// getResult = () => {
//     const { loginData } = this.state;

//     this.history.push({ 
//         pathname: '/',
//         state: { some: loginData }
//     })
    
// }

// renderRedirect = () => {
//     if (this.state.loggedIn) {
//         return (
//             <Redirect to={{
//                 pathname: '/testing',
//                 state: {data: this.state.loginData}
//             }}
//     />
//         )
//     }
// }



render() {
    const { loginData, loggedIn } = this.state;
    const { closePopUp, onClose } = this.props;
    console.log('closePopUp', closePopUp);
    
        return (

            <MuiThemeProvider theme={theme}>
                {this.state.loggedIn && 
                    <NavBar
                     loginPostData={loginData}
                     onCloseModal={onClose}
                     loggedIn={loggedIn}
                    />
                    }
                
                
                <div style={{width: '30vw',position: 'absolute', height: '40vh', top:'50%'}}>
                    {/* {this.renderRedirect} */}
                    <div style={{position: 'absolute', top: '20%', left: '50%', flexDirection: 'column'}}>
                        <br />
                        <h2> Sign Form</h2>
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
                            <TextField
                                name="password"
                                label="Password"
                                type="password"
                                value={this.state.loginFormData.password}
                                onChange={this.handleChange}
                                fullWidth
                                style={{marginTop: '10px'}}
                            />
                        <br />
                            <Button color="primary" variant="contained" fullWidth onClick={this.userLogin} style={{marginTop: '10px'}}>
                                Sign In
                            </Button>
                    </div>
                </div>
            </MuiThemeProvider>
        )
    }
}
// }

export default PopUp;
