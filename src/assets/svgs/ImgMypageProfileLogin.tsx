import type { SVGProps } from 'react';
const SvgImgMypageProfileLogin = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 80 80"
    {...props}
  >
    <circle cx={40} cy={40} r={40} fill="#D2D2D2" />
    <path
      fill="#ECECEC"
      d="M54 37.693h-8.31l5.896 6.274-3.034 3.228-5.897-6.273V49.8h-4.31v-8.878l-5.897 6.273-3.034-3.228 5.896-6.274H27v-4.586h8.31l-5.896-6.274 3.034-3.228 5.897 6.273V21h4.31v8.878l5.897-6.273 3.034 3.228-5.896 6.274H54z"
    />
    <mask
      id="img_mypage_profile_login_svg__a"
      width={80}
      height={80}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}
    >
      <circle cx={40} cy={40} r={40} fill="#D2D2D2" />
    </mask>
    <g mask="url(#img_mypage_profile_login_svg__a)">
      <ellipse cx={40} cy={76} fill="#ECECEC" rx={25} ry={22} />
    </g>
  </svg>
);
export default SvgImgMypageProfileLogin;
