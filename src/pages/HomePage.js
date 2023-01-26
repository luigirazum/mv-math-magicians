import React from 'react';
import LoremIpsum from 'react-lorem-ipsum';

const HomePage = () => (
  <div>
    <h2>This is the HomePage</h2>
    <LoremIpsum
      p={2}
      avgSentencesPerParagraph={4}
      random={false}
    />
  </div>
);

export default HomePage;
