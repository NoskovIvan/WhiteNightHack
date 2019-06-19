import React, { Component, createRef } from 'react';
import { BrowserRouter, Route, Link, Switch, withRouter } from 'react-router-dom';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import { withCookies } from 'react-cookie';
import { connect } from 'react-redux';
import 'semantic-ui-css/semantic.min.css'
import { Ref, Popup, Input, Rating, Accordion, Rail, Sticky, Button, Container, Dropdown, Form, Grid, Header, Card, Dimmer, Icon, Modal, Checkbox, Image, Item, Label, Menu, List, Divider, Segment, Step, Table } from 'semantic-ui-react'
//
import configureStore from './store/configureStore';
import {s,cols} from './styles/style'
import * as PagesAndContainers from './components'


//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

const options = [
  { key: 'users', text: 'Users', value: 'users' },
  { key: 'promises', text: 'Promises', value: 'promises' },
  { key: 'myPromises', text: 'My Promises', value: 'myPromises' },
]

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allTickets: [],
      signInOrUp: true,
      newPromiseType: true,
    };
    // this.getPrices = this.getPrices.bind(this);
    this.inputOpenFileRef = createRef()
  }
  //
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  //
  handleLoadFile() {
    this.inputOpenFileRef.current.click();
  }
  //
  render () {
    const {
      activeItem,
      signInOrUp,
      newPromiseType,
    } = this.state

    return (
      <div className="App">


        <PagesAndContainers.MenuMain history={history}/>


        <Container fluid style={s.mn(s.m('70px 0'),s.p(0))}>
          <Route render={({location}) => (
            <Switch location={location}>
              <Route exact path='/' component={PagesAndContainers.PageMain}/>
              {/*<Route path='/users' component={PagesAndContainers.PageUsers}/>*/}
              {/*<Route path='/users/:id' component={PagesAndContainers.PageUser}/>*/}
              {/*<Route path='/promises' component={PagesAndContainers.PagePromises}/>*/}
              <Route path='/cabinet' component={PagesAndContainers.PageCabinet}/>
              <Route path='*' component={PagesAndContainers.Page404}/>
            </Switch>
          )} />
        </Container>



      </div>
    );
  }

}


export default withCookies(connect()(App))

// export default App;
