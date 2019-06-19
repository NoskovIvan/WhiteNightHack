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

class ModalForAll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // lng: 5,
    };
  }
  //
  render () {
    const {
      trigger,
      content,
      header,
    } = this.props

    return (
      <Modal trigger={trigger} basic size='small' style={s.mn(s.w('80%'),s.h('80%'))}>
        {header}
        <Modal.Content style={s.mn(s.w('100%'),s.h('100%'))}>

          <Container style={s.mn(s.w('100%'),s.h('100%'))}>
            {content}
          </Container>

        </Modal.Content>
        <Modal.Actions>

        </Modal.Actions>
      </Modal>
    );
  }


}

export default ModalForAll;
