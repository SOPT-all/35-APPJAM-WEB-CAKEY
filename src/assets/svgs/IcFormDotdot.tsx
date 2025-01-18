import type { SVGProps } from 'react';
const SvgIcFormDotdot = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 10 20"
    {...props}
  >
    <circle cx={5} cy={7} r={1} fill="#454545" />
    <circle cx={5} cy={13} r={1} fill="#454545" />
  </svg>
);
export default SvgIcFormDotdot;
