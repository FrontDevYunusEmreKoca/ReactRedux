import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRouter from './routers/AppRouter';
import './App.css';
import { createStore,combineReducers } from 'redux';  // Redux'tan createStore'u içe aktar
import { type } from '@testing-library/user-event/dist/type';
import {v4 as uuid } from "uuid";


const initialState  = {
  blogs:[
    {
      id:1,
      title: "Blog Title 1",
      description: "Blog Desciription 1",
      dateAdded:0
    }
  ],
  auth:{
    userid:1,
    username:"YunusEmre",
    email:"info@YunusEmre.com"
  }
}
//ACTIONS CREATER
const AddBlog = ( {title="", description="", dateAdded=0} ) => ({
  type:"ADD_BLOG",
  blog:{
    id:uuid(),// unick id
    title:title,
    description:description,
    dateAdded:dateAdded
  }
})

const blogState = []

const blogReducer = (state = blogState ,action) =>{
  switch(action.type){
    case "ADD_BLOG":
      return [
        ...state,
        action.blog
      ]
    default:
      return state;
  }
}

const authState = {};

const authReducer = (state = authState ,action) =>{
  switch(action.type){
    default:
      return state;
  }
}

const store = createStore( // store a iki tane reducer tanimladim
  combineReducers({
      blogs:blogReducer,
      auth:authReducer
  })
)

store.subscribe(()=> {
  console.log(store.getState())
})

store.dispatch(AddBlog({title: "blog title4", description:"blog description4"}))


// Render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
