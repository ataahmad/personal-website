import { React, useState } from 'react';

const FadeImage = ({ src, alt, imgClass }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      onLoad={() => setLoaded(true)}
      style={{
        opacity: loaded ? 1 : 0,
        transition: 'opacity 0.5s ease-in-out'
      }}
      className={imgClass}
    />
  );
};

export default FadeImage;