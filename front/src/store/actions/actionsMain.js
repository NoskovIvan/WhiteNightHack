import fetch from 'node-fetch';
import * as types from './actionTypes';
const HOST = 'http://localhost:3001'


/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

// ADDING

/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////


export const addParkings =  (params) => {

  console.log('ACT addParkings',params)

  return (dispatch) => {
    return fetch(HOST+'/addparking')
     .then((res) => res.json())
     .then((items) => {
       // console.log('getPrices',items)
       dispatch(addParkingsRes(items))
     })
     .catch(() => dispatch(addParkingsRes()));

  }

}



export const addParkingsRes = (items) => {

  console.log('ACT addParkingsRes',items)

  return {
    type: items ? types.ADD_PARKING_SUCCESS : types.ADD_PARKING_ERR,
    payload: items,
  }

}


/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////


export const addChargers =  (params) => {

  console.log('ACT addChargers',params)

  return (dispatch) => {
    return fetch(HOST+'/addcharger')
     .then((res) => res.json())
     .then((items) => {
       // console.log('getPrices',items)
       dispatch(addChargersRes(items))
     })
     .catch(() => dispatch(addChargersRes()));

  }

}



export const addChargersRes = (items) => {

  console.log('ACT addChargersRes',items)

  return {
    type: items ? types.ADD_CHARGER_SUCCESS : types.ADD_CHARGER_ERR,
    payload: items,
  }

}

/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////


// FINDING


/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////


export const getParkings =  (params) => {

  console.log('ACT getPrices',params)

  return (dispatch) => {
    return fetch(HOST+'/search_parking')
     .then((res) => res.json())
     .then((items) => {
       // console.log('getPrices',items)
       dispatch(getParkingsRes(items))
     })
     .catch(() => dispatch(getParkingsRes()));

  }

}



export const getParkingsRes = (items) => {

  console.log('ACT getPricesRes',items)

  return {
    type: items ? types.FIND_PARKINGS_SUCCESS : types.FIND_PARKINGS_ERR,
    payload: items,
  }

}


/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////


export const getChargers =  (params) => {

  console.log('ACT getChargers',params)

  return (dispatch) => {
    return fetch(HOST+'/search_charger')
     .then((res) => res.json())
     .then((items) => {
       // console.log('getPrices',items)
       dispatch(getParkingsRes(items))
     })
     .catch(() => dispatch(getParkingsRes()));

  }

}



export const getChargersRes = (items) => {

  console.log('ACT getChargersRes',items)

  return {
    type: items ? types.FIND_CHARGERS_SUCCESS : types.FIND_CHARGERS_ERR,
    payload: items,
  }

}

/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////






/*
getPrices = async () => {
  //http://localhost:3000/купить_билет/из_LED_в_SVO_12-06-2019_24-06-2019_1_взрослый_бизнес-класс
  var {origin, destination, dateFront, dateBack, passengers} = this.state
  var link = `/из_${origin}_в_${destination}_${dateFront}_${dateBack}_${passengers}_взрослый_бизнес-класс`
  fetch('/api'+encodeURI('/купить_билет'+link))
    .then(res => res.json())
    .then(users => this.setState({allTickets:users}));
}
*/