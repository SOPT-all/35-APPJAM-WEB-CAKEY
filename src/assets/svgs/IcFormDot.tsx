import type { SVGProps } from 'react';
const SvgIcFormDot = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <circle cx={10} cy={10} r={1.5} fill="#454545" />
  </svg>
);
export default SvgIcFormDot;
