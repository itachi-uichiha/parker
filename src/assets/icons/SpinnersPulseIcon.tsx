import { AnimatedSVGProps } from "./types";

export function SpinnersPulseIcon(props: AnimatedSVGProps) {
  const { delay = 0, fill = "#fff" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <circle cx="12" cy="12" r="0" fill={fill}>
        <animate
          attributeName="r"
          calcMode="spline"
          dur="1.2s"
          keySplines=".52,.6,.25,.99"
          repeatCount="indefinite"
          values="0;11"
          begin={`${delay}s`}
        ></animate>
        <animate
          attributeName="opacity"
          calcMode="spline"
          dur="1.2s"
          keySplines=".52,.6,.25,.99"
          repeatCount="indefinite"
          values="1;0"
          begin={`${delay}s`}
        ></animate>
      </circle>
    </svg>
  );
}
