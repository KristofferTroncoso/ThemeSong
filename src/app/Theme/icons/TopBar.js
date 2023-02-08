function TopBar({ ...props }) {
  return (
    <svg
      width="100%"
      length="100%"
      viewBox="0 0 48 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x="2.5"
        y="2.5"
        width="43"
        height="37"
        rx="9.5"
        stroke="currentColor"
        strokeWidth="5"
      />
      <rect
        x="2.5"
        y="5.5"
        width="43"
        height="34"
        rx="9.5"
        stroke="currentColor"
        strokeWidth="5"
      />
      <line
        x1="6"
        y1="10"
        x2="42"
        y2="10"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="square"
      />
    </svg>
  );
}

export default TopBar;
