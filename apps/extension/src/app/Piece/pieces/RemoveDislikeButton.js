function RemoveDislikeButton() {
  const style = /*css*/ `
    .dislike {
      display: none !important;
    }

    .like {
      margin-left: 15px;
      margin-right: 10px;
    }
  `;
  return <style id="RemoveDislikeButton">{style}</style>;
}

export default RemoveDislikeButton;
