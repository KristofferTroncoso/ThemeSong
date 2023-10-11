import { useStore } from "/src/app/store";
import { css } from "@emotion/react";

function LocaleSettings() {
  const locales = [
    "ar",
    "am",
    "bg",
    "bn",
    "ca",
    "cs",
    "da",
    "de",
    "el",
    "en",
    "en_AU",
    "en_GB",
    "en_US",
    "es",
    "es_419",
    "et",
    "fa",
    "fi",
    "fil",
    "fr",
    "gu",
    "he",
    "hi",
    "hr",
    "hu",
    "id",
    "it",
    "ja",
    "kn",
    "ko",
    "lt",
    "lv",
    "ml",
    "mr",
    "ms",
    "nl",
    "no",
    "pl",
    "pt_BR",
    "pt_PT",
    "ro",
    "ru",
    "sk",
    "sl",
    "sr",
    "sv",
    "sw",
    "ta",
    "te",
    "th",
    "tr",
    "uk",
    "vi",
    "zh_CN",
    "zh_TW",
  ];

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
          margin-right: 20px;
        `}
      >
        Locale:
      </span>
      <select name="locale" id="locale" value={selectedLocale} onChange={handleChange}>
        {locales.map((locale) => (
          <option value={locale} key={locale}>
            {locale}
          </option>
        ))}
      </select>
    </div>
  );
}

export default LocaleSettings;
