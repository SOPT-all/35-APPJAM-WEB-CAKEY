import type { SVGProps } from 'react';
const SvgIcMy = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <mask
      id="ic_my_svg__a"
      width={33}
      height={33}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'luminance',
      }}
    >
      <path fill="#fff" d="M32.014.013h-32v32h32z" />
    </mask>
    <g stroke="#040000" strokeWidth={1.5} mask="url(#ic_my_svg__a)">
      <path d="M30.01 16.013a14.1 14.1 0 0 0-1.492-6.293 13.85 13.85 0 0 0-4.174-4.947 14.2 14.2 0 0 0-5.946-2.546 13.9 13.9 0 0 0-6.454.4c-2.093.64-4 1.76-5.586 3.266a13.95 13.95 0 0 0-3.52 5.427 13.995 13.995 0 0 0 1.56 12.507 14.16 14.16 0 0 0 5.04 4.56 14 14 0 0 0 8.866 1.453c1.214-.2 2.107-.533 2.987-1.027.947-.533 1.787-1.24 2.533-2.013l.227-.28c.88-1.187 1.195-2.518 1.031-3.808-.326-2.563-2.689-4.553-5.252-4.875-1.144-.144-2.302.014-3.326.576-1.173.64-1.933 2.227-1.546 3.507.253.84.893 1.467 2.293 1.107.627-.227 1.32-.734 1.56-1.574.267-.906-.28-1.84-1.133-2.253-.614-.293-1.4-.573-2.32-.8-4.214-1.307-8.027 3.053-5.107 6.187" />
      <path d="M16.01 15.093a3.747 3.747 0 1 0 0-7.493 3.747 3.747 0 0 0 0 7.493Z" />
    </g>
  </svg>
);
export default SvgIcMy;
