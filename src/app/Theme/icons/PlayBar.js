function PlayBar({ ...props }) {
  return (
    <svg width="100%" height="100%" viewBox="0 0 48 42" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect
        x="45.5"
        y="39.5"
        width="43"
        height="37"
        rx="9.5"
        transform="rotate(-180 45.5 39.5)"
        stroke="currentColor"
        strokeWidth="5"
      />
      <rect
        x="45.5"
        y="36.5"
        width="43"
        height="34"
        rx="9.5"
        transform="rotate(-180 45.5 36.5)"
        stroke="currentColor"
        strokeWidth="5"
      />
      <line x1="42" y1="32" x2="6" y2="32" stroke="currentColor" strokeWidth="6" strokeLinecap="square" />
    </svg>
  );
}

export default PlayBar;
