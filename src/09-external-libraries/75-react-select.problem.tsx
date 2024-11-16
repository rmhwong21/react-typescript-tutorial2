import ReactSelect, { GroupBase, Props } from "react-select";
import { Equal, Expect } from "../helpers/type-utils";
import { StateManagerProps } from "react-select/dist/declarations/src/useStateManager";
import { ReactElement, RefAttributes } from "react";
import StateManagedSelect from "react-select/dist/declarations/src/stateManager";
import { boolean } from "zod";
//import Select from "react-select/dist/declarations/src/Select";

/**
 * 1. Try to figure out the types the props of the Select component should have,
 * including the generic types!
 *
 * Here's a clue: ReactSelect exports a type called 'Props'...
 */

// declare type StateManagedSelect = <Option = unknown, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>>
// (props: StateManagerProps<Option, IsMulti, Group> & RefAttributes<Select<Option, IsMulti, Group>>) => ReactElement;

type DefaultOption = { label: string; value: string }; // Default type for Option


// export const Select = <Option = unknown, IsMulti extends boolean = false ,Group extends GroupBase<Option> = GroupBase<Option>>(props:StateManagerProps<Option, IsMulti, Group> & RefAttributes<Select<Option, IsMulti, Group>> ) => {
//   return <ReactSelect {...props} />;
// };

// export const Select = <Option, IsMulti extends boolean = false ,Group extends GroupBase<Option> = GroupBase<Option>>(props:StateManagerProps<Option, IsMulti, Group> & RefAttributes<Select<Option, IsMulti, Group>> ) => {
//   return <ReactSelect {...props} />;
// };

export const Select =
<Option = unknown, 
IsMulti extends boolean = false ,
Group extends GroupBase<Option> = GroupBase<Option>>
(props: Props<Option, IsMulti, Group> //& {doSomething : boolean}

)=> {
  return <ReactSelect {...props} />;
};

// export const Select: StateManagedSelect = (props) => {
//   return <ReactSelect {...props} />;
// }

interface Option {
  id: number;
  label: string;
}

const guitarists: Option[] = [
  {
    id: 1,
    label: "Jimi Hendrix",
  },
  {
    id: 2,
    label: "Stevie Ray Vaughan",
  },
];

<>
  <Select
    options={guitarists}
    onChange={(option) => {
      // It should infer the type of option!
      // If isMulti is false, it should NOT be an array
type test2 = typeof option;

      type test = Expect<Equal<typeof option, Option | null>>;
    }}
  />

  <Select
    options={guitarists}
    isMulti
    onChange={(option) => {
      // If isMulti is true, it should be an array
      type test = Expect<Equal<typeof option, readonly Option[]>>;
    }}
  />
</>;
