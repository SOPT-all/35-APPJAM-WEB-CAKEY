import type { SVGProps } from 'react';
const SvgIcGpsmarkerOff = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#ic_gpsmarker_off_svg__a)">
      <path fill="#A9A9A9" d="M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0" />
      <circle cx={12} cy={12} r={8.25} stroke="#A9A9A9" strokeWidth={1.5} />
      <path
        stroke="#A9A9A9"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M1.5 12h4M18.5 12h4M12 22.5v-4M12 5.5v-4"
      />
    </g>
    <defs>
      <clipPath id="ic_gpsmarker_off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIcGpsmarkerOff;
