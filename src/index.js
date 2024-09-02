import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRouter from './routers/AppRouter';
import "./App.css"


import {createStore} from "redux"

const initialState = {
  count:5
}

//store
const store = createStore((state =  initialState) =>{
  return state
})


// getState
console.log(store.getState())


// increment , decrement ,reset => actions (object)

// dispacth 

// reducers


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
