import { include } from 'named-urls'

export default {
   home: '/',
   posts: '/posts',

   // route with optional params
   // messages: '/messages/:messageId?',

   // Routes with common path prefix
   post: include('/post', {     
     // Relative urls (prefixed with /post)
     show: ':id',
     add: 'add',
     edit: 'edit/:id'

     // Absolute url (ignore /post prefix)
     //login: '/login/',
   }),

   // Routes with params
  //  messages: include('/messages', {
  //     all: '',
  //     unread: 'unread/',

  //     // nesting of includes is allowed
  //     detail: include(':messageId/', {
  //        show: '',
  //        edit: 'edit/',
  //        comments: 'comments/',
  //     })
  //  })
   
}