

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
export const AddBlog = ( {title="", description="", dateAdded=0} ) => ({
  type:"ADD_BLOG",
  blog:{
    id:uuid(),// unick id
    title:title,
    description:description,
    dateAdded:dateAdded
  }
})

export const RemoveBlog =({id}) => ({
  type:"REMOVE_BLOG",
  id:id 
})
export const EditBlog = (id,updates) => ({
  type: "EDIT_BLOG",
  id,
  updates
})


