function TopBar({ ...props }) {
  return (
    <svg fill="none" viewBox="0 0 48 42" width="100%" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g stroke="currentColor">
        <g strokeWidth="5">
          <rect height="37" rx="9.5" width="43" x="2.5" y="2.5" />
          <rect height="34" rx="9.5" width="43" x="2.5" y="5.5" />
          <path d="m5.5 10.5h37" strokeLinecap="square" />
        </g>
        <path d="m10 15-.00001 19" strokeLinecap="square" strokeWidth="10" />
      </g>
    </svg>
  );
}

export default TopBar;
