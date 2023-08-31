import { useStore } from "/src/app/store";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import { GiSpiralLollipop } from "react-icons/gi";
import { BiSolidCat } from "react-icons/bi";
import { PiDog } from "react-icons/pi";
import { FaIceCream } from "react-icons/fa";

export function QapIconAltSettings() {
  const icons = useStore(
    (state) => state.piece.pieces.find((piece) => piece.id === "34637b81-0c1a-4982-b130-0ff9ac232e4d").icons
  );
  const setPiecePrefs = useStore((state) => state.piece.setPiecePrefs);
  const selectedIcon = useStore((state) => state.piece.prefs["34637b81-0c1a-4982-b130-0ff9ac232e4d"].icon);

  function handleChange(e) {
    let newPref = { enabled: true, icon: e.target.value };
    setPiecePrefs("34637b81-0c1a-4982-b130-0ff9ac232e4d", newPref);
  }

  return (
    <div>
      <select name="icons" id="icons" value={selectedIcon} onChange={handleChange}>
        {icons.map((icon) => (
          <option value={icon} key={icon}>
            {icon}
          </option>
        ))}
      </select>
    </div>
  );
}

export default function QapIconAlt() {
  const quickAccessPanelIconPrefs = useStore((state) => state.piece.prefs["34637b81-0c1a-4982-b130-0ff9ac232e4d"]);

  return (
    <>
      {
        {
          Headphones: <HeadphonesIcon style={{ fontSize: "26px" }} />,
          Lollipop: <GiSpiralLollipop style={{ fontSize: "30px" }} />,
          Dog: <PiDog style={{ fontSize: "28px" }} />,
          Cat: <BiSolidCat style={{ fontSize: "26px" }} />,
          Burger: <LunchDiningIcon style={{ fontSize: "25px" }} />,
          Pokeball: <CatchingPokemonIcon style={{ fontSize: "26px" }} />,
          IceCream: <FaIceCream style={{ fontSize: "24px" }} />,
        }[quickAccessPanelIconPrefs.icon]
      }
    </>
  );
}
