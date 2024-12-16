import styles from "./BackgroundDivider.module.scss";

const BackgroundDivider = () => {
  return (
    <svg
      height="273"
      viewBox="0 0 2560 273"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.background}
    >
      <g filter="url(#filter0_f_1840_3477)">
        <rect
          x="-171.336"
          y="66.9995"
          width="2953.33"
          height="139.333"
          fill="#0E0E0E"
          fillOpacity="1"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_1840_3477"
          x="-238.003"
          y="0.33284"
          width="3086.67"
          height="272.667"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="33.3333"
            result="effect1_foregroundBlur_1840_3477"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default BackgroundDivider;
