import { ReactNode } from "react";

export default function ContentContainer(props: { children: ReactNode }) {
  return <main>{props.children}</main>;
}
