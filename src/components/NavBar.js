
import React, { Component } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link, Route, Switch, BrowserRouter } from 'react-router-dom';


class NavBar extends Component {
  
  // onCloseModal = () => {
  //   const { onCloseModal } = this.props;
  //   this.setState({ onCloseModal: false });
  // };



  
  render() {
    const { loginPostData, onCloseModal } = this.props;
    if(loginPostData){
    return (
      <div>
          <Toolbar>
            <List component="nav">
              <ListItem component="div">
                  <ListItemText>
                    Welcome to, { loginPostData.username}
                    {onCloseModal}
                  </ListItemText>
                  {/* {onCloseModal} */}
              </ListItem >
            </List>
          </Toolbar>
      </div>
    );
  }
}
}
export default NavBar;


// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import { withRouter } from 'react-router-dom';
// // import { connect } from 'react-redux';
// // import { bindActionCreators } from 'redux';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// // import MenuIcon from '@material-ui/icons/Menu';
// import Grid from '@material-ui/core/Grid';
// import { Link } from 'react-router-dom';
// // import { logoutUser } from './../actions/index';

// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// // import StarIcon from '@material-ui/icons/Star';
// // import Cookies from "universal-cookie";

// const styles = {
//   root: {
//     flexGrow: 1,
//   },
//   flex: {
//     flex: 1,
//   },
//   menuButton: {
//     marginRight: 20,
//   },
//   div:{
//     display: 'flex',
//     flexDirection: 'row',
//     width: '100%',
//     height: '50px',
//     alignItems: 'center'
//   },
//   manageButton:{
//     flex: 1,
//     marginLeft: '30px',
//   },
//   monitorButton:{
//     flex: 1,
//     textAlign: 'center',
//     marginLeft: '30px',
//   },
//   space:{
//     flex: 4,
//     textAlign: 'center',
//   },
//   profile:{
//     flex: 2,
//     textAlign: 'center',
//     color: 'white',
//   },
//   svg:{
//     fill: '#ff3365',
//     paddingLeft: '1em'
//   }
// };


// class ButtonAppBar extends React.Component  {
//   constructor(props){
//     super(props)
//     this.state = {
//       showList: false
//     }
//   }

//   toggle = ()=> {
//     this.setState({
//       showList: !this.state.showList
//     })
//   }

// //   LogoutUser = () => {
// //     cookie.remove("access_token");
// //     this.props.LogoutUser();
// //     this.props.history.push("/login");
// //   }

//   render(){
//     const { classes } = this.props;
//     return (
//       <div className={classes.root}>
//         <AppBar position="static">
//           <Toolbar style={{background: 'black'}}>
//             {/* <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
//               <MenuIcon />
//             </IconButton> */}
//             <div style={styles.div}>
//               <div style={styles.space}></div>
//               <div style={{display: 'inline-flex', paddingRight: '2em'}}>
//                 <Typography variant="body2" color="inherit">{this.props.User.name}</Typography>
               
//                 {/* {this.state.showList &&
//                 <ArrowUp onClick={this.toggle} size='small'/>}
//                 {!this.state.showList &&
//                 <ArrowDown onClick={this.toggle} size='small'/>} */}
//               </div>
//               {/* {this.state.showList && <DropList toggle={this.toggle} open={this.state.showList} logout={this.LogoutUser}/>} */}
//             </div>
//           </Toolbar>
//         </AppBar>
//       </div>
//     );
//   }
// }

// ButtonAppBar.propTypes = {
//   classes: PropTypes.object.isRequired,
// };


// class DropList extends React.Component {
//   constructor(props){
//     super(props)
//   }

//   render() {
//     return (
//       <div style={{width: '100%', maxWidth: 240, position: 'absolute', top: '50px', backgroundColor: 'white', zIndex: 200, right: 3}}>
//         <List size='small' component="nav">
//           <ListItem onClick={this.props.logout} button>
//             <ListItemText inset primary="Logout" />
//           </ListItem>
//         </List>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     User: state.User,
//   }
// }

// // const mapDispatchToProps = (dispatch) => {
// //   return {
// //     LogoutUser: bindActionCreators(logoutUser, dispatch),
// //   }
// // }

// export default (mapStateToProps)(withRouter(withStyles(styles)(ButtonAppBar)));