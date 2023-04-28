import React, { Fragment } from "react";

type ItemListProps = React.ComponentPropsWithoutRef<"li">;
const ItemList = (props: ItemListProps) => {
  return (
    <Fragment>
      <li {...props}>{props.children}</li>
    </Fragment>
  );
};

export default ItemList;
