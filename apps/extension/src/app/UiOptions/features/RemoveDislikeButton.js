function RemoveDislikeButton() {
  const style = /*css*/ `
    .dislike {
      display: none !important;
    }

    .like {
      margin-left: 20px;
    }
  `;
  return <style id="RemoveDislikeButton">{style}</style>;
}

export default RemoveDislikeButton;
