import type { SVGProps } from 'react';
const SvgIcCircleArrowRight42 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 30 30"
    {...props}
  >
    <g clipPath="url(#ic__circle_arrow_right_42_svg__a)">
      <g filter="url(#ic__circle_arrow_right_42_svg__b)">
        <circle cx={15} cy={15} r={12.5} fill="#fff" />
      </g>
      <path
        stroke="#656565"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16.857 10.714 12.572 15l4.285 4.286"
      />
    </g>
    <defs>
      <clipPath id="ic__circle_arrow_right_42_svg__a">
        <path fill="#fff" d="M0 0h30v30H0z" />
      </clipPath>
      <filter
        id="ic__circle_arrow_right_42_svg__b"
        width={29}
        height={29}
        x={0.5}
        y={0.5}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset />
        <feGaussianBlur stdDeviation={1} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_2068_12917"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_2068_12917"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default SvgIcCircleArrowRight42;
