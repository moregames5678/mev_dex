export const SvgThumb = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="17"
    fill="none"
    viewBox="0 0 16 17"
    className={className}
  >
    <path
      fill="url(#paint0_linear_2123_487)"
      stroke="url(#paint1_linear_2123_487)"
      d="M15.43 8.76a7.31 7.31 0 1 1-14.62 0 7.31 7.31 0 0 1 14.62 0Z"
    ></path>
    <defs>
      <linearGradient
        id="paint0_linear_2123_487"
        x1="0.905"
        x2="15.149"
        y1="1.917"
        y2="15.752"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1F2023"></stop>
        <stop offset="1" stopColor="#27282C"></stop>
      </linearGradient>
      <linearGradient
        id="paint1_linear_2123_487"
        x1="3.86"
        x2="15.298"
        y1="4.35"
        y2="16.124"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#343538"></stop>
        <stop offset="0.852" stopColor="#1F2023"></stop>
      </linearGradient>
    </defs>
  </svg>
);
