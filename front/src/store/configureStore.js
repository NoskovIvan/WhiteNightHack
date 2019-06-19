/*eslint-disable no-unused-vars*/
import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'


export default function configureStore(initialState={}) {
  return createStore(
    reducers,
    initialState,
    applyMiddleware(thunk)
  )
}