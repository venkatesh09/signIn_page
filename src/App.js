import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TypoGraphy from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link, Route, Switch, BrowserRouter } from 'react-router-dom';
import LiveSkillRary from './LiveSkillRary';
import OnGoingClasses from './OnGoingClasses';
import UpComingClasses from './UpComingClasses';
import HowItsWorks from './HowItsWorks';
import NavBar from './components/NavBar';
import ContactUsComponent from './ContactUsComponent';
import AboutUs from './AboutUs';
import LinkingComponent from './LinkingComponent';
import Button from '@material-ui/core/Button';
import PopUp from './components/PopUp';
import Modal from "react-responsive-modal";


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      open: false,
    }
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    const { loginPostData, loggedIn } = this.props;
    console.log('App*****', loginPostData);
    console.log('App************', loggedIn);
  
    return (
      <div>
        <BrowserRouter>
        <AppBar position="static" style={{ background: '#14882c' }}>
          <Toolbar>
            <TypoGraphy variant="title"
              color="inherit"
            >
             SkillRary
           </TypoGraphy>
            <List component="nav">
              <ListItem component="div">
                  <ListItemText>
                      <TypoGraphy color="inherit" variant="title">
                          <Link to="/liveSkillRary" style={{color:"black"}}>LiveSkillRary</Link>
                      </TypoGraphy>
                  </ListItemText>


                  <ListItemText inset>
                      <TypoGraphy color="inherit" variant="title">
                      <Link to="/onGoingClasses" style={{color:"black"}}>OnGoing Classes</Link>
                          
                </TypoGraphy>
                  </ListItemText>


                  <ListItemText inset>
                      <TypoGraphy color="inherit" variant="title">
                        <Link to="/upcomingClasses" style={{color:"black"}}>Upcoming Classes</Link>
                </TypoGraphy>
                  </ListItemText>

                  <ListItemText inset>
                      <TypoGraphy color="inherit" variant="title">
                      <Link to="/howItsWorks" style={{color:"black"}}>How its works?</Link>
                </TypoGraphy>
                  </ListItemText>

                  <ListItemText inset>
                     
                      <Button color="inherit" variant="title" onClick={this.onOpenModal}>
                          Sign In
                      </Button>
                      
                  </ListItemText>
                  <Modal open={open} onClose={this.onCloseModal} style={{marginTop: 'auto'}}>
                      <PopUp 
                        onCloseModal={this.onCloseModal}
                      />
                     </Modal>

              </ListItem >
            </List>
          </Toolbar>
        </AppBar>


        <Switch>
          <Route exactly path="/liveSkillRary">
            <LiveSkillRary  />
            <AboutUs/>
            <ContactUsComponent />

          </Route>
          <Route exactly path="/onGoingClasses">
            <OnGoingClasses />
          </Route>
          <Route exactly path="/upcomingClasses">
            <UpComingClasses />
          </Route>
          <Route exactly path="/howItsWorks">
            <HowItsWorks />
          </Route>
          <Route exactly path="/linking">
            <LinkingComponent />
          </Route>
          {/* <Route exact path="/login">
            <NavBar />
          </Route> */}
          {/* <Route exact path="/app">
            <App />
          </Route> */}
        </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
