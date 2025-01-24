import type { SVGProps } from 'react';
const SvgIcTop = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 60 60"
    {...props}
  >
    <g clipPath="url(#ic_top_svg__a)">
      <g filter="url(#ic_top_svg__b)">
        <circle cx={30} cy={30} r={25} fill="#fff" />
      </g>
      <path
        stroke="#6A6A6A"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M38.572 28.714 30 20.143l-8.571 8.571"
      />
      <path
        stroke="#6A6A6A"
        strokeLinecap="round"
        strokeWidth={2}
        d="M30 20v19"
      />
    </g>
    <defs>
      <clipPath id="ic_top_svg__a">
        <path fill="#fff" d="M0 0h60v60H0z" />
      </clipPath>
      <filter
        id="ic_top_svg__b"
        width={61.429}
        height={61.429}
        x={-0.714}
        y={-0.714}
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
        <feGaussianBlur stdDeviation={2.857} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_3673_82451"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_3673_82451"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default SvgIcTop;
