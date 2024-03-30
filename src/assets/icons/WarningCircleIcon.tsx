import { SVGProps } from "react";

export function WarningCircleIcon(props: SVGProps<SVGSVGElement>) {
  const { stroke = "#fff" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="none"
        stroke={stroke}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="M12 7v6m0 4.01l.01-.011M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"
      ></path>
    </svg>
  );
}
