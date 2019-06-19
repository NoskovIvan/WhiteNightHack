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

class ModalPay extends Component {
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
      <Modal trigger={trigger} basic size='small' style={s.mn()}>
        <Header icon='bitcoin' content='Pay for choosen item' />
        <Modal.Content style={s.mn(s.c('white'))}>


          <Form>
            <Form.Group widths='equal'>
              <Form.Input
                fluid placeholder='Title'
                label={<label style={s.mn(s.white)}>Title</label>}
                style={s.mn(s.white)}
              />
            </Form.Group>
            <Form.Button color="orange">BOOK</Form.Button>
          </Form>


        </Modal.Content>
        <Modal.Actions>

        </Modal.Actions>
      </Modal>
    );
  }


}

export default ModalPay;
