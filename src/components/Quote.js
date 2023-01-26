import React from 'react';
import PropTypes from 'prop-types';

const Quote = (props) => {
  const { randomizer } = props;

  // If randomizer has the default value we get a random quote.
  const random = randomizer === -1 ? 12 : 0;
  const randomQuote = Math.floor(Math.random() * random);

  // Motivational math quotes
  const mathQuotes = [
    {
      quote: 'Just because we can\'t find a solution, it doesn\'t mean there isn\'t one.',
      author: 'Andrew Wiles',
    },
    {
      quote: 'Mathematics is a place where you can do things which you can\'t do in the real world.',
      author: 'Marcus du Sautoy',
    },
    {
      quote: 'Millions saw the apple fall, but Newton asked why.',
      author: 'Bernard Baruch',
    },
    {
      quote: 'The definition of a good mathematical problem is the mathematics it generates rather than the problem itself.',
      author: 'Andrew Wiles',
    },
    {
      quote: 'If I were again beginning my studies, I would follow the advice of Plato and start with mathematics.',
      author: 'Galileo Galilei',
    },
    {
      quote: 'Pure mathematicians just love to try unsolved problems — they love a challenge.',
      author: 'Andrew Wiles',
    },
    {
      quote: 'I\'ve always been interested in using mathematics to make the world work better.',
      author: 'Alvin E. Roth',
    },
    {
      quote: 'I hope that seeing the excitement of solving this problem will make mathematicians realize that there are lots and lots of other problems in mathematics which are going to be just as challenging in the future.',
      author: 'Andrew Wiles',
    },
    {
      quote: 'The only way to learn mathematics is to do mathematics.',
      author: 'Paul R. Halmos',
    },
    {
      quote: 'It\'s fine to work on any problem, so long as it generates interesting mathematics along the way — even if you don\'t solve it at the end of the day.',
      author: 'Andrew Wiles',
    },
    {
      quote: 'You don\'t have to be a mathematician to have a feel for numbers.',
      author: 'John Forbes Nash, Jr.',
    },
    {
      quote: 'Sometimes the questions are complicated and the answers are simple.',
      author: 'Dr. Seuss',
    },
    {
      quote: 'The essence of math is not to make simple things complicated, but to make complicated things simple.',
      author: 'Stan Gudder',
    },
  ];

  const todaysQuote = mathQuotes[randomQuote];
  const { quote, author } = todaysQuote;

  return (
    <>
      <blockquote>
        <p className="quote">{quote}</p>
      </blockquote>
      <p className="author">{author}</p>
    </>
  );
};

Quote.defaultProps = {
  randomizer: -1,
};

Quote.propTypes = {
  randomizer: PropTypes.number,
};

export default Quote;
