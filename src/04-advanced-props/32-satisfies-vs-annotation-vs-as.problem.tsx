import { ComponentProps } from "react";
import { Equal, Expect } from "../helpers/type-utils";

//==============================================
type Person = {
  name: string;
  age: number;
};

const person = {
  name: "Alice",
  //age: 12
} as Person // vs satisfies Person
//==============================================

const buttonProps = {
  type: "button",
  // @ts-expect-error
  illegalProperty: "I AM ILLEGAL",
}  satisfies ComponentProps<"button">;

// //Doesn't really Work, allowed to pass in illegalProperty
// const buttonProps2 = {
//   type: "button",
//   // @ts-expect-error
//   illegalProperty: "I AM ILLEGAL",
// } as const ;

// //Doesn't really Work,  type  now "button|Submit|reset"
// const buttonProps3:ComponentProps<"button">  = {
//   type: "button",
//   // @ts-expect-error
//   illegalProperty: "I AM ILLEGAL",
// };

<>
  <button {...buttonProps}>Click Me!</button>
</>;

const buttonPropType = buttonProps.type;

type test = Expect<Equal<typeof buttonPropType, "button">>;
//type test2 = Expect<Equal<typeof buttonProps2.type, "button">>;