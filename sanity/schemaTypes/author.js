import { defineField } from "sanity";

// author.js in your Sanity schema
export default {
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    defineField({ 
    name: 'name',
    title: 'Name',  
    type: 'string' }),
    defineField({ 
    name: 'email',
    title: 'Email', 
    type: 'string' }),
    defineField({ 
    name: 'oauthId',
    title: 'OauthId',  
    type: 'string' }), // required to match OAuth user
    defineField({ 
    name: 'image',
    title: 'Image', 
    type: 'url' }),
  ],
}
