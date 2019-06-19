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

class ModalFiles extends Component {
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
    } = this.props

    return (
      <Modal trigger={trigger} basic size='small' style={s.mn(s.w('100%'))}>
        <Header icon='file' content='Files' />
        <Modal.Content style={s.mn(s.w('100%'),s.h(500),s.bgc('#f4f4f4'),s.c('black'))}>
          Drag files here or click
          <Grid stackable style={s.mn(s.w('100%'))}>
            <Grid.Column>
              <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
            </Grid.Column>
            <Grid.Column>
              <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
            </Grid.Column>
          </Grid>
        </Modal.Content>
        <Modal.Actions>

        </Modal.Actions>
      </Modal>
    );
  }


}

export default ModalFiles;
