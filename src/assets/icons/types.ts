import { SVGProps } from "react";

export type AnimatedSVGProps = SVGProps<SVGSVGElement> & {
  delay?: number;
};
