import React from 'react';
import LoremIpsum from 'react-lorem-ipsum';

const HomePage = () => (
  <div className="layout">
    <h2 className="subtitle">Welcome! Let&apos;s discover the Magic of Math&apos;s</h2>
    <LoremIpsum
      p={2}
      avgSentencesPerParagraph={4}
      random={false}
    />
  </div>
);

export default HomePage;
