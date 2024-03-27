import React from 'react';

const WordDescription = ({ word, meaning }) => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-4xl font-bold" style={{ color: '#00FFDC' }}>Word of The Day: {word}</h2>
      <p className="text-2xl mt-16" style={{ color: '#08FFAB' }}>Meaning : {meaning}</p>
    </div>
  );
};

export default WordDescription;
