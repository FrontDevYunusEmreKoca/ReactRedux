import React, { act } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRouter from './routers/AppRouter';
import './App.css';
import { createStore,combineReducers } from 'redux';  // Redux'tan createStore'u içe aktar
import { type } from '@testing-library/user-event/dist/type';
import {v4 as uuid } from "uuid"; // id seklinde benzersiz kimlik



// const initialState  = {
//   blogs:[
//     {
//       id:1,
//       title: "Blog Title 1",
//       description: "Blog Desciription 1",
//       dateAdded:0
//     }
//   ],
//   auth:{
//     userid:1,
//     username:"YunusEmre",
//     email:"info@YunusEmre.com"
//   }
// }
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

const RemoveBlog =({id}) => ({
  type:"REMOVE_BLOG",
  id:id 
})
const EditBlog = (id,updates) => ({
  type: "EDIT_BLOG",
  id,
  updates
})

const blogState = []

const blogReducer = (state = blogState ,action) =>{
  switch(action.type){
    case "ADD_BLOG":
      return [
        ...state,
        action.blog
      ]
    case "REMOVE_BLOG":
      return state.filter(({ id }) => {
        return id !== action.id;
      })
    case "EDIT_BLOG":
      return state.map((blog) => {
        if(blog.id === action.id){
            return {
              ...blog,
              ...action.updates
            }
        }
        else{
          return blog;
        }
      })
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

const blog1 = store.dispatch(AddBlog({title: "blog title4", description:"blog description4"}))
const blog2 = store.dispatch(AddBlog({title: "blog title42", description:"blog description42"}))
// console.log(blog1.blog.id)
store.dispatch(RemoveBlog({id:blog1.blog.id}))
store.dispatch(EditBlog(blog2.blog.id, {title:"updated blog title"}))



// Render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
