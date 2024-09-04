import React, { act } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import AppRouter from './routers/AppRouter';
import './App.css';
import configureStore from './store/configureStore';
import {AddBlog,RemoveBlog,EditBlog} from "./actions/blogs"

const store= configureStore();

store.subscribe(()=> {
  console.log(store.getState())
})

const blog1 = store.dispatch(AddBlog({title: "blog title4", description:"blog description4"}))
const blog2 = store.dispatch(AddBlog({title: "blog title 2", description:"blog description"}))
const blog3 = store.dispatch(AddBlog({title: "blog title3", description:"blog description"}))
const blog4 = store.dispatch(AddBlog({title: "blog title5", description:"blog description"}))
// console.log(blog1.blog.id)
store.dispatch(RemoveBlog({id:blog1.blog.id}))
store.dispatch(EditBlog(blog2.blog.id, {title:"updated blog title"}))



// Render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
