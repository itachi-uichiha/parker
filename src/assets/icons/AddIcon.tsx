import { SVGProps } from "react";

export function AddIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill={props.fill} d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"></path>
    </svg>
  );
}
