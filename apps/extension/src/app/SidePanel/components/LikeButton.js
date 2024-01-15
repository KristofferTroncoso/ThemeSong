import { useStore } from "/src/app/store";
import { BiLike, BiSolidLike } from "react-icons/bi";

function LikeButton() {
  const metadata = useStore((state) => state.media.metadata);

  return (
    <>
      {metadata.liked ? (
        <button
          css={{
            border: "0",
            borderRadius: "50%",
            backgroundColor: "rgb(0 0 0 / 22%)",
            height: "36px",
            width: "36px",
            cursor: "not-allowed !important",
          }}
        >
          <BiSolidLike
            css={{
              padding: "8px",
              color: "#ff0023",
              fontSize: "20px",
            }}
          />
        </button>
      ) : (
        <button
          css={{
            border: "0",
            borderRadius: "50%",
            backgroundColor: "rgb(255 255 255 / 7%)",
            height: "36px",
            width: "36px",

            ":hover": {
              backgroundColor: "rgb(255 255 255 / 0.2)",
            },
          }}
          onClick={(e) => {
            chrome.tabs.query({}, (tabs) => {
              let ytmTabs = tabs.filter((tab) => "url" in tab);
              console.log(ytmTabs);
              chrome.tabs.sendMessage(ytmTabs[0].id, { message: "like" });
            });
          }}
        >
          <BiLike
            css={{
              padding: "8px",
              color: "#ffffff69",
              fontSize: "20px",

              ":hover": {
                color: "#fff",
              },
            }}
          />
        </button>
      )}
    </>
  );
}

export default LikeButton;
