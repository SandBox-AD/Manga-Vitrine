import React, { Fragment } from "react";

type ListProps = React.ComponentPropsWithoutRef<"ul">;
const List = (props: ListProps) => {
  return (
    <Fragment>
      <ul {...props}>{props.children}</ul>
    </Fragment>
  );
};
export default List;
