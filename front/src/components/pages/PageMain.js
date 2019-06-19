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

class PageMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: window.innerWidth <= 600,
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
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
  //
  render () {
    const {
      isMobile,
    } = this.state

    return (
      <Container>


        {/*<Header as='h2'>Main Page</Header>*/}

        {/*Filter*/}
        <Segment raised>
            <Header as='h3'>Options</Header>


            <Container>
              <PagesAndContainers.ModalForAll
                header={<Header icon='bitcoin' content='Book choosen item' />}
                trigger={
                  <Button icon color="orange">
                    <Icon name='bitcoin'/> BOOK choosen <Icon name='bitcoin'/>
                  </Button>
                }
                content={
                  <Form style={s.mn(s.w(400))}>
                    <Form.Group widths='equal'>
                      <Form.Input
                        fluid placeholder='Title'
                        label={<label style={s.mn(s.white)}>Title</label>}
                        style={s.mn(s.white)}
                      />
                    </Form.Group>
                    <Form.Group widths='equal'>
                      <Form.Button color="grey">18:00</Form.Button>
                      <Form.Button color="grey">18:20</Form.Button>
                      <Form.Button color="grey">18:40</Form.Button>
                    </Form.Group>
                    <Form.Button color="orange">BOOK</Form.Button>
                  </Form>
                }
              />
            </Container>
            {/*<Button color="orange" basic>Parkings</Button>*/}
            {/*<Button color="orange" basic>Chargers</Button>*/}
        </Segment>



        <Segment raised>
          <Grid stackable>

            {/*Map*/}
            <Grid.Row>


              <Grid.Column width={3} style={isMobile ? s.mn() : s.mn(s.h('80vh'))}>

                {
                  isMobile ? this.htmlListMobile() : this.htmlListDesktop()
                }

              </Grid.Column>



              <Grid.Column width={13} style={s.mn(s.h('80vh'))}>

                <PagesAndContainers.MapMain/>

              </Grid.Column>
            </Grid.Row>

          </Grid>
        </Segment>



      </Container>
    );
  }



  htmlListDesktop = () => {
    return (
      <Container>
        <Header as='h3'>List</Header>

        <Container>
          <Input placeholder='Search...' />
        </Container>


      </Container>
    )
  }



  htmlListMobile = () => {
    return (
      <Container>
        <PagesAndContainers.ModalForAll
          header={<Header icon='list' content='List' />}
          trigger={
            <Button icon basic color="black">
              <Icon name='bars'/>List
            </Button>
          }
          content={
            <Container>
              <Header as='h3'>List</Header>

              <Container>
                <Input placeholder='Search...' />
              </Container>

              <Container style={s.mn(s.m('15px 0'),{overflow: 'scroll',maxHeight:'65vh'})}>
                <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
              </Container>
            </Container>
          }
        />
      </Container>
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

export default PageMain;
