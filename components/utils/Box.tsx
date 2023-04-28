import React, { Fragment } from "react";

type BoxProps = React.ComponentPropsWithoutRef<"div">;
const Box = (props: BoxProps) => {
  return (
    <Fragment>
      <div {...props}>{props.children}</div>
    </Fragment>
  );
};
export default Box;
