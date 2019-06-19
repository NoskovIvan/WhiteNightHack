import * as types from '../actions/actionTypes';

const initialState = {
  // isModalPhotoOpen: false,
  items: [],
};




export const addParkingsRes = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_PARKING_SUCCESS:
      console.log('RED ADD_PARKING_SUCCESS',action.payload)
      state = {
        ...state,
        items: action.payload
      }
      break
    case types.ADD_PARKING_ERR:
      console.log('RED ADD_PARKING_ERR')
      state = {
        ...state,
        items: {}
      }
      break
    // default:
    //   return state;
  }
  return state;
}




export const addChargersRes = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_CHARGER_SUCCESS:
      console.log('RED ADD_CHARGER_SUCCESS',action.payload)
      state = {
        ...state,
        items: action.payload
      }
      break
    case types.ADD_CHARGER_ERR:
      console.log('RED ADD_CHARGER_ERR')
      state = {
        ...state,
        items: {}
      }
      break
    // default:
    //   return state;
  }
  return state;
}



/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////



export const getParkingsRes = (state = initialState, action) => {
  switch (action.type) {
    case types.FIND_PARKINGS_SUCCESS:
      console.log('RED FIND_PARKINGS_SUCCESS',action.payload)
      state = {
        ...state,
        items: action.payload
      }
      break
    case types.FIND_PARKINGS_ERR:
      console.log('RED FIND_PARKINGS_ERR')
      state = {
        ...state,
        items: {}
      }
      break
    // default:
    //   return state;
  }
  return state;
}




export const getChargersRes = (state = initialState, action) => {
  switch (action.type) {
    case types.FIND_CHARGERS_SUCCESS:
      console.log('RED FIND_CHARGERS_SUCCESS',action.payload)
      state = {
        ...state,
        items: action.payload
      }
      break
    case types.FIND_CHARGERS_ERR:
      console.log('RED FIND_CHARGERS_ERR')
      state = {
        ...state,
        items: {}
      }
      break
    // default:
    //   return state;
  }
  return state;
}

