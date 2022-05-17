import { songName, songDetails } from "./addSongDetailsObserver";

let thumbnail = document.querySelector("ytmusic-player #thumbnail");

export function addSongTitles() {
  // let songInfoNode = document.getElementById("songDetailsNode");
  // let songTitleNode = document.getElementById("songTitle")

  if (document.getElementById("songDivNode")) {
    document.getElementById("songDivNode").remove();
  }

  let songDivNode = document.createElement("div");
  songDivNode.id = "songDivNode";
  songDivNode.style.padding = "100px 0 100px 100px";
  songDivNode.style.height = "50%";
  songDivNode.style.maxWidth = "40%";

  let songTitleNode = document.createElement('h1');
  songTitleNode.id = "songTitle";
  songTitleNode.innerText = songName;
  songTitleNode.style.fontSize = "40px";

  let songDetailsNode = document.createElement('h2');
  songDetailsNode.id = "songDetails";
  songDetailsNode.innerText = songDetails;
  songDetailsNode.style.padding = "30px 0";
  songDetailsNode.style.fontSize = "30px";
  songDetailsNode.style.color = "#c7c7c7";

  songDivNode.append(songTitleNode);
  songDivNode.append(songDetailsNode);

  thumbnail.append(songDivNode);
}






/*

<div style="font-size: 25px;padding: 100px;height: 50%;color: #c7c7c7;">
  <h1 style="color: white;font-size: 60px;">Sour Grapes</h1>
  <h1 style="margin-top: 20px;font-size: 40px;">LE SSERAFIM</h1>
  <h3 style="margin-top: 20px;">FEARLESS - 2022</h3>
</div>

*/