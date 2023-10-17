import { useStore } from "/src/app/store";
import { css } from "@emotion/react";
import { locales } from "./locales";

function LocaleSettings() {
  const setLocale = useStore((state) => state.extension.setLocale);
  const selectedLocale = useStore((state) => state.extension.prefs.locale);

  function handleChange(e) {
    setLocale(e.target.value);
  }

  return (
    <div
      css={css`
        margin: 5px 10px 0;
      `}
    >
      <span
        css={css`
          font-size: 15px;
          margin-right: 5px;
        `}
      >
        Locale:
      </span>
      <select
        name="locale"
        id="locale"
        value={selectedLocale}
        onChange={handleChange}
        style={{ background: "#f1f1f1", color: "#000", width: "160px" }}
      >
        {Object.entries(locales).map(([key, value]) => (
          <option value={key} key={key}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
}

export default LocaleSettings;
