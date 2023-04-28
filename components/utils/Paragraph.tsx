import { Fragment, ComponentPropsWithoutRef } from "react";

type ParagraphProps = ComponentPropsWithoutRef<"p">;
const Paragraph = (props: ParagraphProps) => {
  return (
    <Fragment>
      <p {...props}>{props.children}</p>
    </Fragment>
  );
};
export default Paragraph;
