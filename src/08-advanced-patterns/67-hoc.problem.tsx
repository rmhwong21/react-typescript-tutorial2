import { Router, useRouter } from "fake-external-lib";


type ClickMe = React.ReactElement;
type ClickMeToo = JSX.Element;
type ClickMeThree = React.ReactNode;

export const withRouter = <Props,>(Component: React.ComponentType<Props>) => {
//export const withRouter = <Props,>(Component: (props: Props)=> React.ReactNode) => {
    const NewComponent = (props: Omit<Props, "router">) => {
    const router = useRouter();
    return <Component {...props as Props} router={router} />;
  };

  NewComponent.displayName = `withRouter(${Component.displayName})`;

  return NewComponent;
};

const UnwrappedComponent = (props: { router: Router; id: string }) => {
  return null;
};

const WrappedComponent = withRouter(UnwrappedComponent);

<>
  {/* @ts-expect-error needs a router! */}
  <UnwrappedComponent id="123" />

  {/* Doesn't need a router passed in! */}
  <WrappedComponent id="123" />

  <WrappedComponent
    // @ts-expect-error id must be the correct property
    id={123}
  />
</>;
