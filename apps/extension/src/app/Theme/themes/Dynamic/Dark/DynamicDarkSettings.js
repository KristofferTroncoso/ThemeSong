import { css } from "@emotion/react";
import { useStore } from "/src/app/store";
import SaturationSlider from "../../../components/SaturationSlider";
import TopBar from "../../../icons/TopBar";
import PlayBar from "../../../icons/PlayBar";
import PlayPage from "../../../icons/PlayPage";
import Body from "../../../icons/Body";
import BrightnessSectionSlider from "../../../components/BrightnessSectionSlider";
import OpacityIcon from "@mui/icons-material/Opacity";

function DynamicDarkSettings() {
  const dynamicPrefs = useStore((state) =>
    state.theme.themePrefs.find((theme) => theme.id === "db8854e3-6753-4639-b244-c8091f3b9fcb")
  );
  const dynamicDarkPrefs = useStore(
    (state) => state.theme.themePrefs.find((theme) => theme.id === "db8854e3-6753-4639-b244-c8091f3b9fcb").dark
  );
  const themePrefs = useStore((state) => state.theme.themePrefs);
  const changeThemePrefs = useStore((state) => state.theme.changeThemePrefs);

  function handleChange(e) {
    let newDarkPrefs = { ...dynamicDarkPrefs, [e.target.name]: e.target.value };
    let newDynamicUserPrefs = { ...dynamicPrefs, dark: newDarkPrefs };
    let newThemePrefsArr = themePrefs.map((themePrefs) =>
      themePrefs.id === "db8854e3-6753-4639-b244-c8091f3b9fcb" ? newDynamicUserPrefs : themePrefs
    );
    console.log(newThemePrefsArr);
    changeThemePrefs(newThemePrefsArr);
    chrome.storage.local.set({ themePrefs: newThemePrefsArr }, () =>
      console.log("chrome.storage.local.set({themePrefs}")
    );
  }

  function handleLightChange(e) {
    let dynamicLightPrefsLightnessCopy = [...dynamicDarkPrefs.lightness];
    dynamicLightPrefsLightnessCopy[e.target.name] = e.target.value;
    let newDarkPrefs = {
      ...dynamicDarkPrefs,
      lightness: dynamicLightPrefsLightnessCopy,
    };
    let newDynamicUserPrefs = { ...dynamicPrefs, dark: newDarkPrefs };
    let newThemePrefsArr = themePrefs.map((themePrefs) =>
      themePrefs.id === "db8854e3-6753-4639-b244-c8091f3b9fcb" ? newDynamicUserPrefs : themePrefs
    );
    console.log(newThemePrefsArr);
    changeThemePrefs(newThemePrefsArr);
    chrome.storage.local.set({ themePrefs: newThemePrefsArr }, () =>
      console.log("chrome.storage.local.set({themePrefs}")
    );
  }

  return (
    <div
      css={css`
        width: 95%;
        max-width: 80%;
        background: #222;
        padding: 5px;
        border-radius: 3px;
        margin: 5px;
        color: #fff;

        .MuiSlider-root {
          padding: 0;
        }
      `}
    >
      <BrightnessSectionSlider
        name="0"
        icon={<TopBar />}
        handleChange={handleLightChange}
        value={dynamicDarkPrefs.lightness[0]}
        min={0}
        max={30}
        dark
      />
      <BrightnessSectionSlider
        name="1"
        icon={<PlayPage />}
        handleChange={handleLightChange}
        value={dynamicDarkPrefs.lightness[1]}
        min={0}
        max={30}
        dark
      />
      <BrightnessSectionSlider
        name="2"
        icon={<PlayBar />}
        handleChange={handleLightChange}
        value={dynamicDarkPrefs.lightness[2]}
        min={0}
        max={30}
        dark
      />
      <BrightnessSectionSlider
        name="3"
        icon={<Body />}
        handleChange={handleLightChange}
        value={dynamicDarkPrefs.lightness[3]}
        min={0}
        max={30}
        dark
      />
      <div
        css={css`
          display: flex;
          align-items: center;
          align-content: center;
          margin-top: 10px;
          .MuiSlider-rail {
            opacity: 1;
            background: linear-gradient(90deg, hsl(230 20% 50%) 20%, hsl(230 100% 50%) 80%);
          }
          input::-webkit-outer-spin-button,
          input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }
        `}
      >
        <OpacityIcon sx={{ height: "16px", width: "16px", marginRight: "6px" }} />
        <SaturationSlider
          name="saturation"
          value={dynamicDarkPrefs.saturation}
          onChange={handleChange}
          step={0.1}
          min={0.5}
          max={1}
          css={css`
            width: 80%;
            height: 8px;
            border-radius: 2px;

            .MuiSlider-thumb {
              color: #444;
              border: 1px solid #fff;
              width: 12px;
              height: 12px;
            }
          `}
        />
        <input
          type="number"
          min={0.5}
          max={1}
          name="saturation"
          value={dynamicDarkPrefs.saturation}
          onChange={handleChange}
          css={{
            width: "26px",
            backgroundColor: "inherit",
            border: 0,
            marginLeft: "8px",
          }}
        />
      </div>
    </div>
  );
  //   <div
  //     className="DynamicThemeDark"
  //     css={css`
  //       background: #222;
  //       padding: 5px;
  //       border-radius: 2px;
  //       color: #ddd;

  //       .MuiSlider-root {
  //         padding: 0;
  //       }
  //     `}
  //   >
  //     <form onSubmit={handleSave}>
  //       <div
  //         style={{
  //           display: "flex",
  //           justifyContent: "space-between",
  //           height: "21px",
  //           alignContent: "center",
  //           alignItems: "center",
  //         }}
  //       >
  //         <div
  //           style={{
  //             display: "flex",
  //             alignContent: "center",
  //             alignItems: "center",
  //           }}
  //         >
  //           <StyledSlider
  //             name="lightnessSettingNavBar"
  //             value={dynamicDarkPrefs.lightnessSettingNavBar}
  //             onChange={handleChange}
  //             step={1}
  //             min={0}
  //             max={30}
  //           />
  //           <input
  //             type="number"
  //             min="0"
  //             max="30"
  //             name="lightnessSettingNavBar"
  //             value={dynamicDarkPrefs.lightnessSettingNavBar}
  //             onChange={handleChange}
  //             style={{
  //               width: "40px",
  //               backgroundColor: "inherit",
  //               border: 0,
  //               color: "white",
  //               marginLeft: "8px",
  //             }}
  //           />
  //         </div>
  //       </div>
  //       <div
  //         style={{
  //           display: "flex",
  //           justifyContent: "space-between",
  //           height: "21px",
  //           alignContent: "center",
  //           alignItems: "center",
  //         }}
  //       >
  //         <div
  //           style={{
  //             display: "flex",
  //             alignContent: "center",
  //             alignItems: "center",
  //           }}
  //         >
  //           <StyledSlider
  //             name="lightnessSettingPlayPage"
  //             value={dynamicDarkPrefs.lightnessSettingPlayPage}
  //             onChange={handleChange}
  //             step={1}
  //             min={0}
  //             max={30}
  //           />
  //           <input
  //             type="number"
  //             min="0"
  //             max="30"
  //             name="lightnessSettingPlayPage"
  //             value={dynamicDarkPrefs.lightnessSettingPlayPage}
  //             onChange={handleChange}
  //             style={{
  //               width: "40px",
  //               backgroundColor: "inherit",
  //               border: 0,
  //               color: "white",
  //               marginLeft: "8px",
  //             }}
  //           />
  //         </div>
  //       </div>
  //       <div
  //         style={{
  //           display: "flex",
  //           justifyContent: "space-between",
  //           height: "21px",
  //           alignContent: "center",
  //           alignItems: "center",
  //         }}
  //       >
  //         <div
  //           style={{
  //             display: "flex",
  //             alignContent: "center",
  //             alignItems: "center",
  //           }}
  //         >
  //           <StyledSlider
  //             name="lightnessSettingPlayerBar"
  //             value={dynamicDarkPrefs.lightnessSettingPlayerBar}
  //             onChange={handleChange}
  //             step={1}
  //             min={0}
  //             max={30}
  //           />
  //           <input
  //             type="number"
  //             min="0"
  //             max="30"
  //             name="lightnessSettingPlayerBar"
  //             value={dynamicDarkPrefs.lightnessSettingPlayerBar}
  //             onChange={handleChange}
  //             style={{
  //               width: "40px",
  //               backgroundColor: "inherit",
  //               border: 0,
  //               color: "white",
  //               marginLeft: "8px",
  //             }}
  //           />
  //         </div>
  //       </div>
  //       <div
  //         style={{
  //           display: "flex",
  //           justifyContent: "space-between",
  //           height: "21px",
  //           alignContent: "center",
  //           alignItems: "center",
  //         }}
  //       >
  //         <div
  //           style={{
  //             display: "flex",
  //             alignContent: "center",
  //             alignItems: "center",
  //           }}
  //         >
  //           <StyledSlider
  //             name="lightnessSettingBody"
  //             value={dynamicDarkPrefs.lightnessSettingBody}
  //             onChange={handleChange}
  //             step={1}
  //             min={0}
  //             max={30}
  //           />
  //           <input
  //             type="number"
  //             min="0"
  //             max="30"
  //             name="lightnessSettingBody"
  //             value={dynamicDarkPrefs.lightnessSettingBody}
  //             onChange={handleChange}
  //             style={{
  //               width: "40px",
  //               backgroundColor: "inherit",
  //               border: 0,
  //               color: "white",
  //               marginLeft: "8px",
  //             }}
  //           />
  //         </div>
  //       </div>
  //       <div
  //         style={{
  //           display: "flex",
  //           justifyContent: "space-between",
  //           height: "21px",
  //           alignContent: "center",
  //           alignItems: "center",
  //         }}
  //       >
  //         <div
  //           style={{
  //             display: "flex",
  //             alignContent: "center",
  //             alignItems: "center",
  //           }}
  //         >
  //           <OpacityIcon
  //             sx={{ height: "16px", width: "16px", marginRight: "6px" }}
  //           />
  //           <StyledSlider
  //             name="saturationSetting"
  //             value={dynamicDarkPrefs.saturationSetting}
  //             onChange={handleChange}
  //             step={0.1}
  //             min={0.5}
  //             max={1}
  //           />
  //           <input
  //             type="number"
  //             min="0.5"
  //             max="1"
  //             name="saturationSetting"
  //             value={dynamicDarkPrefs.saturationSetting}
  //             step="0.1"
  //             onChange={handleChange}
  //             style={{
  //               width: "40px",
  //               backgroundColor: "inherit",
  //               border: 0,
  //               color: "white",
  //               marginLeft: "8px",
  //             }}
  //           />
  //         </div>
  //       </div>
  //     </form>
  //   </div>
  // );
}

export default DynamicDarkSettings;
