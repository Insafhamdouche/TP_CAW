import React, { useState } from 'react';
import { AiOutlineLike } from "react-icons/ai";


const LikeButton = () => {
  const [likes, setLikes] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (isClicked) {
    //   setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsClicked(!isClicked);
  };

  return (
    <button id='button' className={ `like-button ${isClicked && 'liked'}` } onClick={ handleClick }>
      <span className="likes-counter">{`${likes}`}  <AiOutlineLike /></span>
    </button>
  );
};

export default LikeButton;



