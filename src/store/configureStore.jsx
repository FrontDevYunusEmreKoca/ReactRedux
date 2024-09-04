import { createStore,combineReducers } from 'redux';  // Redux'tan createStore'u içe aktar
import blogReducer from '../reducers/blog';
import authReducer from '../reducers/auth';


export default () =>{
        
const store = createStore( // store a iki tane reducer tanimladim
    combineReducers({
        blogs:blogReducer,
        auth:authReducer
    })
  )
  return store;
}
