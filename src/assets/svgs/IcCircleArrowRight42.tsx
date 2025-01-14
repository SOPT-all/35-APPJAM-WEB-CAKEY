import type { SVGProps } from 'react';
const SvgIcCircleArrowRight42 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 42 42"
    {...props}
  >
    <g filter="url(#ic__circle_arrow_right_42_svg__a)">
      <circle cx={21} cy={21} r={17.5} fill="#fff" />
    </g>
    <path
      stroke="#6A6A6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m19 27 6-6-6-6"
    />
    <defs>
      <filter
        id="ic__circle_arrow_right_42_svg__a"
        width={39}
        height={39}
        x={1.5}
        y={1.5}
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
          result="effect1_dropShadow_1437_18623"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_1437_18623"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default SvgIcCircleArrowRight42;
