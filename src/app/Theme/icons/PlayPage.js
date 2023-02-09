function PlayPage({ ...props }) {
  return (
    <svg width="100%" height="100%" viewBox="0 0 48 42" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="2.5" y="2.5" width="43" height="37" rx="9.5" stroke="currentColor" strokeWidth="5" />
      <mask id="path-2-inside-1_14_179" fill="currentColor">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M45 13H3V30H45V13ZM13.6154 27.1623L24.6923 21.3785L13.6154 15.5947L13.6154 27.1623Z"
        />
      </mask>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M45 13H3V30H45V13ZM13.6154 27.1623L24.6923 21.3785L13.6154 15.5947L13.6154 27.1623Z"
        fill="currentColor"
      />
      <path
        d="M3 13V3H-7V13H3ZM45 13H55V3H45V13ZM3 30H-7V40H3V30ZM45 30V40H55V30H45ZM24.6923 21.3785L29.3208 30.2429L46.2975 21.3785L29.3208 12.5141L24.6923 21.3785ZM13.6154 27.1623L3.61538 27.1623L3.61538 43.6649L18.2439 36.0267L13.6154 27.1623ZM13.6154 15.5947L18.2439 6.73033L3.61538 -0.907944L3.61538 15.5947L13.6154 15.5947ZM3 23H45V3H3V23ZM13 30V13H-7V30H13ZM45 20H3V40H45V20ZM35 13V30H55V13H35ZM20.0638 12.5141L8.98686 18.298L18.2439 36.0267L29.3208 30.2429L20.0638 12.5141ZM8.98686 24.459L20.0638 30.2429L29.3208 12.5141L18.2439 6.73033L8.98686 24.459ZM23.6154 27.1623L23.6154 15.5947L3.61538 15.5947L3.61538 27.1623L23.6154 27.1623Z"
        fill="currentColor"
        mask="url(#path-2-inside-1_14_179)"
      />
    </svg>
  );
}

export default PlayPage;
