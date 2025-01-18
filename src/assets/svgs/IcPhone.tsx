import type { SVGProps } from 'react';
const SvgIcPhone = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#ic_phone_svg__a)">
      <path
        stroke="#1D1D1D"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m1 17.947 4.135-4.135a1 1 0 0 1 1.414 0l1.714 1.714 7.263-7.263-1.714-1.714a1 1 0 0 1 0-1.414l3.428-3.428a1 1 0 0 1 1.415 0l1.81 1.81a5 5 0 0 1 0 7.071l-8.57 8.57c-1.528 1.528-3.632 3.026-5.941 3.026-1.566 0-2.533-.83-2.533-1.816 0-1.103 1.676-1.565 2.421-1.592 3.632 0 5.194 1.986 7.658 4.224"
      />
    </g>
    <defs>
      <clipPath id="ic_phone_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIcPhone;
