import { Equal, Expect } from "../helpers/type-utils";

type MYFC<P = {}> = MyFunctionComponent<P>;

interface MyFunctionComponent<P = {}> {
  (
      props: P,
      /**
       * @deprecated
       *
       * @see {@link https://legacy.reactjs.org/docs/legacy-context.html#referencing-context-in-lifecycle-methods React Docs}
       */
      deprecatedLegacyContext?: any,
  ): any;
  propTypes?: Partial<P> | undefined;

  contextTypes?: StringConstructor | undefined;
   /**  
   *
   * @deprecated Use {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#default_value|default values for destructuring assignments instead}.
   * @see {@link https://legacy.reactjs.org/docs/legacy-context.html Legacy React Docs}
   */
  defaultProps?: Partial<P> | undefined;
 
  displayName?: string | undefined;
}

/**
 * 1. We've got a bunch of different errors below. See if you can figure
 * out why the errors are happening.
 *
 * 2. Once you understand why the errors are happening, see if you can
 * find a way to fix them by changing the definition of TableProps.
 */
interface TableProps {
  //renderRow: (i: number)=>React.ReactNode;
  renderRow: React.FC<number>
  //foo: string;
}

// const myProps: TableProps ={ renderRow: 'sadsad'};
// const test = [0, 1, 3].map(()=>myProps.renderRow);


const Table = (props: TableProps) => {
  // return <div>{props.renderRow}</div>

  return <div>{[0, 1, 3].map(props.renderRow)}</div>;
};

export const Parent = () => {
  return (
    <>
      <Table
        // foo={"sad"}
        renderRow={(index) => {
          type test = Expect<Equal<typeof index, number>>;
          return <div key={index}>{index}</div>;
        }}
      />
      <Table
        // foo={"sad"}
        renderRow={(index) => {
          return null;
        }}
      />
      <Table
        // @ts-expect-error
        renderRow={<div></div>}
      />
      <Table
        // foo={"sad"}
        renderRow={(index) => {
          return index;
        }}
      />
    </>
  );
};
