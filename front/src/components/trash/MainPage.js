/*eslint-disable no-unused-vars*/
/*eslint-disable no-unused-expressions*/
/*eslint-disable array-callback-return*/
import _ from 'lodash';
import React, { Component, createRef } from 'react';
import { Router, browserHistory, Route, Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import 'semantic-ui-css/semantic.min.css'
import { Ref, Popup, Input, Rating, Accordion, Rail, Sticky, Button, Container, Dropdown, Form, Grid, Header, Card, Dimmer, Icon, Image, Item, Label, Menu, List, Divider, Segment, Step, Table } from 'semantic-ui-react'
import { withCookies } from 'react-cookie';
//
import {cols, st} from '../../styles/style'
import * as PagesAndComponents from '../'
import * as Acts from '../../store/actions/actionsMain'
import * as ActsUX from '../../store/actions/actionsUX'
import configureStore from '../../store/configureStore'


/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////


class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allTickets: [],
      ticketType: 'econom',
      origin: 'LED',
      destination: 'SVO',
      dateFront: '',
      dateBack: '',
      time: '',
      dateTime: '',
      datesRange: '',
      passengers: 1,
      activeIndex: 0,
      items: 'items',
    };
    this.getPrices = this.getPrices.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  //
  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }
  handleClickBtn = async () => {
    await this.props.getPrices(this.state)
    console.log('Button',this.props)
  }
  //
  render() {
    const {
      allTickets,
      origin,
      destination,
      dateBack,
      dateFront,
      passengers,
      activeIndex,
      ticketType,
      userName,
    } = this.state

    return (
      <div className="App-body" style={{}}>


        {/* FormMain */}
        <div style={{...st.bgImage,...{padding:'4em 2em'}}} fluid="true">

          <Image centered src='logo.png' size='small' />

          <Header
            as='h2'
            content='Простой и быстрый поиск авиабилетов'
            style={{...st.h3, ...st.w,...st.txtShadowH, }} textAlign='center'
          />

          <PagesAndComponents.FormMain/>

        </div>






        {/* SearchResults */}
        <Container style={st.mn(st.m('0px'),st.p('10px'))}>
          { allTickets && allTickets.length === 0 ? null :
            <PagesAndComponents.SearchResults data={this.state}/>
          }

        </Container>




        {/* Лучшие предложения с проживанием из Москвы */}
        <Container fluid style={st.mn(st.p('10px'),st.m('5px'),st.tac)}>

          <Header
            as='h2'
            content='Лучшие предложения'
            style={st.mn(st.h2,st.w,st.tac)}
          />

          <Grid centered>
            <Grid.Column
              mobile={12} tablet={6} computer={4}
              style={st.mn(st.w,st.bordRou2,st.m('5px'),st.p('0px'))}
            >

              <Grid style={st.mn(st.m('0px'))}>
                <Grid.Row style={st.mn(st.p('0px'),st.m('0px'))}>
                  <Grid.Column width={10} style={st.mn(st.p('10px'),st.m('0px'))}>
                    Семейный отдых
                  </Grid.Column>
                  <Grid.Column width={5} style={st.mn(st.p('10px'),st.tar)}>
                    {/*-20%*/}
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row style={st.mn(st.p('0px'),st.m('0px'),{height:'30px'})}>
                  {/**/}
                </Grid.Row>
                <Grid.Row style={st.mn(st.p('0px'),st.m('0px'))}>
                  <Grid.Column width={10} style={st.mn(st.p('10px'))}>
                    Санкт-Петербург
                    <Header
                      as="h3"
                      style={st.mn(st.w)}
                    >от 20000 р.</Header>
                  </Grid.Column>
                  <Grid.Column width={5} style={st.mn(st.p('10px'),st.tar)}>
                    <p style={st.mn({position: 'absolute', bottom: '10px', right: '5px',})}>3 ночи</p>
                  </Grid.Column>
                </Grid.Row>
              </Grid>

            </Grid.Column>
            <Grid.Column
              mobile={12} tablet={6} computer={4}
              style={st.mn(st.w,st.bordRou2,st.m('5px'),st.p('10px'))}
            >
              2 <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
            </Grid.Column>
            <Grid.Column
              mobile={12} tablet={6} computer={4}
              style={st.mn(st.w,st.bordRou2,st.m('5px'),st.p('10px'))}
            >
              3 <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
            </Grid.Column>
            <Grid.Column
              mobile={12} tablet={6} computer={4}
              style={st.mn(st.w,st.bordRou2,st.m('5px'),st.p('10px'))}
            >
              4 <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
            </Grid.Column>
            <Grid.Column
              mobile={12} tablet={6} computer={4}
              style={st.mn(st.w,st.bordRou2,st.m('5px'),st.p('10px'))}
            >
              5 <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
            </Grid.Column>
            <Grid.Column
              mobile={12} tablet={6} computer={4}
              style={st.mn(st.w,st.bordRou2,st.m('5px'),st.p('10px'))}
            >
              6 <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
            </Grid.Column>
          </Grid>


          <Button
            style={st.mn({marginTop:'20px', width:'200px'})}
            content='Еще варианты'
            color='teal' basic
            // onClick={this.handleClickBtn()}
          />


        </Container>








        {/*Когда лучше покупать*/}
        {/*Календарь*/}
        {/*По месяцам*/}
        {/*По дням недели*/}

        {/*Куда полететь*/}
        {/*Случайно*/}
        {/*Карта с ценами*/}

        {/*Подписка*/}
        {/*Подписка на цену билетов, если она станет меньше*/}



        {/*Погода*/}
        {/*Погода в обоих пунктах*/}





        {/* Footer */}
        {/*<PagesAndComponents.Footer/>*/}


      </div>
    );
  }


  getPrices = async () => {
    //http://localhost:3000/купить_билет/из_LED_в_SVO_12-06-2019_24-06-2019_1_взрослый_бизнес-класс
    var limit = 20
    var {origin, destination, dateFront, dateBack, passengers} = this.state
    var link = `/из_${origin}_в_${destination}_${dateFront}_${dateBack}_${passengers}_взрослый_бизнес-класс`
    fetch('/api'+encodeURI('/купить_билет'+link))
      .then(res => res.json())
      .then(users => this.setState({allTickets:users}));
  }


  getAllTickets = (t) => {
    var res = []
    t.map((item,i) => {
      var s = ''
      for (var key in item) {
        s += item[key] + ' '
      }
      res.push(
        <div key={i}>
          <PagesAndComponents.Offer
            data={item}
          />
        </div>
      )
    })
    return res
  }


  handleChange = (e,n) => {
    var o = {}
    o[n] = e.target.value
    this.setState(o);
  }


  handleChangeCalendar = (event, {name, value}) => {
    if (this.state.hasOwnProperty(name)) {
      this.setState({ [name]: value });
    }
  }

  dateToLocal = (d) => {
    var dateOpts = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(d).toLocaleDateString('ru-RU',dateOpts)
  }

  componentWillMount = async () => {
    // let { dispatch } = this.props
    // this.props.getPrices(this.state)
    // this.props.getPricesRes('cascasc')
    await this.props.getPrices(this.state)
    this.setState({allTickets:this.props.items})
    // let tickets1 = await dispatch(Acts.getPrices(this.state))
    console.log('componentWillMount props',this.props)
    // console.log('componentWillMount store',this.props.items)
    // console.log('componentWillMount tickets',tickets)
    // console.log('componentWillMount store',store.getState())
    // console.log('componentWillMount tickets1',tickets1)
    // console.log('componentWillMount state',this.state)
    // this.setState({allTickets:tickets})
    // console.log('cookies before',this.props.cookies)
    // this.props.cookies.set('name', 'Boris', { path: browserHistory.getCurrentLocation().pathname })
    // console.log('cookies after',this.props.cookies.get('name'))
    if (this.props.cookies.get('name')) this.setState({userName:this.props.cookies.get('name')})
  }

}


/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////


const mapStateToProps = (state) => {
  // console.log('MainMenu mapStateToProps',state)
  return {
    items: state.getPricesRes.items,
    sidebarVisible: state.sidebarOpenClose.sidebarVisible,
    sidebarOpened: state.sidebarOpenClose.sidebarOpened,
  }
}


const mapDispatchToProps = dispatch => {
  return {
    getPrices: (items) => dispatch(Acts.getPrices(items)),
    sidebarToggle: () => dispatch(ActsUX.sidebarToggle()),
    sidebarClose: () => dispatch(ActsUX.sidebarClose()),
    sidebarOpen: () => dispatch(ActsUX.sidebarOpen()),
  };
}



export default withCookies(connect(mapStateToProps, mapDispatchToProps)(MainPage));


/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////



