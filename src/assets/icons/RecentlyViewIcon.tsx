import { SVGProps } from "react";

export function RecentlyViewedIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 32 32"
      {...props}
    >
      <path fill={props.fill} d="M20.59 22L15 16.41V7h2v8.58l5 5.01z"></path>
      <path
        fill={props.fill}
        d="M16 2A13.94 13.94 0 0 0 6 6.23V2H4v8h8V8H7.08A12 12 0 1 1 4 16H2A14 14 0 1 0 16 2"
      ></path>
    </svg>
  );
}
