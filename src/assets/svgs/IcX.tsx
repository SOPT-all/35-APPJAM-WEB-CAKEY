import type { SVGProps } from 'react';
const SvgIcX = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 30 30"
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m23.125 6.875-16.25 16.25M6.875 6.875l16.25 16.25"
    />
  </svg>
);
export default SvgIcX;
