/**
 * 1. What is JSX.IntrinsicElements? CMD-click on .IntrinsicElements below
 * to go to its definition.
 *
 * Hint - remember to go to the original definition of JSX.IntrinsicElements
 * in @types/react/index.d.ts.
 */

export type Example = JSX.IntrinsicElements;

// declare global {
//     /**
//      * @deprecated Use `React.JSX` instead of the global `JSX` namespace.
//      */
//     namespace JSX {
//         interface IntrinsicElements {
//             myNewElement: {
//                foo: string;
//             }
//         }
//     }
// }

/**
 * 2. What is the structure of JSX.IntrinsicElements? It appears to have the
 * HTML attributes as properties, but what are the values?
 *
 * 3. Let's have some fun. Edit the file to add a new property to
 * JSX.IntrinsicElements:
 *
 * interface IntrinsicElements {
 *   // ...
 *   myNewElement: {
 *     foo: string;
 *   }
 * }
 *
 * Notice that the error below goes away!
 *
 * 4. Now change it back, before anyone notices.
 */

<myNewElement foo="123" />;
