import { Fragment, ComponentPropsWithoutRef } from "react";

type TitleProps = ComponentPropsWithoutRef<"h1">;
const Title = (props: TitleProps) => {
  return (
    <Fragment>
      <h1 {...props}>{props.children}</h1>
    </Fragment>
  );
};

type TitleSecondaryProps = ComponentPropsWithoutRef<"h2">;
const TitleSecondary = (props: TitleSecondaryProps) => {
  return (
    <Fragment>
      <h2 {...props}>{props.children}</h2>
    </Fragment>
  );
};

export { Title, TitleSecondary };
