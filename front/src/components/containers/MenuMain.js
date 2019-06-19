import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch, withRouter } from 'react-router-dom';
import { Ref, Popup, Input, Rating, Accordion, Rail, Sticky, Button, Container, Dropdown, Form, Grid, Header, Card, Dimmer, Icon, Modal, Checkbox, Image, Item, Label, Menu, List, Divider, Segment, Step, Table } from 'semantic-ui-react'
import { connect } from 'react-redux';
//
import {s,cols} from '../../styles/style'
import * as PagesAndContainers from '../'

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

class MenuMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: null,
      isMobile: window.innerWidth <= 600,
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
      signInOrUp: false,
    };
    this.htmlForDesktop = this.htmlForDesktop.bind(this)
    this.htmlForMobile = this.htmlForMobile.bind(this)
  }
  //////////////////////////////////////////
  handleItemClick = (e, { name, to }) => {
    // console.log(this.props.history)
    this.props.history.push(to)
    this.setState({ activeItem: name })
  }

  updateWindowWidth() {
    if(window.innerWidth < 600) {
      this.setState({ windowWidth: window.innerWidth, windowHeight: window.innerHeight, isMobile:true });
    } else {
      let update_width  = window.innerWidth-100;
      let update_height = Math.round(update_width/4.4);
      this.setState({ windowWidth: update_width, windowHeight: update_height, isMobile: false });
    }
    // console.log(this.state.isMobile)
  }
  //////////////////////////////////////////
  render () {
    const {
      activeItem,
      signInOrUp,
      isMobile,
    } = this.state


    if (isMobile) {
      return (this.htmlForMobile())
    } else {
      return (this.htmlForDesktop())
    }

  }


  //////////////////////////////////////////


  btnSign = () => {
    const {
      isMobile,
    } = this.state

    return this.state.signInOrUp ? (
    <Modal trigger={<Button basic color="orange">Sign</Button>} basic size='small'>
      <Header content='Sign Up' />
      <Modal.Content>
        <Form>
          <Form.Field>
            <label style={s.mn(s.white)}>Username</label>
            <input placeholder='First Name' />
          </Form.Field>
          <Form.Field>
            <label style={s.mn(s.white)}>First Name</label>
            <input placeholder='First Name' />
          </Form.Field>
          <Form.Field>
            <label style={s.mn(s.white)}>Last Name</label>
            <input placeholder='Last Name' />
          </Form.Field>
          <Form.Field>
            <Checkbox label={<label style={s.mn(s.white)}>I agree to the Terms and Conditions</label>} />
          </Form.Field>
          <Form.Field>
            I already have an account. I want to
            <Button
              basic inverted type='submit'
              style={s.mn(s.p('5px 10px'),s.m(5))}
              onClick={()=>{this.setState({signInOrUp:false})}}
            >Sign In</Button>
          </Form.Field>
          <Form.Field>
            <Button basic color="orange" type='submit'>Submit</Button>
          </Form.Field>
        </Form>
      </Modal.Content>
    </Modal>
  ):(
    <Modal trigger={<Button basic color="orange">Sign</Button>} basic size='small'>
      <Header content='Sign In' />
      <Modal.Content>
        <Form>
          <Form.Field>
            <label style={s.mn(s.white)}>Username</label>
            <input placeholder='First Name' />
          </Form.Field>
          <Form.Field>
            I do not have an account. I want to
            <Button
              basic inverted type='submit'
              style={s.mn(s.p('5px 10px'),s.m(5))}
              onClick={()=>{this.setState({signInOrUp:true})}}
            >Sign Up</Button>
          </Form.Field>
          <Form.Field>
            <Button basic color="orange" type='submit'>Submit</Button>
          </Form.Field>
        </Form>
      </Modal.Content>
    </Modal>
  )}





  htmlForDesktop = () => {
    const {
      activeItem,
      signInOrUp,
      isMobile,
    } = this.state

    return (
      <Menu
        fixed={'top'} borderless style={s.mn(s.h(50),s.p(0),s.m(0))}
      >
        <Menu.Item as='a' to="/" name='logo' onClick={this.handleItemClick}>
          <Image src='img/logo.png' size='tiny' style={s.mn(s.h(80),s.w(80),s.p(0),s.m(0))} />
        </Menu.Item>


        <Menu.Item>
        <Divider vertical/>
        </Menu.Item>


        <Menu.Menu>
        <Menu.Item as='a' to="/" name="main" onClick={this.handleItemClick}>
          Main
        </Menu.Item>
        {/*<Menu.Item as='a' to="/users" name="users" onClick={this.handleItemClick}>*/}
          {/*Users*/}
        {/*</Menu.Item>*/}
        {/*<Menu.Item as='a' to="/promises"  name="promises" onClick={this.handleItemClick}>*/}
          {/*Promises*/}
        {/*</Menu.Item>*/}
        </Menu.Menu>


        <Menu.Item>
        <Divider vertical/>
        </Menu.Item>


        <Menu.Menu>
        <Menu.Item as='a' to="/cabinet" name='cabinet' onClick={this.handleItemClick}>
        My cabinet
        </Menu.Item>
        </Menu.Menu>


        <Menu.Menu
          position='right'
        >
          <Input
            action={
              <Button
                basic
                style={s.mn(s.p(10))}
              >
                <Icon name='search' style={s.mn(s.m('10 10'),s.p(0))}/>
              </Button>
            }
            placeholder='Search...'
            style={s.mn(s.p(10))}
          />
        </Menu.Menu>

        <Menu.Item>
          { this.btnSign() }
        </Menu.Item>
      </Menu>
    )
  }


  htmlForMobile = () => {
    return (
      <Menu
        fixed={'top'} borderless style={s.mn(s.h(50),s.p(0),s.m(0))}
      >
        <Menu.Item as='a' to="/" name='logo' onClick={this.handleItemClick}>
          <Image src='img/logo.png' size='tiny' style={s.mn(s.h(80),s.w(80),s.p(0),s.m(0))} />
        </Menu.Item>
        <Menu.Menu
          position='right'
        >
          <Dropdown item icon='bars' simple direction='left'>
            <Dropdown.Menu>
              <Dropdown.Item as='a' to='/' onClick={this.handleItemClick}>Main</Dropdown.Item>
              {/*<Dropdown.Item as='a' to='/users' onClick={this.handleItemClick}>Users</Dropdown.Item>*/}
              {/*<Dropdown.Item as='a' to='/promises' onClick={this.handleItemClick}>Promises</Dropdown.Item>*/}
              <Dropdown.Divider />
              <Dropdown.Item as='a' to='/cabinet' onClick={this.handleItemClick}>Cabinet</Dropdown.Item>
              <Dropdown.Item>{ this.btnSign() }</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Menu>
    )
  }

  //////////////////////////////////////////

  componentDidMount() {
    this.updateWindowWidth();
    window.addEventListener("resize", this.updateWindowWidth.bind(this));
  }


  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowWidth.bind(this));
  }

}



export default withRouter(connect()(MenuMain))
