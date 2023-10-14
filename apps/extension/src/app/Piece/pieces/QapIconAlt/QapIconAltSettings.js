import { useStore } from "/src/app/store";
import Dialog from "@mui/material/Dialog";
import { css } from "@emotion/react";
import { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";

import HeadphonesIcon from "@mui/icons-material/Headphones";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import { GiSpiralLollipop } from "react-icons/gi";
import { BiSolidCat } from "react-icons/bi";
import { PiDog } from "react-icons/pi";
import { FaIceCream } from "react-icons/fa";
import { BiSolidGuitarAmp } from "react-icons/bi";
import { LiaHeartbeatSolid } from "react-icons/lia";

function QapIconAltSettings() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsDialogOpen(true)}
        css={css`
          background-color: #222;
          color: #fff;
          border: 1px solid #444;
          border-radius: 5px;
          padding: 6px 8px 3px;
          :hover {
            color: #000;
            background-color: #fff;
          }
        `}
      >
        <EditIcon
          css={css`
            font-size: 16px;
          `}
        />
      </button>
      <Dialog
        open={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        css={css`
          .MuiDialog-paper {
            border-radius: 5px;
            border: 1px solid #aaa;
            background-color: #000;
          }
        `}
      >
        <QapIconAltSettingsSelection />
      </Dialog>
    </div>
  );
}

function QapIconAltSettingsSelection() {
  const icons = useStore(
    (state) => state.piece.pieces.find((piece) => piece.id === "34637b81-0c1a-4982-b130-0ff9ac232e4d").icons
  );
  const setPiecePrefs = useStore((state) => state.piece.setPiecePrefs);
  const selectedIcon = useStore((state) => state.piece.prefs["34637b81-0c1a-4982-b130-0ff9ac232e4d"].icon);

  function handleChange(icon) {
    let newPref = { enabled: true, icon };
    setPiecePrefs("34637b81-0c1a-4982-b130-0ff9ac232e4d", newPref);
  }

  return (
    <div
      css={css`
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-gap: 15px;
        padding: 10px;
      `}
    >
      {icons.map((icon) => (
        <button
          css={css`
            color: ${icon === selectedIcon ? "#fff" : "#777"};
            border: 0;
            background-color: #000;

            :hover {
              color: #fff;
            }
          `}
          key={icon}
          onClick={() => handleChange(icon)}
        >
          {
            {
              Headphones: <HeadphonesIcon style={{ fontSize: "26px" }} />,
              Lollipop: <GiSpiralLollipop style={{ fontSize: "30px" }} />,
              Dog: <PiDog style={{ fontSize: "28px" }} />,
              Cat: <BiSolidCat style={{ fontSize: "26px" }} />,
              Burger: <LunchDiningIcon style={{ fontSize: "25px" }} />,
              Pokeball: <CatchingPokemonIcon style={{ fontSize: "26px" }} />,
              IceCream: <FaIceCream style={{ fontSize: "24px" }} />,
              GuitarAmp: <BiSolidGuitarAmp style={{ fontSize: "23px" }} />,
              Heartbeat: <LiaHeartbeatSolid style={{ fontSize: "28px" }} />,
            }[icon]
          }
        </button>
      ))}
    </div>
  );
}

export default QapIconAltSettings;
