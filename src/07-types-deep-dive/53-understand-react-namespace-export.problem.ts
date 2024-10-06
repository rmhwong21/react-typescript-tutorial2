import React from "react";

/**
 * Questions to answer:
 */

// 1. What is the React namespace?
type Example = React.ReactNode;
//             ^?

/**
 * export = React;  
 * so that we can do import React from 'react' instead of import {React} from 'react'
 * 
 * 
 * export as namespace React;
 * so that we can access react globally e.g.  React.<Whatever>
 */


//declare namespace React {

// declare global {
//     namespace React {}
//   }

/**
 * 2. How come React can be used BOTH as a value and a type?
 *
 * HINT - we're adding LOTS of things to React's namespace in
 * later exercises, so make sure when you go-to-definition you
 * go to its original definition, in @types/react/index.d.ts.
 */

/**
 * 
 * export = React;
 * export as namespace React;
 */
const element = React.createElement("div");
//              ^?

export {};
