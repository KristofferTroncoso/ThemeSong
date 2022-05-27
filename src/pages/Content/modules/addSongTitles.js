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
  songDivNode.style.padding = "80px 0 80px 80px";
  songDivNode.style.height = "600px";
  songDivNode.style.maxWidth = "900px";

  let songTitleNode = document.createElement('h1');
  songTitleNode.id = "songTitle";
  songTitleNode.innerText = songName;
  songTitleNode.style.fontSize = "40px";
  songTitleNode.style.color = "var(--ts-primary-text-color)";

  let songDetailsNode = document.createElement('h2');
  songDetailsNode.id = "songDetails";
  songDetailsNode.innerText = songDetails;
  songDetailsNode.style.padding = "30px 0";
  songDetailsNode.style.fontSize = "30px";
  songDetailsNode.style.color = "var(--ts-secondary-text-color)";

  songDivNode.append(songTitleNode);
  songDivNode.append(songDetailsNode);

  thumbnail.append(songDivNode);
}