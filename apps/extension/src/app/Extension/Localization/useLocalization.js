import { localizations } from "./localization";
import { useStore } from "/src/app/store";

function useLocalization() {
  const locale = useStore((state) => state.extension.prefs.locale);

  return (message) => {
    let translation = localizations[message][locale];
    if (translation === undefined) {
      translation = localizations[message]["en"];
    }

    return translation;
  };
}

export default useLocalization;
