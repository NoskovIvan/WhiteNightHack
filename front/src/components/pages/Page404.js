import React, { Component, createRef } from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Ref, Popup, Input, Rating, Accordion, Rail, Sticky, Button, Container, Dropdown, Form, Grid, Header, Card, Dimmer, Icon, Modal, Checkbox, Image, Item, Label, Menu, List, Divider, Segment, Step, Table } from 'semantic-ui-react'
//
import {s,cols} from '../../styles/style'
import * as PagesAndContainers from '../'


//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

const options = [
  { key: 'users', text: 'Users', value: 'users' },
  { key: 'promises', text: 'Promises', value: 'promises' },
  { key: 'myPromises', text: 'My Promises', value: 'myPromises' },
]

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

class PageUsers extends Component {
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
      <Container fluid>
        <Header as='h2'>Page 404</Header>
        This page is not exist
      </Container>
    );
  }

}

export default PageUsers;
