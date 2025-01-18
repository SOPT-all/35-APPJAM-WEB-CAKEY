import type { SVGProps } from 'react';
const SvgIcLineLocation = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g stroke="#1D1D1D" strokeLinejoin="round" strokeWidth={1.5}>
      <path
        strokeLinecap="square"
        d="M20.733 10c0 6-8.866 13-8.866 13S3 16 3 10c0-4.902 4.037-9 8.867-9 1.352 0 2.643.321 3.8.892 5.066 2.775 1.266 7.052-.634 5.22C13.42 5.552 17.48 3.443 22 5.888"
      />
      <path
        strokeLinecap="round"
        d="M11.75 13.5a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5"
      />
    </g>
  </svg>
);
export default SvgIcLineLocation;
