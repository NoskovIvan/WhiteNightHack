import React, { Component } from 'react';
import { Ref, Popup, Input, Rating, Accordion, Rail, Sticky, Button, Container, Dropdown, Form, Grid, Header, Card, Dimmer, Icon, Modal, Checkbox, Image, Item, Label, Menu, List, Divider, Segment, Step, Table } from 'semantic-ui-react'
//
import {s,cols} from '../../styles/style'
import * as PagesAndContainers from '../'

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

class ModalMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myGeo: {},
      // lng: 5,
    };
  }
  //
  render () {
    const {
      trigger,
    } = this.props
    const {
      myGeo,
    } = this.state

    return (
      <Modal trigger={trigger} basic size='small' style={s.mn(s.w('100%'))}>
        <Header icon='map' content='Map' />
        <Modal.Content>
          <Container fluid style={s.mn(s.w('100%'),s.h(500))}>
            <PagesAndContainers.MapShow/>
          </Container>
        </Modal.Content>
        <Modal.Actions>
          {/*<Button basic color='red' inverted>*/}
            {/*<Icon name='remove' /> No*/}
          {/*</Button>*/}
          {/*<Button color='green' inverted>*/}
            {/*<Icon name='checkmark' /> Yes*/}
          {/*</Button>*/}
        </Modal.Actions>
      </Modal>
    );
  }


}

export default ModalMap;
