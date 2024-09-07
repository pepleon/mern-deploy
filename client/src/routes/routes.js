import { lazy } from "react";
const Main = lazy( ()=> import("../components/Main"));
const Emails = lazy (()=> import("../components/Emails"));
const ViewEmails = lazy(()=> import("../components/ViewEmails"));

export const routes = {
   main: {
       path: '/',
       element: Main
   }, 
   emails: {
    path: '/email',
    element: Emails,
   },
   view: {
    path: '/view',
    element: ViewEmails,
   },
   invalid: {
       path: '/*',
       element: Emails,
   },



}