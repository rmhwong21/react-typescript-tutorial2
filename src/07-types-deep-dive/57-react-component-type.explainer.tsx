type types = [React.ElementType, React.ComponentType];

/**
 * ElementType
 *
 * Lets you specify certain types of elements
 * which can receive those props.
 *
 * For instance, Example accepts 'audio' and 'video'!
 * As well as ComponentType<P>
 */
export type Example = React.ElementType<{
  autoPlay?: boolean;
}>;

/**
 * ComponentType
 */

// const FunctComponent2 = (props: {propX: string}) =>{
//     return null;
// }

const FuncComponent = (props: { prop1: string }) => {
  return null;
};

// class ClassComponent2 extends React.Component<{propX: string}>
// {
//   render(): React.ReactNode {
//     this.props.propX;
//     return null;
//   }
// }

class ClassComponent extends React.Component<{
  prop1: string;
}> {
  render(): React.ReactNode {
    this.props.prop1;
    return null;
  }
}

const tests2: Array<React.ComponentType<{ prop1: string}>> = [
  //FunctComponent2,
  FuncComponent,
  ClassComponent,
];
