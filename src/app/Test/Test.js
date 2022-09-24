import React from 'react';

function Test() {
  React.useEffect(() => {
    const dislikeButtonElement = document.querySelector(".dislike");
    dislikeButtonElement.hidden = true;
  
    const likeButtonElement = document.querySelector(".like");
    likeButtonElement.style.marginLeft = '20px'; 

    return function() {
      const dislikeButtonElement = document.querySelector(".dislike");
      dislikeButtonElement.hidden = false;
    
      const likeButtonElement = document.querySelector(".like");
      likeButtonElement.style.marginLeft = 0; 
    }
  }, []);

  return (<div></div>
    // <style>
    //   {`
    //     .like {
    //       color: red important;
    //       background-color: green !important;
    //     }
    //   `}
    // </style>
  );
}

export default Test;