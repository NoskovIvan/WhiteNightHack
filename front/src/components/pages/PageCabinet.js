import React, { Component, createRef } from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Ref, Popup, Input, Rating, Accordion, Rail, Sticky, Button, Container, Dropdown, Form, Grid, Header, Card, Dimmer, Icon, Modal, Checkbox, Image, Item, Label, Menu, List, Divider, Segment, Step, Table } from 'semantic-ui-react'
import { connect } from 'react-redux';
//
import {s,cols} from '../../styles/style'
import * as PagesAndContainers from '../'
import * as Acts from '../../store/actions/actionsMain'


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

class PageCabinet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allTickets: [],
      signInOrUp: true,
      newPromiseType: true,
      parkings: true,
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
      parkings,
    } = this.state

    return (
      <Container>
        <Header as='h2'>My Parkings and Charges</Header>

        <Button
          icon color="orange"
          onClick={()=>{this.setState({parkings:true})}}
        >
          {/*<Icon name='plus' /> */}
          Parkings
        </Button>
        <Button
          icon color="orange"
          onClick={()=>{this.setState({parkings:false})}}
        >
          {/*<Icon name='plus' /> */}
          Charges
        </Button>


        {
          parkings ? this.htmlAddNewParking() : this.htmlAddNewCharge()
        }

        {
          parkings ? this.htmlMyParkings() : this.htmlMyCharges()
        }





      </Container>
    );
  }



  htmlAddNewCharge = () => {
    return (
      <Segment raised>
        <Header as='h3'>New Charge</Header>

        <Form>
          <Form.Group widths='equal'>
            <Form.Input fluid label='Title' placeholder='Title' />
          </Form.Group>
          <Form.Input label='Cost' placeholder='Cost per hour...' />
          <Form.Input label='Latitude' placeholder='30.34113' />
          <Form.Input label='Longitude' placeholder='59.91523' />
          <Form.Field>
            <Header as='h5'>Geoposition</Header>

            <List>
              <List.Item>
                <List.Icon name='marker' />
                <List.Content>
                  <PagesAndContainers.ModalForAll
                    header={<Header icon='map' content='Map' />}
                    trigger={
                      <a>RF, Saint-Petersburg</a>
                    }
                    content={
                      <PagesAndContainers.MapPick/>
                    }
                  />
                </List.Content>
              </List.Item>
            </List>
          </Form.Field>
          <Form.Button
            color="orange"
            onClick={()=>{
              this.props.addParking()
            }}
          >
            Public
          </Form.Button>
        </Form>
      </Segment>
    )
  }



  htmlAddNewParking = () => {
    return (
      <Segment raised>
        <Header as='h3'>New Parking</Header>

        <Form>
          <Form.Group widths='equal'>
            <Form.Input fluid label='Title' placeholder='Title' />
          </Form.Group>
          <Form.Input label='Cost' placeholder='Cost per hour...' />
          <Form.Input label='Latitude' placeholder='30.34113' />
          <Form.Input label='Longitude' placeholder='59.91523' />
          <Form.Field>
            <Header as='h5'>Geoposition</Header>

            <List>
              <List.Item>
                <List.Icon name='marker' />
                <List.Content>
                  <PagesAndContainers.ModalForAll
                    header={<Header icon='map' content='Map' />}
                    trigger={
                      <a>RF, Saint-Petersburg</a>
                    }
                    content={
                      <PagesAndContainers.MapPick/>
                    }
                  />
                </List.Content>
              </List.Item>
            </List>
          </Form.Field>
          <Form.Button
            color="orange"
            onClick={()=>{
              this.props.addCharger()
            }}
          >
            Public
          </Form.Button>
        </Form>
      </Segment>
    )
  }


  htmlMyParkings = () => {
    return (
      <Segment raised>
        <Grid celled stackable>

          <Grid.Row>
            <Grid.Column>
              <Header as='h3'>My Parkings</Header>
              <PagesAndContainers.ModalForAll
                header={<Header icon='map' content='Map' />}
                trigger={
                  <Button icon basic color="teal">
                    <Icon name='map' /> Show all on map
                  </Button>
                }
                content={
                  <PagesAndContainers.MapShow/>
                }
              />
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
      </Segment>
    )
  }



  htmlMyCharges = () => {
    return (
      <Segment raised>
        <Grid celled stackable>

          <Grid.Row>
            <Grid.Column>
              <Header as='h3'>My Charges</Header>
              <PagesAndContainers.ModalForAll
                header={<Header icon='map' content='Map' />}
                trigger={
                  <Button icon basic color="teal">
                    <Icon name='map' /> Show all on map
                  </Button>
                }
                content={
                  <PagesAndContainers.MapShow/>
                }
              />
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
      </Segment>
    )
  }


  ////////////////////////////////////////////

  addParking() {
    const {} = this.state
    fetch(`/addparking`)
      .then(res => res.json())
      .then(res => this.setState({parking:res}));
  }


  addCharge() {
    const {} = this.state
    fetch(`/addcharge`)
      .then(res => res.json())
      .then(res => this.setState({parking:res}));
  }


  ////////////////////////////////////////////

}

////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////


const mapStateToProps = (state) => {
  // console.log('MainMenu mapStateToProps',state)
  return {
    parkings: state.addParkingsRes.items,
    chargers: state.addChargersRes.items,
  }
}


const mapDispatchToProps = dispatch => {
  return {
    addParking: (items) => dispatch(Acts.addParkings(items)),
    addCharger: (items) => dispatch(Acts.addChargers(items)),
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(PageCabinet);

// export default PageCabinet;
