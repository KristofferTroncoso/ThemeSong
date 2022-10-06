import React from 'react';

function AddConfirmUnlike() {
  React.useEffect((e) => {
    const likeButton = document.querySelector('.like');

    let newDiv = document.createElement('div');
    newDiv.id = 'newDiv';
    newDiv.style.height = 'inherit';
    newDiv.style.width = 'inherit';
    newDiv.style.top = '0';
    newDiv.style.left = '0';
    newDiv.style.position = 'absolute';
    newDiv.style.zIndex = '10';
    newDiv.addEventListener('click', confirmBeforeUnlike)
    likeButton.prepend(newDiv);
    
    function confirmBeforeUnlike(e) {
      if (likeButton.ariaPressed === "true") {
        !window.confirm('Remove from liked songs?') && e.stopPropagation();
      }
    }

    return function() {
      newDiv.removeEventListener('click', confirmBeforeUnlike);
    }
  }, []);

  return (
    <div id="AddConfirmUnlike"></div>
  )
}

export default AddConfirmUnlike;