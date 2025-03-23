import type { SVGProps } from 'react';
const SvgIcXCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <rect width={16} height={16} x={2} y={2} fill="#828282" rx={8} />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m13 7-6 6M7 7l6 6"
    />
  </svg>
);
export default SvgIcXCircle;
