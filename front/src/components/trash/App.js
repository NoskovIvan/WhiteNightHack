import React, { Component, createRef } from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Ref, Popup, Input, Rating, Accordion, Rail, Sticky, Button, Container, Dropdown, Form, Grid, Header, Card, Dimmer, Icon, Modal, Checkbox, Image, Item, Label, Menu, List, Divider, Segment, Step, Table } from 'semantic-ui-react'
//
import {s,cols} from './styles/style'
import * as PagesAndContainers from './components'


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

        {/*MenuMain*/}
        <PagesAndContainers.MenuMain/>


        {/*Page*/}
        <Container fluid style={s.mn(s.m('70px 0'),s.p(0))}>


          {/*MainPage*/}
          <Container fluid>
            <Header as='h2'>Main Page</Header>
            <Grid celled>

              {/*Headers*/}
              <Grid.Row>
                <Grid.Column width={3}>
                  <Header as='h3'>Users</Header>
                  <Input placeholder='Search user...' />
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header as='h3'>All Promises / PromisesOfUser</Header>
                  <Input placeholder='Search promise...' />
                </Grid.Column>
                <Grid.Column width={10}>
                  <Header as='h3'>Read Promise</Header>
                </Grid.Column>
              </Grid.Row>

              {/*Content*/}
              <Grid.Row>
                <Grid.Column width={3} style={{overflow: 'auto', maxHeight: 300 }}>

                  <List selection>
                    <List.Item>
                      <List.Content>
                        <List.Header as='a'>
                          <Image avatar src='https://react.semantic-ui.com/images/avatar/small/rachel.png' />
                          Rachel
                        </List.Header>
                        <List.Description>
                          Last seen watching{' '}
                          <a>
                            <b>Arrested Development</b>
                          </a>{' '}
                          just now.
                        </List.Description>
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Content>
                        <List.Header as='a'>
                          <Image avatar src='https://react.semantic-ui.com/images/avatar/small/lindsay.png' />
                          Lindsay
                        </List.Header>
                        <List.Description>
                          Last seen watching{' '}
                          <a>
                            <b>Bob's Burgers</b>
                          </a>{' '}
                          10 hours ago.
                        </List.Description>
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Content>
                        <List.Header as='a'>
                          <Image avatar src='https://react.semantic-ui.com/images/avatar/small/matthew.png' />
                          Matthew
                        </List.Header>
                        <List.Description>
                          Last seen watching{' '}
                          <a>
                            <b>The Godfather Part 2</b>
                          </a>{' '}
                          yesterday.
                        </List.Description>
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Content>
                        <List.Header as='a'>
                          <Image avatar src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
                          Jenny Hess
                        </List.Header>
                        <List.Description>
                          Last seen watching{' '}
                          <a>
                            <b>Twin Peaks</b>
                          </a>{' '}
                          3 days ago.
                        </List.Description>
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Content>
                        <List.Header as='a'>
                          <Image avatar src='https://react.semantic-ui.com/images/avatar/small/veronika.jpg' />
                          Veronika Ossi
                        </List.Header>
                        <List.Description>Has not watched anything recently</List.Description>
                      </List.Content>
                    </List.Item>
                  </List>

                </Grid.Column>
                <Grid.Column width={3}>
                  <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                </Grid.Column>
                <Grid.Column width={10}>
                  <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>


          {/*UsersPage*/}
          <Container fluid>
            <Header as='h2'>Users Page</Header>
            <Grid celled>
              <Grid.Row>
                <Grid.Column width={3}>
                  <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                </Grid.Column>
                <Grid.Column width={13}>
                  <Image src='https://react.semantic-ui.com/images/wireframe/centered-paragraph.png' />
                </Grid.Column>
              </Grid.Row>

              <Grid.Row>
                <Grid.Column width={3}>
                  <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                </Grid.Column>
                <Grid.Column width={10}>
                  <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                </Grid.Column>
                <Grid.Column width={3}>
                  <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>


          {/*UserPage*/}
          <Container fluid>
            <Header as='h2'>User Page</Header>
            <Grid celled stackable>

              <Grid.Row>
                <Grid.Column width={16} style={s.mn(s.tac,s.aic)}>
                  <Header as='h3'>Avatar and big picture</Header>
                  <Image style={s.mn(s.h(150))} src='https://react.semantic-ui.com/images/wireframe/image.png' />
                </Grid.Column>
              </Grid.Row>

              <Grid.Row>
                <Grid.Column width={16}>
                  <Header as='h3'>Description</Header>
                  <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                </Grid.Column>
              </Grid.Row>

              <Grid.Row>
                <Grid.Column>
                  <Header as='h3'>User's Promises</Header>

                  <Grid celled stackable>
                    <Grid.Row>
                      <Grid.Column width={3}>
                        <Header as='h4'>Title</Header>
                        Video
                        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                      </Grid.Column>
                      <Grid.Column width={3}>
                        <Header as='h4'>Title</Header>
                        Audio
                        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                      </Grid.Column>
                      <Grid.Column width={3}>
                        <Header as='h4'>Title</Header>
                        Text
                        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                      </Grid.Column>
                      <Grid.Column width={3}>
                        <Header as='h4'>Title</Header>
                        Image and text
                        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                      </Grid.Column>
                      <Grid.Column width={3}>
                        <Header as='h4'>Title</Header>
                        Text
                        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                      </Grid.Column>
                      <Grid.Column width={3}>
                        <Header as='h4'>Title</Header>
                        Text
                        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                      </Grid.Column>
                      <Grid.Column width={3}>
                        <Header as='h4'>Title</Header>
                        Text
                        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>


          {/*PromisesPage*/}
          <Container fluid>
            <Header as='h2'>Promises Page</Header>
            <Grid celled>
              <Grid.Row>
                <Grid.Column width={3}>
                  <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                </Grid.Column>
                <Grid.Column width={13}>
                  <Image src='https://react.semantic-ui.com/images/wireframe/centered-paragraph.png' />
                </Grid.Column>
              </Grid.Row>

              <Grid.Row>
                <Grid.Column width={3}>
                  <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                </Grid.Column>
                <Grid.Column width={10}>
                  <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                </Grid.Column>
                <Grid.Column width={3}>
                  <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>



          {/*MyCabinetPage*/}
          <Container fluid>
            <Header as='h2'>My Cabinet Page</Header>
            <Grid celled stackable>

              <Grid.Row>
                <Grid.Column width={16} style={s.mn(s.tac,s.aic)}>
                  <Header as='h3'>Avatar and big picture</Header>

                  <Button
                    basic color="grey"
                    style={s.mn(s.p('5px 10px'),s.m(5))}
                    onClick={()=>{this.setState({changeMyAvatar:true})}}
                  >
                    Change
                  </Button>
                  <Image style={s.mn(s.h(150))} src='https://react.semantic-ui.com/images/wireframe/image.png' />
                </Grid.Column>
              </Grid.Row>

              <Grid.Row>
                <Grid.Column width={16}>
                  <Header as='h3'>Description</Header>

                  <Button
                    basic color="grey"
                    style={s.mn(s.p('5px 10px'),s.m(5))}
                    onClick={()=>{this.setState({changeMyDesc:true})}}
                  >
                    Change
                  </Button>
                  <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                </Grid.Column>
              </Grid.Row>

              <Grid.Row>
                <Grid.Column>
                  <Header as='h3'>My Promises</Header>

                  <Grid celled stackable>
                    <Grid.Row>
                      <Grid.Column>
                        <Header as='h4'>New Promise</Header>

                        <Form>
                          <Form.Group widths='equal'>
                            <Form.Input fluid label='Title' placeholder='Title' />
                            {/*<Form.Select fluid label='Type' options={options} placeholder='Type' />*/}
                          </Form.Group>
                          <Form.TextArea label='Text' placeholder='Text of promise...' />
                          {/*<Form.Checkbox label='I agree to the Terms and Conditions' />*/}
                          <Form.Field>
                            <Header as='h5'>List of attachments</Header>

                            <List>
                              <List.Item>
                                <List.Icon name='file' />
                                <List.Content>
                                  <a href='http://www.semantic-ui.com'>file.txt</a>
                                </List.Content>
                              </List.Item>
                              <List.Item>
                                <List.Icon name='marker' />
                                <List.Content>
                                  <PagesAndContainers.ModalMap
                                    trigger={
                                      <a>USA, Washington</a>
                                    }
                                  />
                                </List.Content>
                              </List.Item>
                              <List.Item>
                                <List.Icon name='photo' />
                                <List.Content>
                                  <a href='mailto:jack@semantic-ui.com'>jack@semantic-ui.com</a>
                                </List.Content>
                              </List.Item>
                              <List.Item>
                                <List.Icon name='video' />
                                <List.Content>
                                  <a href='http://www.semantic-ui.com'>semantic-ui.com</a>
                                </List.Content>
                              </List.Item>
                            </List>
                          </Form.Field>
                          <Form.Field>
                            <Button.Group>
                              {/*<Button icon basic onClick={this.handleLoadFile}>*/}
                                {/*<Icon name='file' />*/}
                                {/*<input*/}
                                  {/*type="file" id="file"*/}
                                  {/*ref={this.inputOpenFileRef}*/}
                                  {/*style={{display: "none"}}*/}
                                {/*/>*/}
                              {/*</Button>*/}
                              <PagesAndContainers.ModalFiles
                                trigger={
                                  <Button icon basic>
                                    <Icon name='file' />
                                  </Button>
                                }
                              />
                              <PagesAndContainers.ModalCamera
                                trigger={
                                  <Button icon basic>
                                    <Icon name='photo' />
                                  </Button>
                                }
                              />
                              <PagesAndContainers.ModalCamera
                                trigger={
                                  <Button icon basic>
                                    <Icon name='video' />
                                  </Button>
                                }
                              />
                              <PagesAndContainers.ModalCamera
                                trigger={
                                  <Button icon basic>
                                    <Icon name='sound' />
                                  </Button>
                                }
                              />
                              <PagesAndContainers.ModalMap
                                trigger={
                                  <Button icon basic>
                                    <Icon name='point' />
                                  </Button>
                                }
                              />
                            </Button.Group>
                          </Form.Field>
                          <Form.Button basic color="orange">Public</Form.Button>
                        </Form>
                      </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                      <Grid.Column width={3}>
                        <Header as='h4'>Title</Header>
                        Video
                        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                      </Grid.Column>
                      <Grid.Column width={3}>
                        <Header as='h4'>Title</Header>
                        Audio
                        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                      </Grid.Column>
                      <Grid.Column width={3}>
                        <Header as='h4'>Title</Header>
                        Text
                        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                      </Grid.Column>
                      <Grid.Column width={3}>
                        <Header as='h4'>Title</Header>
                        Image and text
                        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                      </Grid.Column>
                      <Grid.Column width={3}>
                        <Header as='h4'>Title</Header>
                        Text
                        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                      </Grid.Column>
                      <Grid.Column width={3}>
                        <Header as='h4'>Title</Header>
                        Text
                        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                      </Grid.Column>
                      <Grid.Column width={3}>
                        <Header as='h4'>Title</Header>
                        Text
                        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>



        </Container>
      </div>
    );
  }

}

export default App;
