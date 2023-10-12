import { useStore } from "/src/app/store";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import { GiSpiralLollipop } from "react-icons/gi";
import { BiSolidCat } from "react-icons/bi";
import { PiDog } from "react-icons/pi";
import { FaIceCream } from "react-icons/fa";

function QapIconAlt() {
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

export default QapIconAlt;
