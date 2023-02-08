import { React, useCallback, useState } from 'react';

const FadeImage = ({ src, alt, imgClass, useClick }) => {
  const [loaded, setLoaded] = useState(false);
  const memoizedHandleClick = useCallback(() => {}, []);

  return (
    <img
      src={src}
      alt={alt}
      onLoad={() => setLoaded(true)}
      onClick={useClick}
      style={{
        opacity: loaded ? 1 : 0,
        transition: 'opacity 0.5s ease-in-out'
      }}
      className={imgClass}
    />
  );
};

export default FadeImage;