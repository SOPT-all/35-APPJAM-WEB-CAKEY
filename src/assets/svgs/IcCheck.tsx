import type { SVGProps } from 'react';
const SvgIcCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 28 28"
    {...props}
  >
    <path
      stroke="#1D1D1D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m6.417 14 5.25 5.833 10.5-11.666"
    />
  </svg>
);
export default SvgIcCheck;
