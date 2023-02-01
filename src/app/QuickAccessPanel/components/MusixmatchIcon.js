function MusixmatchIcon({ width, height, color }) {
  return (
    <svg
      width={width || 104}
      height={height || 100}
      viewBox="0 0 104 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M87.0539 2.56316C87.0539 2.56316 63.8503 20.5267 52.2485 29.5085C52.1486 29.5858 51.9488 29.7405 51.9488 29.7405L16.5152 2.7994C14.562 1.27889 12.2887 0.595777 10.066 0.595553C4.90204 0.594879 0.00739406 4.28061 0.00739406 9.7141V30.1454L0 90.8812C0 96.3143 4.89509 100 10.0586 100C12.2818 100 14.5544 99.3169 16.5078 97.7959L51.9488 70.6188C69.5834 84.3479 87.0465 97.7959 87.0465 97.7959C88.9996 99.3164 91.2732 100 93.4957 100C98.6598 100 103.898 96.3147 103.898 90.8812V30.1454V9.30143C103.898 3.86838 98.6666 0.359314 93.5031 0.359314C91.2799 0.359314 89.0072 1.04243 87.0539 2.56316Z"
        fill={color || "white"}
        fill-opacity="0.7"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M25.9448 50.2194L51.9489 70.6188L77.7868 50.2139L51.9489 29.7405L25.9448 50.2194Z"
        fill={color || "white"}
        fill-opacity="0.6"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.0126953 30.0729V70.3663L25.9448 50.2195L0.0126953 30.0729Z"
        fill={color || "white"}
        fill-opacity="0.6"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M77.7866 50.2139L103.898 70.6188V29.7405L77.7866 50.2139Z"
        fill={color || "white"}
        fill-opacity="0.6"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M86.5812 2.91422L51.9487 29.7406L77.7866 50.2137L103.898 29.7406V9.30144C103.898 1.53476 94.0025 -3.473 86.5812 2.91422Z"
        fill={color || "white"}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.5508 2.63954C10.0511 -2.41021 0.0200195 1.78293 0.0200195 9.54962V30.0729L25.9448 50.2195L51.9489 29.7406L16.5508 2.63954Z"
        fill={color || "white"}
      />
    </svg>
  );
}

export default MusixmatchIcon;
